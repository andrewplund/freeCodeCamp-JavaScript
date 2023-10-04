//Lesson One - Using the Test Method
//Input
/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);
*/

//Lesson Two - Match Literal Strings
//Input
/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/

//Lesson Three - Match a Literal String with Different Possibilities
//Input
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
*/

//Lesson Four - Ignore Case While Matching
//Input
/*
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
*/

//Lesson Five - Extract Matches
//Input
/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
*/

//Lesson Six - Find More Than the First Match
//IInput
/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
*/

//Lesson Seven - Match Anything with Wildcard Period
//Input
/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
*/

//Lesson Eight - Match Single Character with Multiple Possibilities
//Input
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
*/

//Lesson Nine - Match Letters of the Alphabet
//Input
/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
*/

//Lesson Nine - Match Numbers and Letters of the Alphabet
//Input
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
*/

//Lesson Ten - Match Single Characters Not Specified
//Input
/*
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou3-3]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
*/

