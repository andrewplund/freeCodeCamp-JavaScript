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