// Understanding the promises

function evenOdd(num) {
  return new Promise((resolve, reject) => {
    if (!num || !typeof num !== Number) {
      reject(`This is very bad ! give me the valid number`);
    }
    if (num % 2 === 0) {
      resolve(`The num ${num} is even`);
    } else {
      resolve(`The num ${num} is odd`);
    }
  });
}

(async function () {
  try {
    console.log(await evenOdd("Hello"));
    console.log("Hello Welcome to the IMIVFN");
  } catch (error) {
    console.log(error);
  }
})();
