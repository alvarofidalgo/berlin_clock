var berlin_clock = {seconds:{
	                         values:['Y','B'],
	                         selector:function(firstValue){
                                      return firstValue%2;
	                                }
	                        },
                    fiveHours :{ 
                             values:['BBBB','RBBB','RRBB','RRRB','RRRR'],
                             selector :function(firstValue){
                                        return Math.floor(firstValue/5);
                             }
                         }
                    }                  

module.exports = {timeCalculator:function(type,value){
	                  
                      return berlin_clock[type].values[berlin_clock[type].selector(value)]
                  }
                 }