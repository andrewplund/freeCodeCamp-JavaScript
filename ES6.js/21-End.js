//Lesson Twenty One - Reuse JavaScript Code Using import
//Input
/*
import { uppercaseString , lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
*/

//Lesson Twenty Two - Use * to Import Everything from a File
//Input
/*
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

//Lesson Twenty Three - Create an Export Fallback with export default
//Input
/*
export default function subtract(x, y) {
  return x - y;
}
*/

//Lesson Twenty Four - Import a Default Export
//Input
/*
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
*/

//Lesson Twenty Four - Create a JavaScript Promise
//Input
/*
const makeServerRequest = new Promise((resolve, reject) => {

});
*/

//Lesson Twenty Five - Complete a Promise with resolve and reject
//Input
/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
    // Change this line
  } else {
    reject("Data not received")  
    // Change this line
  }
});
*/

//Lesson Twenty Six - Handle a Fulfilled Promise with then
//Input
/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
  
});
makeServerRequest.then(result => {
  console.log(result);
});
*/

//Lesson Twenty Seven - Handle a Rejected Promise with catch
//Input
/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});
*/