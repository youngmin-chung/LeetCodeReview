/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    var idx = 0;
    var i;
    while(idx<nums.length-1){
        for (i = idx + 1; i <= nums.length - 1; i++){
             if(nums[idx]==nums[i])
                 return true;
         }
         idx++; 
    }
        return false;
    
};