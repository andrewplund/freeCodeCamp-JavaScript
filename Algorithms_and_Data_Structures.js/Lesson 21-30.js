//Lesson Twenty One - Restrict Possible Usernames
//Input
/*
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);
*/

//Lesson Twenty Two - Match Whitespace
//Input
/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
*/

//Lesson Twenty Three - Match Non-Whitespace Characters
//Input
/*
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
*/

//Lesson Twenty Four - Specify Upper and Lower Number of Matches
//Input
/*
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
*/

//Lesson Tenty Five - Specify Only the Lower Number of Matches
//Input
/*
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
*/

//Lesson Twenty Six - Specify Exact Number of Matches
//Input
/*
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
*/

//Lesson Twenty Seven - Check for All or None
//Input
/*
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
*/

//Lesson Twenty Eight - Positive and Negative Lookahead
//Input
/*
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
*/

//Lesson Twenty Nine - Check For Mixed Grouping of Characters
//Input
/*
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin |Eleanor ).*Roosevelt/;
let result = myRegex.test(myString);
*/

//Lesson Thirty - Reuse Patterns Using Capture Groups
//Input
/*
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);
*/
