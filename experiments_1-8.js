function demoFunction() {}

var experiment1 = demoFunction;    // => {}
var experiment2 = demoFunction();  // => undefined

// For the most part I got this right. Line 3 would actually
// be equal to => demoFunction() {}a

function demoFunctionThatReturnsAString() {
  return 'a string'
}

var experiment3 = demoFunctionThatReturnsAString;    // demoFunctionThatReturnsAString() {return 'a string'}
var experiment4 = demoFunctionThatReturnsAString();  // 'a string'

// Explanation: When a function utilizes an explicit return, that value is returned to the calle to the caller,
// otherwise `undefined` is returned to the caller.

function logThis(thing) {
  console.log(thing);
}

// Experiment 7:
logThis(demoFunctionThatReturnsAString);   // => demoFunctionThatReturnsAString() {return 'a string'}
// Experiment 8:
logThis(demoFunctionThatReturnsAString()); // => 'a string'