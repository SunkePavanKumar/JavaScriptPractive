/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new  Map();
    for(let i=0;i < nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    let max = Number.MIN_VALUE;
    let maxKey = -Infinity;
    for(let [key, value] of map){
        if(max < value){
            max = value
            maxKey = key
        }
    }

    return maxKey
};

console.log(majorityElement([3,2,3]))