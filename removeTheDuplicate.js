/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const newArray = [];
    for(let i =0 ;i<nums.length;i++){
        if(!newArray.includes(nums[i])){
            newArray.push(nums[i])
        }
    }
    nums = newArray
    console.log(nums)
    return newArray.length
};

console.log(removeDuplicates([1,1,2]))