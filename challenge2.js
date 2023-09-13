// to generate the random between 1 t0 100

let randomNumberHund = Math.floor(Math.random() * 100 +1)

// to generate the random number between 1 to 50

let randombetweenFifty = Math.floor(Math.random() * 50 + 1)

let sumOutput = `${randomNumberHund} + ${randombetweenFifty} = ${randomNumberHund + randombetweenFifty}`
let subOutput = `${randomNumberHund} - ${randombetweenFifty} = ${randomNumberHund - randombetweenFifty}`
let prodOutput = `${randomNumberHund} * ${randombetweenFifty} = ${randomNumberHund * randombetweenFifty}`
let divOutput = `${randomNumberHund} / ${randombetweenFifty} = ${randomNumberHund  / randombetweenFifty}`
let  moduloOutput = `${randomNumberHund} % ${randombetweenFifty} = ${randomNumberHund % randombetweenFifty}`

console.log(sumOutput)
console.log(subOutput)
console.log(prodOutput)
console.log(divOutput)
console.log(moduloOutput)
