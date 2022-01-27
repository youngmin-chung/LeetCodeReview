/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let tmp = []
   
    var backtrack = function(start, combi){
        if(combi.length == k) {
            // shallw copy
            let copyCombi = Object.assign([], combi);;            
            tmp.push(copyCombi)
            return
        }
               
        for(let i = start; i < n+1; i++){
            combi.push(i);
            backtrack(i+1, combi);
            combi.pop();
        }
    } 
    backtrack(1,[]);
    return tmp
}
            

    
