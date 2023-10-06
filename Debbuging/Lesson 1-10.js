//Lesson One - Use the JavaScript Console to Check the Value of a Variable
//Input
/*
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(a);
*/

//Lesson Two - Understanding the Differences between the freeCodeCamp and Browser Console
//Input
/*
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();
*/

//Lesson Three - Use typeof to Check the Type of a Variable
//Input
/*
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof(seven));
console.log(typeof(three));
*/

//Lesson Four - Catch Misspelled Variable and Function Names
//Input
/*
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
*/

//Lesson Five - Catch Unclosed Parentheses, Brackets, Braces and Quotes
//Input
/*
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

//Lesson Six - Catch Mixed Usage of Single and Double Quotes
//Input
/*
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
*/

//Lesson Seven - Catch Use of Assignment Operator Instead of Equality Operator
//Input
/*
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
*/

//Lesson Eight - Catch Missing Open and Closing Parenthesis After a Function Call
//Input
/*
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);
*/

//Lesson Nine - Catch Arguments Passed in the Wrong Order When Calling a Function
//Input
/*
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
*/

//Lesson Ten - Catch Off By One Errors When Using Indexing
//Input
/*
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i <= 4; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
*/

//Lesson Eleven - 
//Input
/*
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
*/
