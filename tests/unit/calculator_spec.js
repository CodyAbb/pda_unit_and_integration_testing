var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function() {
    assert.equal(true, true);
  });

  it("can add one to four to get five", function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  });

  it("can subtract four from seven equals three", function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });
  //
  it("can multiply 3 by 5", function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  });

  it("can divide 21 by 7 to get 3", function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });

  it("can concatenate multiple number clicks", function(){
    calculator.numberClick(3);
    calculator.numberClick(5);
    calculator.numberClick(8);
    assert.equal(358, calculator.runningTotal);
  })

  it("can chain multiple operations together", function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(18, calculator.runningTotal)
  })

  it("clear the running total without affecting the calculation", function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(28, calculator.runningTotal)
  })

});
