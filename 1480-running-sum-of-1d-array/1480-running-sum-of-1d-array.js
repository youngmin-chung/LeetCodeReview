/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let tmp = 0
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] + tmp;
        tmp = nums[i]
    }
    
    return nums;
};

