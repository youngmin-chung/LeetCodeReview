/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var sqrt = square(nums)
    var sorted = false;
    var temp;
        while (!sorted) {
            sorted = true;
            for (var i = 0; i < sqrt.length - 1; i++) {
                if (sqrt[i] > sqrt[i+1]) {
                    temp = sqrt[i];
                    sqrt[i] = sqrt[i+1];
                    sqrt[i+1] = temp;
                    sorted = false;
                }
            }
        }
    return sqrt;
};

var square = function(arr) {
    var sqrtArr = []
    for(var i = 0; i < arr.length; i++){
        sqrtArr.push(Math.pow(arr[i], 2))
    }
    
    return sqrtArr
}

