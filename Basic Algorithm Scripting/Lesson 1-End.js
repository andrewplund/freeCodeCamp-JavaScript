//Lesson One - Convert Celsius to Fahrenheit
//Input
/*
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
return fahrenheit;
}

console.log(convertCtoF(30));
*/

//Lesson Two - Reverse a String
//Input
/*
function reverseString(str) {
  return str.split('').reverse().join('');           split the string up to individual elements, reverse them and join them back to reform a string.
}

console.log(reverseString("Andrew Lund"));
*/

//Lesson Three - Factorialize a Number
//Input
/*
function factorialize(num) {
    if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

console.log(factorialize(5));
*/

//Lesson Four - Find the Longest Word in a String
//Input
/*
function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= longestWord.length){
      longestWord = strArr[i];
    }
  }
  return longestWord.length;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

//Lesson Five - Find the Longest Word in a String
//Input
/*
function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= longestWord.length){
      longestWord = strArr[i];
    }
  }
  return longestWord.length;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

//Lesson Six -Return Largest Numbers in Arrays 
//Input
/*
function largestOfFour(arr) {
  let largeArray =  [];
  for (let i = 0; i < arr.length; i++){
    let largestNum = arr[i][0];
    for (let j = 0; j < arr.length; j++){
      if (arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
    }
    largeArray.push(largestNum);
  }
  return largeArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Let me walk you through the code step by step:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function largestOfFour(arr) {: This line defines a function called largestOfFour that takes one parameter, arr, which is the 2D array you want to find the largest numbers in.

let largeArray = [];: This line initializes an empty array called largeArray. This array will be used to store the largest numbers from each subarray.

for (let i = 0; i < arr.length; i++) {: This is the start of the outer loop. It iterates through the outer array (arr) using the variable i to keep track of the current subarray.

let largestNum = arr[i][0];: Inside the outer loop, a variable largestNum is initialized to the first element of the current subarray (arr[i][0]). This will be used to keep track of the largest number found in the current subarray.

for (let j = 0; j < arr.length; j++) {: This is the start of the inner loop. It iterates through the elements of the current subarray using the variable j.

if (arr[i][j] > largestNum) {: Inside the inner loop, there is an if statement that checks if the current element (arr[i][j]) is greater than the current largest number (largestNum).

largestNum = arr[i][j];: If the current element is greater, it updates the largestNum to the current element, effectively storing the new largest number found in the current subarray.

After the inner loop completes, largestNum will contain the largest number in the current subarray.

largeArray.push(largestNum);: The largest number found in the current subarray is pushed into the largeArray.

The outer loop continues to the next subarray, and the process is repeated until all subarrays have been processed.

Finally, after the outer loop completes, the largeArray contains the largest numbers from each subarray.

return largeArray;: The function returns largeArray, which is an array containing the largest numbers from each subarray.

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));: This line calls the largestOfFour function with a sample 2D array as an argument and prints the result to the console.

The output of this code will be [5, 27, 39, 1001], which are the largest numbers from each of the subarrays in the input array.
*/ 

//Lesson Seven - Confirm the Ending
//Input
/*
function confirmEnding(str, target) {
 return str.slice(-target.length) == target;
 }

console.log(confirmEnding("Bastian", "n"));
*/ 

//Lesson Eight - Repeat a String Repeat a String
//Input
/*
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < num; i += 1) {
    result += str
  }
  return result;
}
console.log(repeatStringNumTimes("abc", 3));
*/

//Lesson Nine - Truncate a String
//Input
/*
function truncateString(str, num) {
return str.length > num ? `${str.slice(0, num)}...`:
str;
} 
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
*/

//Lesson Ten - Finders Keepers
//Input
/*
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i ++){
    if(func(arr[i])){
      return arr[i]
    }
  }

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
*/

//Lesson Eleven - BooWho
//Input
/*
function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

booWho(null);
*/

//Lesson Twelve - Title Case a Sentence
//Input
/*
function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
  
  // Step 3. Create the FOR loop
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  // Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop
  }
  
  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");
*/

//Lesson Thirteen - Falsy Bouncer
//Input
/*
function bouncer(arr) {
  let truthArr = [];
  for (let item of arr) {
    if (Boolean(item)===true){
      truthArr.push(item);
    }
  }
  return truthArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
*/

//Lesson Fourteen - Where do I Belong
//Input
/*
function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a-b);
  for(let i = 0; i < sortedArr.length; i++){
    if(num <= sortedArr[i]){
      return i;
    }
  }
  return sortedArr.length;
}

console.log(getIndexToIns([40, 60], 50));
*/

//Lesson Fifteen - Mutations
//Input
/*
function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
      for(let i = 0; i < secondWord.length; i++){
        if(firstWord.indexOf(secondWord[i]) === -1){
          return false
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
*/

//Lesson Sixteen - Chunky Monkey
//Input
/*
function chunkArrayInGroups(arr, size) {
  let chunkyArray = [];
  while (arr.length){
    chunkyArray.push(arr.splice(0, size));
  }
  return chunkyArray;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

