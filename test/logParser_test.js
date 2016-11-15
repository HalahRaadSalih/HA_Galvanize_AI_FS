var expect = require('chai').expect;
var dateParser = require('../src/dateParser.js');
var licenseWordCounter = require('../src/licenseWordCounter.js');

describe('Log Parser', function(){
  it('should log all dates in log file', function(done){
    dateParser('production.log', function(str){
      // console.log(str);
      expect(str).to.equal("2014-05-10\n2014-05-11\n2014-05-12\n2014-05-13\n2014-05-14\n2014-05-15\n2014-05-16");
      done();
    });
  });
});

describe('license word counter', function(){
  it('should log an object of words and their count', function(done){
    licenseWordCounter('smaller_sample.txt', function(obj){
      console.log(obj);
      expect(obj).to.deep.equal({
        this: 3,
        counts: 3,
        a: 1,
        lot: 1
      });
      done();
    });
  });
});
