//Lesson One Hundred and One - Nesting For Loops
//Input
/*
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
product = product * arr[i][j]   
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/

//Lesson One Hundred and Two - Iterate with JavaScript Do...While Loops
//Input
/*
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 10)
console.log(myArray);
console.log(i);
*/

//Lesson One Hundred and Three - Replace Loops using Recursion
//Input
/*
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
if (n <= 0) {
  return 0;
 } else {
   return sum(arr, n - 1) + arr[n - 1];
 }
}
console.log(sum([1,2,3,4,5], 0));
*/

//Lesson One Hundred and Four - Profile Lookup
//Input
/*
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for(let i=0;i<contacts.length;i++){
    if(name===contacts[i]["firstName"] || name===contacts[i]["lastName"]){
        if(contacts[i][prop]){
            return contacts[i][prop];
        }else{
            return "No such property"
        }
    }
}
return "No such contact"

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
*/

//Lesson One Hundred and Five - Generate Random Fractions with JavaScript
//Input
/*
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}
console.log(randomFraction());
*/

//Lesson One Hundred and Six - Generate Random Whole Numbers with JavaScript
//Input
/*
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
*/

//Lesson One Hundred and Six - Generate Random Whole Numbers within a Range
//Input
/*
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
  const myMin = 10;
  const myMax = 100; 

console.log(randomRange(myMin, myMax));
*/

//Lesson One Hundred and Seven - Use the parseInt Function
//Input
/*
function convertToInteger(str) {
return parseInt(str)
}

console.log(convertToInteger("99"));
*/


//Lesson One Hundred and Eight - Use the parseInt Function with a Radix
//Input
/*
function convertToInteger(str) {
return parseInt(str, 2)
}

console.log(convertToInteger("111001"));
*/

//Lesson One Hundred and Nine - Use the Conditional (Ternary) Operator
//Input
/*
function checkEqual(a, b) {
function checkEqual(a, b) {
return a === b ? "Equal" : "Not Equal"
}

console.log(checkEqual(1, 1));
*/

//Lesson One Hundred and Ten - Use Multiple Conditional (Ternary) Operators
//Input
/*
function checkSign(num) {
 
  return (num === 0) ? "zero" 
    : (num > 0) ? "positive" 
    : "negative";
}
console.log(checkSign(-10));
*/
