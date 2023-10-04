//Lesson Thirty One - Use Capture Groups to Search and Replace
//Input
/*
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);
*/

//Lesson Thirty Two - Remove Whitespace from Start and End
//Input
/*
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/; // Change this line
let result = hello.replace(wsRegex, '$2'); // Change this line
console.log(result);

let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;: This line declares a regular expression pattern and assigns it to the variable wsRegex. Let's dissect the regular expression:

^: This symbol denotes the start of the string.
(\s+): This is a capturing group denoted by parentheses (...). It matches one or more white space characters (\s+) at the beginning of the string.
(.+[^\s]): This is another capturing group. It matches one or more of any character (.+) that is followed by a character that is not a white space ([^\s]).
(\s+)$: This is the third capturing group. It matches one or more white space characters at the end of the string, followed by the end of the string ($).
So, this regular expression is designed to match and capture spaces at the beginning and end of a string while also capturing the non-space content in between.

let result = hello.replace(wsRegex, '$2');: This line uses the replace method on the hello string to replace the matched pattern defined by wsRegex with the second captured group ($2). In other words, it removes the spaces at the beginning and end of the string and keeps the content in between.
*/