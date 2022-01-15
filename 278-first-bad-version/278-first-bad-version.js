/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low = 1;
        var high = n;
        var mid;
        var result;
        
        while(low <= high){
            mid = Math.floor((low + high) / 2)
            if(isBadVersion(mid) == true){
                result = mid;
                high = mid - 1;
            }
            else {
                low = mid + 1
            }
        }
        return result;
    };
};

var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    
    while (start <= end){
        var m = Math.floor((start + end) / 2);
        if( nums[m] < target){
            start = m + 1;
        }else if (nums[m] > target){
            end = m - 1;
        }else {
            return m;
        }
    }
    return -1;
};