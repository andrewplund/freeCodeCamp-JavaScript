//Lesson One - Compare Scopes of the var and let Keywords
//Input
/*
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
console.log(checkScope());
*/

//Lesson Two - Mutate an Array Declared with const
//Input
/*
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2,
s[1] = 5,
s[2] = 7

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
};
console.log(editInPlace());
*/

//Lesson Three - Prevent Object Mutation
//Input
/*
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
     Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(freezeObj());
*/

//Lesson Four - Use Arrow Functions to Write Concise Anonymous Functions
//Input
/*
const magic = () => {
  return new Date();
};
console.log(magic());
*/

//Lesson Five - Write Arrow Functions with Parameters
//Input
/*
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

//Lesson Six - Set Default Parameters for Your Functions
//Input
/*
// Only change code below this line
const increment = (number, value = 1) => number + value;
console.log(increment(5,));
// Only change code above this line
*/

//Lesson Seven - Use the Rest Parameter with Function Parameters
//Input
/*
const sum = (...args) => { 
  console.log(...args);
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
*/

//Lesson Eight - Use the Spread Operator to Evaluate Arrays In-Place
//Input
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
*/

//Lesson Nine - Use Destructuring Assignment to Extract Values from Objects
//Input
/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
console.log(today);
console.log(tomorrow);
*/

//Lesson Ten - Use Destructuring Assignment to Assign Variables from Objects
//Input
/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;


// Only change code above this line
console.log(highToday);
console.log(highTomorrow);
*/

