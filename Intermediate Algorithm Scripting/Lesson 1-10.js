//Lesson One - Sum All Numbers in a Range
//Input
/*
function sumAll (arr) {
  let minNo = Math.min(arr[0], arr[1]);
  let maxNo = Math.max(arr[0], arr[1]);
  let result = 0;
  for (let i = minNo; i <= maxNo; i += 1){
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
/*

//Lesson Two - Diff two Arrays
//Input
/*
function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i += 1){
    if (arr2.indexOf(arr1 [i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j += 1){
    if (arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

//Lesson Three - Seek and Destroy
//Input
/*
function destroyer (arr) {
  let survivingElements = [];
  let battleField = Object.values(arguments)[0];
  let elementsToDestroy = Object.values(arguments).splice(1);

  for (let i = 0; i < battleField.length; i += 1) {
    let positionToRecon = battleField[i];
    if (elementsToDestroy.indexOf(positionToRecon)=== -1){
      survivingElements.push(positionToRecon);
    }
  }

  return survivingElements;
}
let result = destroyer([1,2,3,1,2,3], 2, 3);
console.log(result);
*/

//Lesson Four - Wherefore art thou
//Input
/*
function whatIsInAName(collections, source) {
const arr = [];
collections.forEach(collection => {
  let index = 0;
  for (let key in source) {
    if (collection[key] === source[key]){
      index += 1;
      }
      if (index === Object.keys(source).length){
        arr.push(collection);
      }
    }
});
return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName);
*/

//Lesson Five - Spinal Tap Case
//Input
/*
function spinalCase(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/[\s+_]{1,}/g, "-")
    .toLowerCase();
}
let result = spinalCase("thisIsSpinalTap");
console.log(result);
*/

//Lesson Six - Pig Latin
//Input
/*
function translatePigLatin(str) {
  let vowels = "aeiou".split("");
  for (let i=0; i < str.length; i++){
    let individualLetter = str[i];
    if (vowels.indexOf(individualLetter) != -1 && i === 0){
      return str + "way";
    }
    if (vowels.indexOf(individualLetter) != -1) {
return str.slice(i) + str.slice(0, i) + "ay";
    }
  }

  return str + "ay";
}

let result = translatePigLatin("consonant");
console.log(result);
*/

//Lesson Seven - Search and Replace
//Input
/*
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

let result = myReplace("I think we should look up there", "up", "Down");
console.log(result);


This code defines a JavaScript function called myReplace that takes three parameters: str, before, and after. It then uses these parameters to replace one word with another in a given sentence. Let's break it down step by step:

It first checks if the first letter of the word to be replaced (before) is in uppercase (capital letter).

If it is in uppercase, it changes the first letter of the replacement word (after) to uppercase and keeps the rest of the word as is.
If it's not in uppercase, it changes the first letter of the replacement word to lowercase and keeps the rest of the word as is.
It then uses the str.replace(before, after) method to search for the before word in the input sentence (str) and replace it with the modified after word.

Here's an example using your provided values:

Input sentence (str): "I think we should look up there"
Word to replace (before): "up"
Word to replace it with (after): "Down"
In this case, the code will look for the word "up" in the input sentence, realize that the first letter of "up" is lowercase, and accordingly change "Down" to "down." Then, it replaces "up" with "down" in the sentence. So, the result will be: "I think we should look down there."

The function essentially allows you to replace a word in a sentence while making sure that the capitalization of the new word matches the original word, which is why it checks for the case (uppercase or lowercase) of the first letter of the original word.
*/

//Lesson Eight - DNA Pairing
//Input
/*
function pairElement(str) {
  function calculatePair(initial){
    if (initial === "A"){
      return "T";
    } else if (initial === "T") {
      return "A";
    } else if (initial === "G") {
      return "C";
    } else if (initial === "C") {
      return "G";
    }

  }
  return str.split("").map(strPair => {
    let pair = [strPair, calculatePair(strPair)];
return pair;
  });
}

let result = pairElement("GCG");
console.log(result);
*/

//Lesson Nine - Missing Letters
//Input
/*
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPosition = alphabet.indexOf(str[0]);
  for (let i = startingPosition; i < startingPosition + str.length; i++){
    if (alphabet[i] != str[i - startingPosition]){
      return alphabet[i];
    }
  }
}
let result = fearNotLetter("stvwx");
console.log(result);
*/

//Lesson Ten - Sorted Union
//Input
/*
function uniteUnique(collection){
  let finalCollection = [];
    let values = Object.values(arguments);
      for (let i = 0; i < values.length; i++){
        for (let j = 0; j < values[i].length; j++){
          if (finalCollection.indexOf(values[i][j])=== -1){
            finalCollection.push(values[i][j]);
    }
  }
}  
return finalCollection;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
*/

