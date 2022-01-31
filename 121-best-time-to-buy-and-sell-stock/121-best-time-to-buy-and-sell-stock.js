/**
 * @param {number[]} prices
 * @return {number}
 
 GOAL - Find the biggest difference between the smallest element and the biggest element, but the conditions are as follows;
  1. index of smallest one must be smaller than index of biggest one
  2. index of smallest one is the last element in the array, return 0
  3. 
 */
var maxProfit = function(prices) {
  let minPrice = Math.max(...prices)
  let maxProfit = 0;
    
    for(var i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit;
};