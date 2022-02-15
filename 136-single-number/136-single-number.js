/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {}
    
    for(const n of nums){
        if(count[n]) count[n]++
        else count[n] = 1
    }
    
    for(var i = 0; i < nums.length; i++){
        const single = nums[i]
        
        if(count[single] === 1){
            return single
        }
    }
    
    return -1;
};