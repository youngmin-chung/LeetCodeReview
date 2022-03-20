/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    const init = 0;
    let tmpArr = [];
    for(var i = 0; i < accounts.length; i++){
        const sum = accounts[i].reduce((prev, cur)=> prev + cur, init)
        tmpArr.push(sum);
    }
    
    return Math.max(...tmpArr)
    
};