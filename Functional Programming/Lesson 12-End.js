//Lesson Twelve - Combine Two Arrays Using the concat Method
//Input
/*
function nonMutatingConcat(original, attach) {
  // Only change code below this line
 return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
const result = nonMutatingConcat(first, second);
*/

//Lesson Twelve - Add Elements to the End of an Array Using concat Instead of push
//Input
/*
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
const result = nonMutatingPush(first, second);
console.log(result);
*/

//Lesson Thirteen - Use the reduce Method to Analyze Data
//Input
/*
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let nolanMovies = watchList.filter(movie => {
    if (movie.Director === "Christopher Nolan") {
      return movie;
    }
  });

  let nolanMovieRatingSum = nolanMovies.reduce(function(total, movie) {
    total += parseFloat(movie.imdbRating);
    return total;
  }, 0)
  
  let nolanMovieCount = nolanMovies.length;
  
  let averageRating = nolanMovieRatingSum / nolanMovieCount;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));
*/



//Lesson FourTeen - Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/*
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
*/

//Lesson Fifteen - Sort an Array Alphabetically using the sort Method
//Input
/*
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

You define a function called alphabeticalOrder that takes one argument, arr, which is an array of strings.

Within the function, you call the .sort() method on the arr array. The .sort() method sorts the elements of an array in place and returns the sorted array. However, it doesn't necessarily sort strings alphabetically by default; it sorts them based on their Unicode code point values.

To customize the sorting behavior, you pass a comparison function as an argument to .sort(). This comparison function is defined using the function(a, b) syntax.

Inside the comparison function, there is a ternary expression that compares two strings, a and b, and returns one of three values: 0, 1, or -1. These values are used by .sort() to determine the order of elements in the sorted array.

If a is equal to b, the expression returns 0, indicating that the elements are equal, and their order remains unchanged.
If a is greater than b, the expression returns 1, indicating that a should come after b in the sorted array.
If a is less than b, the expression returns -1, indicating that a should come before b in the sorted array.
Finally, the sorted array is returned from the alphabeticalOrder function.

You call the alphabeticalOrder function with an array ["a", "d", "c", "a", "z", "g"] as an argument, and the sorted array is logged to the console using console.log().

Here's an example of how the comparison function works with the given input:

Input array: ["a", "d", "c", "a", "z", "g"]

Initially, the function compares "a" and "d". Since "a" is less than "d," it returns -1, so "a" comes before "d" in the sorted array.
Next, it compares "a" and "c". Again, "a" is less than "c," so it returns -1.
It continues to compare and sort the elements accordingly, eventually resulting in the sorted array: ["a", "a", "c", "d", "g", "z"].
The console.log() statement then prints this sorted array to the console.
*/

//Lesson Sixteen - Return a Sorted Array Without Changing the Original Array
//Input
/*
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort((a,b) => a-b);

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);


Certainly! The code you provided is a JavaScript example that demonstrates the concept of non-mutating array sorting. Let's break it down step by step:

const globalArray = [5, 6, 3, 2, 9];: This line declares a constant array named globalArray with five elements.

function nonMutatingSort(arr) {: This defines a JavaScript function named nonMutatingSort that takes an array as an argument (in this case, it's referred to as arr).

Inside the function, there's a comment: // Only change code below this line. This indicates that you should only modify the code within the specified comment lines.

return [].concat(arr).sort((a,b) => a-b);: This line sorts the arr without mutating the original array. Let's break down this line further:

[].concat(arr): This code creates a new array that is a shallow copy of the input array arr. In this case, it uses an empty array [] to create a new array with the same elements as arr. This is done to ensure that the original array is not modified.

.sort((a, b) => a - b): This sorts the new array in ascending order. The sort method sorts the elements in the array in-place by default, but in this case, because we are working on a copy of the original array, it won't affect globalArray.

After the sorting is done, the sorted array is returned.

// Only change code above this line: This comment indicates that you should not modify the code above this line.

Finally, the code prints the sorted array by calling the nonMutatingSort function on the globalArray and also prints the original globalArray.

When you run the code, you will notice that the console.log(nonMutatingSort(globalArray)); line prints the sorted version of globalArray, and console.log(globalArray); will print the original array. This demonstrates that the nonMutatingSort function does not modify the original array but returns a sorted copy of it.
*/

//Lesson Seventeen - Split a String into an Array Using the split Method
//Input
/*
function splitify(arr) {
  // Only change code below this line
return arr.split(/\W/);
  // Only change code above this line
};

console.log(splitify("Hello World,I-am code"));
*/

//Lesson Eighteen - Combine an Array into a String Using the join Method
//Input
/*
function sentensify(str) {
  // Only change code below this line
let disectedResult = str.split(/\W/);
let joinedResult = disectedResult.join(" ");
return joinedResult;
  // Only change code above this line
}

console.log(sentensify("There,has,been,an,awakening"));
*/

//Lesson Nineteen - Apply Functional Programming to Convert Strings to URL Slugs
//Input
/*
// Only change code below this line
function urlSlug(title) {
  return title
  .split(" ")
  .filter (word => {if (word != "") return word;})
  .join("-")
  .toLowerCase();
}
// Only change code above this line
console.log(urlSlug("Winter Is Coming"));

*/

//Lesson Twenty - Use the every Method to Check that Every Element in an Array Meets a Criteria
//Input
/*
function checkPositive(arr) {
  // Only change code below this line
  let result = arr.every(function(value) {
    return value > 0;
  });
  return result;
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));
*/

//Lesson Twenty One - Use the some Method to Check that Any Elements in an Array Meet a Criteria
//Input
/*
function checkPositive(arr) {
  // Only change code below this line
let result = arr.some(function(value) {
return value > 0;
});
return result;

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
*/

//Lesson Twenty Two - Introduction to Currying and Partial Application
//Input
/*
function add(x) {
  // Only change code below this line
return function(y){
  return function(z){
    return x + y +z;
  }
}

  // Only change code above this line
}

console.log(add(10)(20)(30));
*/