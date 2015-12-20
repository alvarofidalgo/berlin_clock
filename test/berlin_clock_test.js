var chai = require('chai'),
    expect = chai.expect,
    clock = require('./../lib/berlin_clock.js').Seconds;


    describe('Berlin clock',function(){


    	it ('First row turn on in odd seconds',function(){ 
             expect(clock(0)).to.be.equal('Y');
    	});

    	it ('Firs row turn off in even seconds ',function(){
    		expect(clock(1)).to.be.equal('B');
    	})


    })