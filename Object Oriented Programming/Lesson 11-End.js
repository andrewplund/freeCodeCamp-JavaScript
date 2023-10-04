//Lesson Eleven - Iterate Over All Properties
//Input
/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
*/

//Lesson Twelve - Understand the Constructor Property
//Input
/*
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
*/

//Lesson Thirteen - Change the Prototype to a New Object
//Input
/*
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

//Lesson Fourteen - Remember to Set the Constructor Property when Changing the Prototype
//Input
/*
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

//Lesson Fifteen - Understand the Prototype Chain
//Input
/*
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
*/

//Lesson Sixteen - Use Inheritance So You Don't Repeat Yourself
//Input
/*
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};
*/

//Lesson Seventeen - Inherit Behaviors from a Supertype
//Input
/*
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
*/

//Lesson Eighteen - Set the Child's Prototype to an Instance of the Parent
//Input
/*
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog("Snoopy");
beagle.eat();
*/

//Lesson Nineteen - Reset an Inherited Constructor Property
//Input
/*
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor);
console.log(beagle.constructor);
*/

//Lesson Twenty - Add Methods After Inheritance
//Input
/*
function Animal() { }
Animal.prototype.eat = function() { 
  console.log("nom nom nom");
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!");
};

let beagle = new Dog();
*/

//Lesson Twenty One - Override Inherited Methods
//Input
/*
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() { 
return "Alas, this is a flightless bird."; 
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
*/

//Lessoon Twenty Two - Use a Mixin to Add Common Behavior Between Unrelated Objects
//Input
/*
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Flying, wooosh!");
  }
};
glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();
*/

//Lesson Twenty Three - Use Closure to Protect Properties Within an Object from Being Modified Externally
//Input
/*
function Bird() {
  let weight = 15;
this.getWeight = function() { 
    return weight;
  };

}
let ducky = new Bird();
console.log(ducky.getWeight());
*/

//Lesson Tenty Four - Understand the Immediately Invoked Function Expression (IIFE)
//Input
/*
(function () {
  console.log("A cozy nest is ready");
})();
*/

//Lesson Twenty Five - Use an IIFE to Create a Module
//Input
/*
let funModule = (function() {
  return {
isCuteMixin: function(obj) {
  obj.isCute = function() {
    conole.log("Happy, happy, happy");
  };
},
singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
  }
})();
*/