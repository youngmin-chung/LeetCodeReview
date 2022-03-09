/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
     let ans = []
    for(var i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]);
    }
    return ans;
};
