//Lesson Fifty One - Global Scope and Functions
//Input
/*
// Declare the myGlobal variable below this line
let myGlobal= 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
*/

//Lesson Fifty Two - Local Scope and Functions
//Input
/*
function myLocalScope() {
  // Only change code below this line
const myVar = "Hello";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
*/

//Lesson Fifty Three - Global vs. Local Scope in Functions
//Input
/*
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

*/

//Lesson Fifty Four - Understanding Undefined Value returned from a Function
 // Setup
 /*
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
*/

//Lesson Fifty Five - Assignment with a Returned Value
//Input
/*
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);
*/

//Lesson Fifty Six - Stand In Line
//Input
/*
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/

//Lesson Fifty Seven - Understanding Boolean Values
//Input
/*
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
console.log(welcomeToBooleans());
*/

//Lesson Fifty Eight - Use Conditional Logic with If Statements
//Input
/*
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true"
  }
else {
  return "No, that was false"
}

  // Only change code above this line

}
*/

//Lesson Fifty Nine - Comparison with the Equality Operator
//Input
/*
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));
*/

//Lesson Sixty - Comparison with the Strict Equality Operator
//Input
/*
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict('7'));
*/
