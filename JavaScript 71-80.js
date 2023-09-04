//Lesson Seventy One - Introducing Else Statements
//Input
/*
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

console.log(testElse(14));
*/

//Lesson Seventy Two - Introducing Else If Statements
//Input
/*
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
  }
}

console.log(testElseIf(12));
*/

//Lesson Seventy Three - Logical Order in If Else Statements
//Input
/*
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(1));
*/

//Lesson Seventy Four - Chaining If Else Statements
//Input
/*
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
}
else if (num < 10) {
  return "Small"
}
else if (num < 15) {
  return "Medium"
}
else if (num < 20) {
  return "Large"
}
else if (num >= 20) {
  return "Huge"
}

  return "Change Me";
  // Only change code above this line
}

console.log(testSize(77));
*/

//Lesson Seventy Five - Golf Code
//Input
/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1) return "Hole-in-one!";

  else if ((strokes - par) <= -2) return 'Eagle';

  else if ((strokes - par) === -1) return 'Birdie';

  else if (strokes === par) return 'Par';

  else if ((strokes - par) === 1) return 'Bogey';

  else if ((strokes - par) === 2) return 'Double Bogey';

  else return "Go Home!";

  // Only change code above this line
}

console.log(golfScore(4, 7))
*/

//Lesson Seventy Six - Selecting from Many Options with Switch Statements
/*
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
}
  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(4));
*/

//Lesson Seventy Seven - Adding a Default Option in Switch Statements
//Input
/*
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
case "a":
  answer = "apple";
  break;
case "b":
      answer = "bird";
      break;
case "c":
      answer = "cat";
      break;
default:
      answer = "stuff";
      break;
}

  // Only change code above this line
  return answer;
}

console.log(switchOfStuff());
*/

//Lesson Seventy Eight - Multiple Identical Options in Switch Statements
//Input
/*
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
 case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break; 
}
  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(9));
*/

//Lesson Seventy Nine - Replacing If Else Chains with Switch
//Input
/*
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
    case "Bob":
    answer = "Marley";
    break;
    case 42: 
    answer = "The Answer";
    break;
    case 1: 
    answer = "There is no #1";
    break;
    case 99: 
    answer = "Missed me by this much!";
    break;
    case 7: 
    answer = "Ate Nine";
    break;
  
}
  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(99));
*/

//Lesson Eighty - Returning Boolean Values from Functions
//Input
/*
function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  
  // Only change code above this line
}

console.log(isLess(15, 10));
*/