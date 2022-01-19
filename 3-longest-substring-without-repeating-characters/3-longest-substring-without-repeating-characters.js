/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var max = 0;
    var begin = 0;
    var set = new Set();
    
    for(var end = 0; end < s.length; end++){
        while(set.has(s[end])){
            set.delete(s[begin])
            begin++
        }
        set.add(s[end])
        max = Math.max(max, end - begin + 1)
    }
    return max;
};