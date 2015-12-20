var chai = require('chai'),
    expect = chai.expect,
    clock = require('./../lib/berlin_clock.js').timeCalculator,
    five = require('./../lib/berlin_clock.js').fiveHours;


    describe('Berlin clock ',function(){


     context(' Top lamp ',function(){

		it (' should be turn on in odd seconds',function(){ 
		    expect(clock('seconds',0)).to.be.equal('Y');
		});

		it (' should be turn off in even seconds ',function(){
		     expect(clock('seconds',1)).to.be.equal('B');
		})

     })

     context(' Hours lamps',function(){

     	context(' First row represents five hours',function(){

     		
     	   describe(' When hour is divisible by five',function(){



     			  it (' like five',function(){
     			  	  expect(clock('fiveHours',5)).to.be.equal('RBBB');
     			  })

     			  it (' like ten',function(){
     			  	 expect(clock('fiveHours',10)).to.be.equal('RRBB');
     			  })

     			  it (' like fifteen',function(){
                     expect(clock('fiveHours',15)).to.be.equal('RRRB');
     			  })

     			  it (' like twenty ',function(){
                     expect(clock('fiveHours',20)).to.be.equal('RRRR');
     			  })
     		})

     		describe ('When hour is not divisible by five ',function(){
     			   it (' like  cero ',function(){
     			   	   expect(clock('fiveHours',0)).to.be.equal('BBBB');
     			   })

     			   it (' like six ',function(){
                     expect(clock('fiveHours',6)).to.be.equal('RBBB');

     			   })
     		})

     	})

     })
    })