//Lesson Eighty One - Return Early Pattern for Functions
//Input
/*
// Setup
function abTest(a, b) {
  // Only change code below this line

if (a < 0 || b < 0) return undefined;

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2,2));
*/

//Lesson Eighty Two - Counting Cards
//Input
/*
let count = 0;

function cc(card) {
  // Only change code below this line
let count = 0;

function cc(card) {
  // Only change code below this line
  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

//Lesson Eighty Three = Build JavaScript Objects
//Input
/*
const myDog = {
  // Only change code below this line
"name": "Sammy",
"legs": 4,
"tails": 1,
"friends": [8],

  // Only change code above this line
};
console.log(myDog);
  // Only change code below this line
*/

//Lesson Eighty Four - Accessing Object Properties with Dot Notation
//Input
/*
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
console.log(shirtValue);
*/


//Lesson Eighty Five - Accessing Object Properties with Bracket Notation
//Input
/*
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
console.log(drinkValue);
*/

//Lesson Eighty Six - Accessing Object Properties with Variables
//Input
/*
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
console.log(player);
*/

//Lesson Eighty Seven - Updating Object Properties
//Input
/*
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
console.log(myDog);
*/

//Lesson Eighty Eight - Add New Properties to a JavaScript Object
//Input
/*
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
console.log(myDog);
*/

//Lesson Eighty Nine - Delete Properties from a JavaScript Object
//Input
/*
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
console.log(myDog);
*/

//Lesson Ninety - Using Objects for Lookups
//Input
/*
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
result = lookup[val];

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));
*/

