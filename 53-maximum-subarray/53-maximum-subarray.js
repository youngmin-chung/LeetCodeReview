/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSub = nums[0];
    curSum = 0;
    for( var n in nums){
        if(curSum < 0){
            curSum = 0;
        }
        curSum += nums[n];
        maxSub = Math.max(maxSub, curSum);
    }
    return maxSub;
};