//Lesson Eleven - Convert HTML Entities
//Input
/*
 function convertCharacter(letter){
    if (letter === "&") {
      return "&amp;";
    } else if (letter === "<") {
      return "&lt;";
    } else if (letter === ">") {
      return "&gt;";
    } else if (letter === "'") {
      return "&apos;";
    } else if (letter === '"') {
      return "&quot;";
    }
  }
function convertHTML(str) {
  let charactersToCheckFor = ["&", "<", ">", '"', "'"];
 for (let i = 0; i < str.length; i++){
   if (charactersToCheckFor.indexOf(str[i]) != -1){
str = str.slice(0, i) + 
convertCharacter(str[i]) +
str.slice(i + 1)
   };
 }
  return str;
}

let result = convertHTML("Dolce & Gabbana");
console.log(result);
*/

//Lesson Twelve - Sum of Odd Fibonacci Numbers
//Input
/*
function sumFibs(num) {
  let fibonacciSequence = [0, 1];
  let counter = fibonacciSequence[fibonacciSequence.length -2] + 
                fibonacciSequence[fibonacciSequence.length -1]

while (counter <= num) {
  fibonacciSequence.push(counter);
  counter = fibonacciSequence[fibonacciSequence.length -2] + 
            fibonacciSequence[fibonacciSequence.length -1]
}
let sumOfFibonacciNumbers = 0;
  fibonacciSequence.forEach(function(num) {
  if (num % 2 != 0) {
    sumOfFibonacciNumbers += num;
    }
  });

  return sumOfFibonacciNumbers;
}

let result = sumFibs(4000000);
console.log(result);
*/

//Lesson Thirteen - Sum All Primes
//Input
/*
function sumPrimes(num) {
  if (num <= 1) {
    return "Numbers lower than 0 don't apply!";
  }
  let counter = 2;
  let sum = 0;

while (counter <= num) {
  if (isPrime(counter)) {
    sum += counter;
  }
  counter += 1;
}

  return sum;
}
function isPrime(singleNumber) {
let counter = 2;
while (counter < singleNumber) {
if (singleNumber % counter === 0) {
return false;
}
 counter += 1;
}
return true;
}

let result = sumPrimes(10);
console.log(result);

The sumPrimes function takes one argument, 'num', which represents the upper limit or the maximum number you want to find prime numbers up to.

It starts by checking if 'num' is less than or equal to 1. If 'num' is 1 or less, it returns a message saying that numbers lower than 0 don't apply.

If 'num' is greater than 1, it initializes two variables:

'counter' is set to 2, which is the smallest prime number.
'sum' is set to 0, which will be used to keep track of the sum of prime numbers found.
It enters a 'while' loop that continues as long as 'counter' is less than or equal to 'num'.

Inside the loop, it checks if the current value of 'counter' is a prime number by calling the isPrime function. If 'counter' is prime, it adds 'counter' to the 'sum'.

Regardless of whether 'counter' is prime or not, it increments 'counter' by 1 and goes back to the beginning of the loop to check the next number.

After the loop finishes, it returns the 'sum' which represents the sum of all prime numbers from 2 to 'num'.

The isPrime function checks if a single number ('singleNumber') is prime or not. It takes 'singleNumber' as an argument.

Inside the isPrime function, it initializes a 'counter' to 2, which is the smallest divisor of any number.

It enters a 'while' loop that continues as long as 'counter' is less than 'singleNumber'.

Inside the loop, it checks if 'singleNumber' is divisible by 'counter' (i.e., 'singleNumber % counter === 0'). If it is, it means 'singleNumber' is not prime, so it returns 'false'.

If 'singleNumber' is not divisible by 'counter', it increments 'counter' by 1 and continues to check the next 'counter' value.

If the loop finishes without finding any divisors of 'singleNumber', it means 'singleNumber' is prime, and it returns 'true'.

Finally, the code sets the 'result' variable to the result of calling the 'sumPrimes' function with an argument of 15.

It then logs the 'result' to the console, which will display the sum of prime numbers from 2 to 15.
*/

//Lesson Fourteen - Smallest Common Multiple
//Input
/*
function smallestCommons(arr) {
  let lowerNum, higherNum;
  if (arr[0] > arr[1]) {
    lowerNum = arr[1];
    higherNum = arr[0]
  } else {
    lowerNum = arr[0];
    higherNum = arr[1]
  }
  let range = getRange(lowerNum, higherNum);
  let multiple = 1;
  while (multiple < 10000000) {
    let higherCommonMultiple = (lowerNum * multiple) * higherNum;
let trueCount= 0;
    for (let i= 0; i < range.length; i ++) {
      if (higherCommonMultiple % range[i] === 0) {
        trueCount ++;
        if (trueCount === range.length) {
          return higherCommonMultiple;
        }
      }
    }
    multiple ++;
  }
  function getRange(lowN, highN) {
    let resultRange = [];
    for (let i = lowN; i <= highN; i ++) {
      resultRange.push(i);
    }
    return resultRange;
  }

  return arr;
}


let result = smallestCommons([1,3]);
console.log(result);
*/

//Lesson Fifteen - Drop it
//Input
/*
function dropElements(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return result;
}

let result = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
console.log(result);
*/

//Lesson Sixteen - Steamroller
//Input
/*
function steamrollArray(arr) {
let emptyFlatArray = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            emptyFlatArray = emptyFlatArray.concat(steamrollArray(element));
        } else {
            emptyFlatArray.push(element);
        }
    });

    return emptyFlatArray;

}

let result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);
*/

//Lesson Seventeen - Binaary Agents
//Input
/*
function binaryAgent(str) {
    let arr = str.split(" ").map(item => parseInt(item, 2)); 
    return arr.map(item => String.fromCharCode(item)).join("");
  }

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result);
*/

//Lesson Eighteen - Everything Be True
//Input
/*
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

let result = truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
console.log(result);
*/

//Lesson Nineteen - Arguments Optional
//Input
/*
function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

let result = addTogether(2,3);
console.log(result);
*/

//Lesson Twenty - Make a Person
//Input
/*
const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());
*/

//Lesson Twenty - Map the Debris
//Input
/*
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(satellite => {
    let alt=satellite.avgAlt;
    delete satellite.avgAlt;
    satellite["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt( Math.pow((alt+earthRadius),3) / GM));
    return satellite;
  });
}
let result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(result);
*/