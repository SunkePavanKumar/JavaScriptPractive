/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums = [nums[nums.length - 1], ...nums.slice(0, nums.length - 1)];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
