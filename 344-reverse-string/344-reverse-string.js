/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var l = 0;
    var r = s.length-1;
    var pivot = s.length / 2;
    while(pivot > 0){
        [s[l], s[r]] = [s[r], s[l]]
        l++;
        r--;
        pivot--;
    }
    return s
};