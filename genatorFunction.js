// function* counter(num) {
//   for (let i = 0; i < num; i++) {
//     yield i * 20;
//   }
// }

// const returned = counter(5);

// while (returned.next().value !== null || returned.next().value === undefined) {
//   console.log(returned.next().value);
// }
// console.log(returned.next().value);
// console.log(returned.next().value);
// console.log(returned.next().value);
// console.log(returned.next().value);
// console.log(returned.next().value);
// console.log(returned.next().value);
// console.log(returned.next().value);

function testHoisting() {
  x = 20;
  {
    console.log(x);
    var x = 12;
  }
}

testHoisting();
