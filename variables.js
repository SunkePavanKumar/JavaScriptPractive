// var, let and const
// var => es5 widow scope
// let and const => es6 it is having the braces scope. For the const variables cannot be reassigned
let firstName = "Pavan Kumar";
let lstName = "Kumar";
console.log(firstName, lstName);

//Naming conventions of the variables
/**
 only letters, numbers , underscore and dollar signs
 variables cannot be start with the letters
 */

// Formating of the vaiables

/**
 * camelCasing ==>  firstName
 * underscore ==>  first_name
 * pascal Casing ===> FistName
 * lower case   ==> firstname
 */

// Reassigning the variables

let age = 10
age = 21  // for const  it is it  possible to redeclared
console.log(age)


//PRIMITIVE data types

/**
 * boolean
 * Null
 * string
 * Numbers  ===> either integer or float
 * undefinded
 * symbol
 * BigInt
 * 
 */

// Reference data tpes or objects

/**
 * 
 * javascript is dynamically typed laguage
 * Tyescript is the superset of js where type can be declared   ====>  It is statically typed
 * 
 */

// Type Conversion
// parse the string to an number

let ans = "100";
//ans = parseInt(ans)
//ans  = +ans
ans = Number(ans)
console.log(ans, typeof ans)


// Change the number to string

ans = ans.toString()