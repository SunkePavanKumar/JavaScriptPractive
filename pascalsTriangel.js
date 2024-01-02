/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let number = [];
  for (let i = 0; i < numRows; i++) {
    number[i] = [];
    for (let j = 0; j <= i; j++) {
      let pascalNumber = getPascalNumber(i, j);
      number[i][j] = pascalNumber;
    }
  }
  return number;
};

var getPascalNumber = function (n, r) {
  let d1 = fact(n);
  let d2 = fact(n - r);
  let d3 = fact(r);
  return d1 / (d2 * d3);
};

var fact = function (number) {
  if (number === 1 || number === 0) return 1;
  return number * fact(number - 1);
};

console.log(generate(5));
