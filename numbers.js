const num = 5
let x = num.toFixed(4)  // JS internally convets the primitive type to the object(wrapper) and call the properties to it
x = num.toPrecision(3)   // It include the all the numbers
x = num.toExponential(2)
x= num.toLocaleString()
x = num.valueOf()
console.log(x, typeof x)
