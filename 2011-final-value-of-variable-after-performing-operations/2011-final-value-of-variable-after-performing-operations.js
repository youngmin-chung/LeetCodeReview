/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0
    for(var i = 0; i < operations.length; i++){
        if(operations[i].includes("++")){
            res++;
        }else if(operations[i].includes("--")){
            res--
        }
        
    }
    return res;
};