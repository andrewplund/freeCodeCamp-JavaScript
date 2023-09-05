//Lesson Sixty One - Practice comparing different values
//Input
/*
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
*/

//Lesson Sixty Two - Comparison with the Inequality Operator
//Input
/*
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));
*/

//Lesson Sixty Three - Comparison with the Strict Inequality Operator
//Input
/*
// Setup
function testStrictNotEqual(val) {
  if (val !== "17") { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17));
*/

//Lesson Sixty Four - Comparison with the Greater Than Operator
//Input
/*
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(101));
*/

//Lesson Sixty Five - Comparison with the Greater Than Or Equal To Operator
//Input
/*
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(1));
*/

//Lesson Sixty Six - Comparison with the Less Than Operator
//Input
/*
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(5));
*/

//Lesson Sixty Seven - Comparison with the Less Than Or Equal To Operator
//Input
/*
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(15));
*/


//Lesson Sixty Eight - Comparisons with the Logical And Operator
//Input
/*
function testLogicalAnd(val) {
  // Only change code below this line


    if (val <= 50 && val >= 25 ) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(25));
*/

//Lesson Sixty Nine - Comparisons with the Logical Or Operator
//Input
/*
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(25));
*/

//Lesson Seventy - Introducing Else Statements
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