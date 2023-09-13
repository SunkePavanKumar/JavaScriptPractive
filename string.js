let name = "pavan Kumar"
// const age = 21
// // let display = `my name is ${name} and  age is ${age}`  // template literals


// let display = "my name is " + name + "age is " +age  // normal way of doing without using the concatination



// console.log(display)

//properties

// length

console.log(name.length)

// acessing by the index
console.log(name[0])

// change the string to the upper case or the lower case

console.log(name.toLowerCase())
console.log(name.toUpperCase())

// know the charter of the specific index 

// console.log(name.charAt(11))

console.log(name , name.indexOf("p"))  // if the charter at the specific index is not present then it return -1

console.log(name.substring(1,7)) // return the first index and expeed the last one

console.log(name.substring(7))  // return the substring that starts with 7 and till the end of the string


// slice operation

console.log(name.slice(-1,-5))   // does th same operation as substring

// trim() => this method will remove the start and end space of the strings

let y = name.replace("Kumar", "Kumar Sunke")
console.log(y)

console.log(name.includes("pav"))

x= name.split("")
console.log(x)