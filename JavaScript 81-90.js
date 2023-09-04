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
*/