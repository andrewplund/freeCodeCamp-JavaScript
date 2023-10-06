//Lesson One - Use an Array to Store a Collection of Data
//Input
/*
let yourArray = [1, "one", true, 2, null ]; // Change this line
*/

//Lesson Two -  Access an Array's Contents Using Bracket Notation
//Input
/*
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray [1]= "Andy";
// Only change code above this line
console.log(myArray);
*/

// Lesson Three - Add Items to an Array with push() and unshift()
//Input
/*
function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift('I', 2, 'three'); (Unshift adds to the front)
arr.push(7, 'VIII', 9); (push adds to the end of the array)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/

//Lesson Four - Remove Items from an Array with pop() and shift()
//Input
/*
function popShift(arr) {
  let popped = (arr).pop(); // Change this line (pop from the front)
  let shifted = (arr).shift(); // Change this line (shift from the end)
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

//Lesson Five - Remove Items Using splice() (cuts into the array at the first position, then removes the next amount)
//Input
/*
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(4,4);
arr.shift();
// Only change code above this line
console.log(arr);
*/

//Lesson Six - Add Items Using splice() Inserts into the position after the "cut".
//Input
/*
function htmlColorNames(arr) {
// Only change code below this line
(arr).splice(0,2,'DarkSalmon','BlanchedAlmond');
// Only change code above this line
return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

//Lesson Seven - Copy Array Items Using slice() First number insertion point, second stop at and not included.
//Input
/*
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

//Lesson Eight - Copy an Array with the Spread Operator
//Input
/*
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
  newArr.push([...arr]);                      ##push adds to the array, ...copies in order. we therefore copied and added.
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

//Lesson Nine - Combine Arrays with the Spread Operator
//Input
/*
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
*/

//Lesson Ten - Check For The Presence of an Element With indexOf()
//Input
/*
function quickCheck(arr, elem) {
  // Only change code below this line
if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/
