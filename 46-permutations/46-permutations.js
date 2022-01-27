/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    
    var permutation = function(arr, m = []) {
        if(arr.length == 0){
            res.push(m);
        }else {
            for(let i = 0; i < arr.length; i++){
                let curr = arr.slice();
                
                let next = curr.splice(i,1);

                permutation(curr.slice(), m.concat(next));
            }
        }
    }
    permutation(nums);
    
    return res;
};

