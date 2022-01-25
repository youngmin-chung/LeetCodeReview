/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var updateMatrix = function(mat) {
    let queue = [];
   
    
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[0].length; c++){
            if(mat[r][c]===0){
                queue.push([r,c, 0]);
            }else {
                mat[r][c] = Infinity;
            }
        }
    }
    
    let dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    
    while(queue.length){
        let pos = queue.shift();
        if (mat[pos[0]][pos[1]] > pos[2]) {
            mat[pos[0]][pos[1]] = pos[2];
        }
        
        dirs.forEach(function(d) {
            let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
            if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
                if (mat[next[0]][next[1]] === Infinity) {
                    queue.push(next);
                }
            }
        });
    }
    return mat;    
}




// Time Limit Exceeded 
// var updateMatrix = function(mat) {
 
    // Time Limit Exceeded 
    // for(var i = 0; i < mat.length; i++){
    //     for(var j = 0; j < mat[0].length; j++){
    //        mat[i][j] = distance(mat,i,j)
    //     }
    // }
    // return mat
// };

// var distance = function(mat, r, c){
//     let currentVal;
//     let current;
//     let q = [{r, c, dist:0}]
//     while(q.length > 0){
//         current = q.shift();
//         if(mat[current.r]=== undefined || mat[current.r][current.c] === undefined) continue;
//         currentVal = mat[current.r][current.c];
//         if(currentVal === 0) return current.dist;
        
//         q.push({r:current.r+1, c: current.c, dist: current.dist+1})
//         q.push({r:current.r, c: current.c+1, dist: current.dist+1})
//         q.push({r:current.r-1, c: current.c, dist: current.dist+1})
//         q.push({r:current.r, c: current.c-1, dist: current.dist+1})
//     }
// }