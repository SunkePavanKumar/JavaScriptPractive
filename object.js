const student = {
    name : "pavan Kumar",
    age : 21,
    college : "Veltech",
    address : {
        city : "Chennai",
        plcae : "Avadi",
        state : "Tamil Nadu"
    },
    semMarks : [9.2,9.0,0,6]

}

console.log(student.semMarks[0])

// To change the property of the object
student.name = "Kumar"
console.log(student.name)

delete student.semMarks
console.log(student)

// spread operator

console.log(Object.entries(student))  // returns th array of arrays


// Destructuring 

const {address : collegeAddress, college} = student; // for direct destructuring add the variable that is present in the array whereas for
// to change the object property name assign the value for the actual property

console.log(collegeAddress)
console.log(college)