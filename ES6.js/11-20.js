//Lesson Eleven - Use Destructuring Assignment to Assign Variables from Nested Objects
//Input
/*
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;


// Only change code above this line
console.log(lowToday);
console.log(highToday);
*/

//Lesson Twelve - Use Destructuring Assignment to Assign Variables from Arrays
//Input
/*
let a = 8, b = 6;
// Only change code below this line
 [a,b] = [b,a];
console.log(a, b);
console.log(b, a);
*/

//Lesson Thirteen - Destructuring via rest elements
//Input
/*
function removeFirstTwo(list) {
  const [, , ...shorterlist] = list;
  return shorterlist;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
*/



/* Chat GPT Explaination------------------------------------------------------------------------------------------------------------------


Function Definition:

javascript
Copy code
function removeFirstTwo(list) {
This line declares a function named removeFirstTwo that takes one parameter called list. This function is designed to remove the first two elements from the provided list.

Destructuring Assignment:

javascript
Copy code
const [, , ...shorterlist] = list;
This line uses destructuring assignment to extract the elements from the list array. The [, , ...shorterlist] syntax skips the first two elements of the list and collects the rest of the elements into a new array called shorterlist. The ... is the spread/rest operator, which gathers the remaining elements into an array.

So, after this line, shorterlist will contain all the elements from list except the first two.

Return Statement:

javascript
Copy code
return shorterlist;
This line returns the shorterlist array, which is essentially the list array with the first two elements removed.

Usage:

After defining the removeFirstTwo function, the code proceeds to use it:

javascript
Copy code
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Here, an array called source is defined with 10 elements.

javascript
Copy code
const sourceWithoutFirstTwo = removeFirstTwo(source);
This line calls the removeFirstTwo function with the source array as an argument. As a result, sourceWithoutFirstTwo will now contain the elements of source with the first two elements removed.

So, if you were to print the value of sourceWithoutFirstTwo, it would be [3, 4, 5, 6, 7, 8, 9, 10], which is the source array with the first two elements [1, 2] removed.
*/

//Lesson Fourteen - Use Destructuring Assignment to Pass an Object as a Function's Parameters
//Input
/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => ((max + min) / 2.0);
// Only change code above this line
*/

//Lesson Fifteen - Create Strings using Template Literals
//Input
/*

                                                              My Attempt                  
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [`<li class="text-warning">${result.failure[0]}</li>`,
`<li class="text-warning">${result.failure[1]}</li>`,
`<li class="text-warning">${result.failure[2]}</li>`,
  ];
  let (i = 0, i<arr.length, i++);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);



                                                                      Youtube
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(x => {
    return `<li class="text-warning">${x}</li>`
  })
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

Chat GPT Explained
t appears you have a JavaScript code snippet that defines an object called result, a function called makeList, and then uses that function to create a list of items from the result.failure array.

Let's break it down step by step:

The result Object:

javascript
Copy code
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
Here, you have an object called result. It contains three properties: success, failure, and skipped. Each property holds an array of strings. In this context, it seems to be categorizing certain items as either "success," "failure," or "skipped."

The makeList Function:

javascript
Copy code
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(x => {
    return `<li class="text-warning">${x}</li>`;
  });
  // Only change code above this line

  return failureItems;
}
This is a function definition named makeList. It takes an array arr as an argument. Inside the function:

It uses the map method to iterate over each element of the input array arr.
For each element x in the array, it creates an HTML list item (<li>) with the class "text-warning" and the content of the element x.
The result of the map operation is an array of these HTML list item strings, stored in the failureItems constant.
Finally, it returns the failureItems array.
Creating a List of Failures:

javascript
Copy code
const failuresList = makeList(result.failure);
Here, you're using the makeList function to create a list of failure items. You pass the result.failure array as an argument to the function, which means it will create a list of HTML list items for each failure item in the result.failure array. The resulting array is stored in the failuresList variable.

So, if you were to log failuresList, you would get an array of HTML list items representing the failures with the "text-warning" class applied to each one.

Here's an example of what failuresList might look like if you logged it:

javascript
Copy code
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
You could then use this array of strings to render the list of failures in your HTML document as desired
*/

//Lesson Fifteen - Write Concise Object Literal Declarations Using Object Property Shorthand
//Input
/*
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
*/

//Lesson Sixteen - Write Concise Declarative Functions with ES6
//Input
/*
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(48);
console.log(bicycle.gear);
*/

//Lesson Seventeen - Use class Syntax to Define a Constructor Function
//Input
/*
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
*/

//Lesson Eighteen - Use getters and setters to Control Access to an Object
//Input
/*
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
*/

//Lesson Nineteen - Create a Module Script
//Input
/*
<html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
*/

//Lesson Twenty - Use export to Share a Code Block
//Input
/*
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString };
const inputString = "Hello, World!";

console.log(uppercaseString(inputString));
console.log(lowercaseString(inputString));
*/

