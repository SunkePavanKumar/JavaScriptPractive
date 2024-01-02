/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  if (s.split("").reverse().join("") === s) return true;
  return false;
};

console.log(isPalindrome("0P"));
