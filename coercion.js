// The seven primitive data type in the JS
/**
 * Number
 * String
 * Boolean
 * undefined
 * NULL
 * Symbol
 * NAN
 */

// Coercion is the javascript concept which converts itself to some of the types based on the operation that is being performed

let a;
a = 5 + "5"  // Do concatination operation in JS return 55
a = 5+  5   // Do the arthematic operations
a = 5 * "5"  // convets the string 5 into the integer 5 returns 25
a = 5 + null  // convets the null to 0 returns 5
a = 5 + undefined  // returns the NAN

a = 5 + true  // return 6   true gets converted to the 6
a = 5 + false
console.log(a)