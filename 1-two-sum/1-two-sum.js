/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let flag = nums.length;
    let tmp = 0;
    let tmpArr = [];
    let idx = 0;
    while(idx <= flag){
        for(var i = 1; i <= flag-1; i++){
            tmp = nums[idx] + nums[i];
            if(tmp == target && idx != i){
                tmpArr.push(idx,i);
               return tmpArr;
            }
        }
    idx++;
    }
};