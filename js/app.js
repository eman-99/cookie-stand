function numRandom(min,max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;}
  
    var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
    
        
   
  
     
  
  var Seattle ={
      location: "Seattle",
      min : 23,
      max : 65,
      avg : 6.3,
      numOfCust : 0, 
      multi : 0,
      numOfCook : [],
      totalOfcook : 0,
  
    randomRandom: function(min,max){
        for(var i = 0 ; i < hours.length ; i++){
         this.numOfCust = numRandom(min,max);

        this.multi = Math.ceil(this.avg * this.numOfCust) ;
        this.numOfCook.push(this.multi);
    this.totalOfcook = this.numOfCook[i] + this.totalOfcook;
    }
        
            
        },
        render: function(){
            var container = document.getElementById('anything');
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);
            var h1El = document.createElement('h1');
            articleEl.appendChild(h1El);
            h1El.textContent = this.location; 
            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            for( var e = 0 ; e < hours.length ; e++){

                var liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = hours[e] + this.numOfCook[e] + ' cookies';
            }
            var totalEl = document.createElement('totalEl');
            ulEl.appendChild(totalEl);
            totalEl.textContent = 'total =' + this.totalOfcook + ' cookies';
                
            }

        };
 Seattle.randomRandom(23,65);
      Seattle.render();
      console.table(Seattle);


      var Tokyo ={
        location: "Tokyo",
        min : 23,
        max : 65,
        avg : 6.3,
        numOfCust : 0, 
        multi : 0,
        numOfCook : [],
        totalOfcook : 0,
    
      randomRandom: function(min,max){
          for(var i = 0 ; i < hours.length ; i++){
           this.numOfCust = numRandom(min,max);
  
          this.multi = Math.ceil(this.avg * this.numOfCust) ;
          this.numOfCook.push(this.multi);
      this.totalOfcook = this.numOfCook[i] + this.totalOfcook;
      }
          
              
          },
          render: function(){
              var container = document.getElementById('anything');
              var articleEl = document.createElement('article');
              container.appendChild(articleEl);
              var h1El = document.createElement('h1');
              articleEl.appendChild(h1El);
              h1El.textContent = this.location; 
              var ulEl = document.createElement('ul');
              articleEl.appendChild(ulEl);
              for( var e = 0 ; e < hours.length ; e++){
  
                  var liEl = document.createElement('li');
                  ulEl.appendChild(liEl);
                  liEl.textContent = hours[e] + this.numOfCook[e] + ' cookies';
              }
              var totalEl = document.createElement('totalEl');
              ulEl.appendChild(totalEl);
              totalEl.textContent = 'total =' + this.totalOfcook + ' cookies';
                  
              }
  
          };
          Tokyo.randomRandom(23,65);
          Tokyo.render();
        console.table(Tokyo);



        var Dubai ={
            location: "Dubai",
            min : 23,
            max : 65,
            avg : 6.3,
            numOfCust : 0, 
            multi : 0,
            numOfCook : [],
            totalOfcook : 0,
        
          randomRandom: function(min,max){
              for(var i = 0 ; i < hours.length ; i++){
               this.numOfCust = numRandom(min,max);
      
              this.multi = Math.ceil(this.avg * this.numOfCust) ;
              this.numOfCook.push(this.multi);
          this.totalOfcook = this.numOfCook[i] + this.totalOfcook;
          }
              
                  
              },
              render: function(){
                  var container = document.getElementById('anything');
                  var articleEl = document.createElement('article');
                  container.appendChild(articleEl);
                  var h1El = document.createElement('h1');
                  articleEl.appendChild(h1El);
                  h1El.textContent = this.location; 
                  var ulEl = document.createElement('ul');
                  articleEl.appendChild(ulEl);
                  for( var e = 0 ; e < hours.length ; e++){
      
                      var liEl = document.createElement('li');
                      ulEl.appendChild(liEl);
                      liEl.textContent = hours[e] + this.numOfCook[e] + ' cookies';
                  }
                  var totalEl = document.createElement('totalEl');
                  ulEl.appendChild(totalEl);
                  totalEl.textContent = 'total =' + this.totalOfcook + ' cookies';
                      
                  }
      
              };
              Dubai.randomRandom(23,65);
              Dubai.render();
              console.table(Dubai);
        
      
    
              var Paris ={
                location: "Paris",
                min : 23,
                max : 65,
                avg : 6.3,
                numOfCust : 0, 
                multi : 0,
                numOfCook : [],
                totalOfcook : 0,
            
              randomRandom: function(min,max){
                  for(var i = 0 ; i < hours.length ; i++){
                   this.numOfCust = numRandom(min,max);
          
                  this.multi = Math.ceil(this.avg * this.numOfCust) ;
                  this.numOfCook.push(this.multi);
              this.totalOfcook = this.numOfCook[i] + this.totalOfcook;
              }
                  
                      
                  },
                  render: function(){
                      var container = document.getElementById('anything');
                      var articleEl = document.createElement('article');
                      container.appendChild(articleEl);
                      var h1El = document.createElement('h1');
                      articleEl.appendChild(h1El);
                      h1El.textContent = this.location; 
                      var ulEl = document.createElement('ul');
                      articleEl.appendChild(ulEl);
                      for( var e = 0 ; e < hours.length ; e++){
          
                          var liEl = document.createElement('li');
                          ulEl.appendChild(liEl);
                          liEl.textContent = hours[e] + this.numOfCook[e] + ' cookies';
                      }
                      var totalEl = document.createElement('totalEl');
                      ulEl.appendChild(totalEl);
                      totalEl.textContent = 'total =' + this.totalOfcook + ' cookies';
                          
                      }
          
                  };
                  Paris.randomRandom(23,65);
                  Paris.render();
                  console.table(Paris);
            
                  var lima ={
                    location: "lima",
                    min : 23,
                    max : 65,
                    avg : 6.3,
                    numOfCust : 0, 
                    multi : 0,
                    numOfCook : [],
                    totalOfcook : 0,
                
                  randomRandom: function(min,max){
                      for(var i = 0 ; i < hours.length ; i++){
                       this.numOfCust = numRandom(min,max);
              
                      this.multi = Math.ceil(this.avg * this.numOfCust) ;
                      this.numOfCook.push(this.multi);
                  this.totalOfcook = this.numOfCook[i] + this.totalOfcook;
                  }
                      
                          
                      },
                      render: function(){
                          var container = document.getElementById('anything');
                          var articleEl = document.createElement('article');
                          container.appendChild(articleEl);
                          var h1El = document.createElement('h1');
                          articleEl.appendChild(h1El);
                          h1El.textContent = this.location; 
                          var ulEl = document.createElement('ul');
                          articleEl.appendChild(ulEl);
                          for( var e = 0 ; e < hours.length ; e++){
              
                              var liEl = document.createElement('li');
                              ulEl.appendChild(liEl);
                              liEl.textContent = hours[e] + this.numOfCook[e] + ' cookies';
                          }
                          var totalEl = document.createElement('totalEl');
                          ulEl.appendChild(totalEl);
                          totalEl.textContent = 'total =' + this.totalOfcook + ' cookies';
                              
                          }
              
                      };
                      lima.randomRandom(23,65);
                      lima.render();
                      console.table(lima);
                
              
            
                    
                
                  
        
      