//Lesson Nintey One - Testing Objects for Properties
//Inout
/*
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
  return obj[checkProp]; 
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
*/

//Lesson Ninety Two - Manipulating Complex Objects
//Input
/*
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Joel Billy",
    "title": "Man Piano",
    "release_year": 1937,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  }
];
*/

//Lesson Ninety Three - Accessing Nested Objects
//Input
/*
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
*/

//Lesson Ninety Four - Accessing Nested Arrays
//Input
/*
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);
*/

//Lesson Ninety Five - Record Collection
//Input
/*
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

can you talk me through this bit of JavaScript code?                                                                                       const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

-------------------------------------------------ChatGPT--------------------------------------------------------------


Certainly! This JavaScript code defines an object called recordCollection which contains information about music albums. Each album is represented as a property with a unique ID as its key, and the value is another object containing details about the album, including its title, artist, and tracks.

Here's an explanation of the code:

const recordCollection = { ... }: This line initializes an object called recordCollection that stores information about music albums. It contains several album entries, each identified by a unique numerical ID (e.g., 2548, 2468, 1245, 5439). Each album entry is an object with properties like albumTitle, artist, and tracks.

function updateRecords(records, id, prop, value) { ... }: This is a function called updateRecords that takes four parameters: records (which represents the recordCollection object), id (the ID of the album you want to update), prop (the property you want to update within the specified album), and value (the new value you want to assign to the specified property).

Inside the updateRecords function, there's a series of conditional statements:

if (value === "") { ... }: This condition checks if the value parameter is an empty string. If it is, it means you want to delete the specified property (prop) from the album with the given ID (id). So, it uses the delete operator to remove that property from the recordCollection.

else if (prop === "tracks") { ... }: If the prop parameter is equal to "tracks," it means you want to update the list of tracks for the specified album. The code first checks if the tracks property exists within the album. If it doesn't exist, it initializes it as an empty array ([]). Then, it uses the push method to add the value (a track name) to the tracks array.

else { ... }: If none of the above conditions are met, it means you want to update a property other than "tracks" for the specified album. In this case, it simply assigns the new value to the specified property (prop) for the album.

Finally, the updateRecords function returns the modified records (which is the recordCollection object) after making the necessary updates.

You can use this updateRecords function to add, update, or delete properties within the recordCollection object, depending on the id, prop, and value you provide when calling the function.

----------------------------------------------------------------------------------------------------------------------
*/

//Lesson Ninety Six - Iterate with JavaScript While Loops
//Input
/*
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--
}
console.log(myArray);
*/

//Lesson Ninety Seven - Iterate with JavaScript For Loops
//Input
/*
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);
*/

//Lesson Ninety Eight - Iterate Odd Numbers With a For Loop
//Input
/*
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 11; i += 2) {
  myArray.push(i);
}
console.log(myArray);
*/

//Lesson Ninety Nine - Count Backwards With a For Loop
//Input
/*
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);
*/

//Lesson One Hundred - Iterate Through an Array with a For Loop
//Input
/*
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for ( let i = 0; i < myArr.length; i++ ){
   total += myArr[i]
}
console.log(total);
*/