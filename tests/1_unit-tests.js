/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '3.2L';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
      //done();
    });
    
    test('Fractional Input', function(done) {
       var input = '3/2L';
      assert.equal(convertHandler.getNum(input),1.5);
      done();
      //done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.4/3L';
      assert.equal(convertHandler.getNum(input),1.8);
      done();
      //done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/2/2/4L';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
      //done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input),'1');
      done();
      //done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
        assert.equal(convertHandler.getUnit(ele),ele);
        
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input='ppt';
      assert.equal(convertHandler.getUnit(input),'invalid unit');
      done();
      //done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      //var output = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      //console.log('in the test' + typeof convertHandler.convert(input[0],input[1]));
      assert.closeTo(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'Mi'];
      var expected = 8.046;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
    test('Km to Mi', function(done) {
       var input = [5.6/3, 'Mi'];
      var expected = 2.99;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
    test('Lbs to Kg', function(done) {
       var input = [2.666, 'Lbs'];
      var expected = 1.20;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
    test('Kg to Lbs', function(done) {
       var input = [1.20, 'kg'];
      var expected = 2.66;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
      //done();
    });
    
  });

});