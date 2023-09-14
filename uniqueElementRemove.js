const uniqueElement = function(nums, val){
    let start = 0;
    let end = nums.length-1;
    while(start<=end){
        if(nums[start] === val){
            nums[start] = nums[end];
            end--
        }else{
            start++
        }
    }
    return end+1;
}

console.log(uniqueElement([3,2,2,3], 3))\