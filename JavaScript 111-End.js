//Lesson One Hundred and Eleven - Use Recursion to Create a Countdown
//Input
/*
// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1)
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(10));
// Only change code above this line
*/

//Lesson One Hundred and Twelve - Use Recursion to Create a Range of Numbers
//Input
/*
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(4, 4));
*/