'use strict'
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
 var nameOfShope = [];
 
 var container = document.getElementById('cookiesShop');
 var articleEl = document.createElement('article');
 container.appendChild(articleEl);
 var tableEl = document.createElement('table');
 articleEl.appendChild(tableEl);

 var form = document.getElementById("formOfShops");


function shop(
location,
min,
max,
avg){
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.numOfCust = 0;
    this.multi = [];
    this.numOfCook = 0;
    this.totalOfcook = 0;
    nameOfShope.push(this);
    this.randomRandom();
}
 shop.prototype.numRandom = function() {

    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;};



shop.prototype.randomRandom = function(){
        for(var i = 0 ; i < hours.length ; i++){
         this.numOfCust = this.numRandom(this.min,this.max);

        this.numOfCook = Math.ceil(this.avg * this.numOfCust) ;
        this.multi.push(this.numOfCook);
    this.totalOfcook += this.multi[i];
    }
};

shop.prototype.header = function(){

    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = ' ';
     for (let i = 0; i < hours.length; i++) {
         var thEl2 = document.createElement('th')
         trEl.appendChild(thEl2);
         thEl2.textContent = hours[i];}

         var thEl = document.createElement('th');
         trEl.appendChild(thEl);
         thEl.textContent = 'Total';

};

shop.prototype.content = function () {

    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.location;
    for (let i = 0; i < this.multi.length; i++) {
        var tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = this.multi[i];
        }

     var tdToEl = document.createElement('td');
     trEl.appendChild(tdToEl);
     tdToEl.textContent = this.totalOfcook;

};

shop.prototype.footer = function() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdTotEl = document.createElement('td');
    trEl.appendChild(tdTotEl);
    tdTotEl.textContent = 'Total';

   
    
     var totalOfTotal = 0 ;
    for (let i = 0; i < hours.length; i++) {
        var sum = 0 ;
        for (var e = 0; e < nameOfShope.length; e++) {
            sum += nameOfShope[e].multi[i];

            
       }
       totalOfTotal += sum ;
       var tdEl = document.createElement('td');
       trEl.appendChild(tdEl);
       tdEl.textContent = sum;
    }
    
    var tdDEl = document.createElement('td');
    trEl.appendChild(tdDEl);
    tdDEl.textContent = totalOfTotal;
    console.log(this.multi);
};

function sumbmit(event) {
    event.preventDefault();
    console.log(typeof event.target.max.value);
    var name = event.target.name.value;
    var max = parseInt(event.target.max.value);
    var min = parseInt(event.target.min.value);
    var avg = parseFloat(event.target.avg.value);
    var nShop = new Shop(name, min, max, avg);
    console.log(nShop);
    var rowsCout = tableEl.rows.length;
    console.log(rowsCout);
    tableEl.deleteRow(rowsCout - 1);

    nShop.header();
    footer();
    form.reset();

    form.addEventListener("submit", sumbmit);

    
}





var Seattle = new shop('seattle', 23, 65, 6.3);
var tokyo = new shop('tokyo', 3, 24, 1.2);
var dubai = new shop('dubai', 11, 38, 3.7);
var paris = new shop('paris', 20, 38, 2.3);
var lima = new shop('lima', 2, 16, 4.6);




shop.prototype.header();
Seattle.content();
tokyo.content();
dubai.content();
paris.content();
lima.content();
shop.prototype.footer();
