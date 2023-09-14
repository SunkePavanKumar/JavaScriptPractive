// It is the special typ of the object in JS. It is datastructure

// Array literals
let nums = [1,4,6,6,76,3,4,5]

// Array constructor

const nums1 = new Array("pavan", "kumar", "sunke")

// Arrays can be accessed by the index 
// Different data types can be passed in the same arry in JS

// arrays methods
// nums.push(10)
// nums.pop()
// nums.unshift(100)  //adds the value at the begining of the array
// nums.shift()   // removes the elememt at the begining of the array
// console.log(nums)
// nums.reverse()
// console.log(nums.includes(10)) // return true or false based in the value present in the array or not.
// console.log(nums.indexOf(4))  // return the index of the value passed
//console.log(nums.slice(1,4)) 
//console.log(nums.splice(1, 4))   // splice argument (index , count of numbers to be removed)

// Nested Arrays

// const nestedOne = nums.push(nums1)
// console.log(nums[nums.length-1][0])

// concatination of the Array

const items = nums.concat(nums1)
const usingSpreadOperation = [...nums,...nums1]

console.log(usingSpreadOperation)

// Flatterns the arrays ===> convert the flatterned array into the single array

const arrayToBeFlatterend = [1,2,3,[7,8],[808,797,798]]
console.log(arrayToBeFlatterend.flat())

// static methods on the arrays

console.log(Array.isArray(arrayToBeFlatterend))

// convert the string to an array

console.log(Array.from("pavan"))


console.log(Array.of(1,1,2,3,4,5,5))