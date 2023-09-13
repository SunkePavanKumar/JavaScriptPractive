let d;
d = new Date()
// d = new Date("2023-09-21")
// d = new Date(2023,10,10)
console.log(d)
console.log(Date.now())  // returns the time stamp in milliseconds
console.log(d.getTime()) // returns the time stamp
console.log(d.valueOf())
console.log(d.toString()) // retuns theISO string format
console.log(new Date(1694624017167))  // by default the date time stamps in JS are milliseconds

let y = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDay()}`
console.log(y)