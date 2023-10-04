// Lesson One - Vreate a Basic JavaScript Object
//Input
/*
let dog = {
name: "Fido",
numLegs: 2
};
console.log(dog);
*/

//Lesson Two - Use Dot Notation to Access the Properties of an Object
//Input
/*
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name, dog.numLegs);
*/

//Lesson Three - Create a Method on an Object
//Input
/*
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

console.log(dog.sayLegs());
*/

//Lesson Four - Make Code More Reusable with the this Keyword
//input
/*
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());
*/

//Lesson Five - Define a Constructor Function
//Input
/*
function Dog() {
  this.name ="Spot";
  this.color = "blue";
  this.numLegs = 4;
}
console.log(Dog);
*/

//Lesson Six - Use a Constructor to Create Objects
//Input
/*
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
*/

//Lesson Seven - Extend Constructors to Receive Arguments
//Input
/*
function Dog(name, color) {
this.name = name;
this.color = color;
this.numLegs = 4;
}
let terrier = new Dog("Rex", "black");
*/

//Lesson Eight - Verify an Object's Constructor with instanceof
//Input
/*
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
console.log(myHouse instanceof House);
*/

//Lesson Nine - Understand Own Properties
//Input
/*
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
*/

//Lesson Ten - Use Prototype Properties to Reduce Duplicate Code
//Input
/*
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;


// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);
*/

