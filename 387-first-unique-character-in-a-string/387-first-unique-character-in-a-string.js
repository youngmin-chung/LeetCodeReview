/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charCount = {};   // {l: 1, e: 3, t: 1, c: 1, o: 1, d: 1}
    
  for(const char of s) {
    if(charCount[char]) charCount[char]++
    else charCount[char] = 1
  }
    
  for(var i = 0; i < s.length; i++){
     const char = s[i];
     if(charCount[char] === 1){
         return i;
     }
  }
    
  return -1;
};