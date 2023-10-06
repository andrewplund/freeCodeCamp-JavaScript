//Lesson Eleven - Match Characters that Occur One or More Times
//Input
/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);
*/

//Lesson Twelve - Match Characters that Occur Zero or More Times
//Input
/*
// Only change code below this line
//let chewieRegex = /Aa*/; 
//Only change code above this line
//let result = chewieQuote.match(chewieRegex);


//Lesson Thirteen - Find Characters with Lazy Matching
//Input
/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h>*?1>/; // Change this line
let result = text.match(myRegex);
console.log(result);
*/

//Lesson Fourteen - Find One or More Criminals in a Hunt
//Input
/*
let reCriminals = /C+/; // Change this line
*/

//Lesson Fifteen - Match Beginning String Patterns 
//Input
/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
*/

//Lesson Sixteen - Match Ending String Patterns
//Input
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
*/

//Lesson Seventeen - Match All Letters and Numbers
//Input
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
*/

//Lesson Eighteen - Match Everything But Letters and Numbers
//Input
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
*/

//Lesson Nineteen - Match All Numbers
//Input
/*
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
*/

//Lesson Twenty - Match All Non-Numbers
//Input
/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
*/