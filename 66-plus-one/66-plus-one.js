/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let leng = digits.length;
    for(let i = leng - 1; i>=0; i--){
        if(digits[i]<9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    
    return [1, ...digits]
};
