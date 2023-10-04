//Lesson Eleven - Iterate Through All an Array's Items Using For Loops
//Input
/*
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {           -1(means not found, therefore === -1, strictly not found)
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

//Lesson Twelve - Create complex multi-dimensional arrays
//Input
/*
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], //level 2
  [ 
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'], //level 3
    [ 
      ['concat', false, true, 'deeper', 'spread', 'array'], //level 4
      [
        ['deepest', 'mutate', 1327.98, 'splice', 'slice', 'push'] //level 5
      ]
    ]
  ],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
*/

//Lesson Thirteen - Add Key-Value Pairs to JavaScript Objects
//Input
/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35,
foods.strawberries = 27,
// Only change code above this line

console.log(foods);
*/

//Lesson Fourteen - Modify an Object Nested Within an Object
//Input
/*
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
*/

//Lesson Fifteen - Access Property Names with Bracket Notation
//Input
/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));
*/

//Lesson Sixteen - Use the delete Keyword to Remove Object Properties
//Input
/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);
*/

//Lesson SevenTeen - Check if an Object has a Property
//Input
/*
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
 if (userObj.hasOwnProperty('Alan')
 && userObj.hasOwnProperty('Jeff')
 && userObj.hasOwnProperty('Sarah')
 && userObj.hasOwnProperty('Ryan')) {
   return true
 }
else {
  return false
}
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/

//Lesson Eighteen - Iterate Through the Keys of an Object with a for...in Statement
//Input
/*
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
  // Only change code above this line
}

console.log(countOnline(users));
*/
/*First, we have an object called users, which contains information about different users and whether they are online or not.

Next, we define a function called countOnline which takes allUsers as its parameter. This function is designed to count the number of users who are online (i.e., have online set to true).

Inside the countOnline function, we initialize a variable called numOnline to 0. This variable will be used to keep track of the number of online users.

We then use a for...in loop to iterate through the keys (user names) in the allUsers object. In this loop, user represents the current user name being processed.

Inside the loop, there is an if statement that checks whether the online property of the current user (accessed using allUsers[user].online) is true. If it is true, it means the user is online, so we increment the numOnline variable by 1.

The loop continues to iterate through all the keys (user names) in the allUsers object, and for each online user, the numOnline variable is incremented.

After the loop has finished iterating through all the users, the function returns the value of numOnline, which represents the total number of online users.

Finally, we call the countOnline function and pass the users object as an argument. This means that the function will count how many users in the users object are online and return that count.

The result is then logged to the console using console.log(countOnline(users));.

So, when you run this code, it will count the number of online users in the users object and print that count to the console.
*/

//Lesson Nineteen - Generate an Array of All Object Keys with Object.keys()
//Input
/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
*/

//Lesson Twenty - Modify an Array Stored in an Object
//Input
/*
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
*/