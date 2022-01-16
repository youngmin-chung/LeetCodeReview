/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let flag = numbers.length;
    let tmp = 0;
    let tmpArr = [];
    let idx = 0;
    while(idx <= flag){
        for(var i = 1; i <= flag-1; i++){
            tmp = numbers[idx] + numbers[i];
            if(tmp == target && idx != i){
                tmpArr.push(idx+1,i+1);
               return tmpArr;
            }
        }
    idx++;
    }
};



