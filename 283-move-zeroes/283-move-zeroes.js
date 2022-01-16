/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var left = 0;

    for(var right = 0; right < nums.length; right++){
        if(nums[right] != 0){
            // swap
            [nums[left], nums[right]] = [nums[right], nums[left]]
             left += 1
        }
    }
    return nums
 
};