/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    let res = [];
    if(r * c != mat.length * mat[0].length){
        return mat;
    }
    
    mat = mat.flat();
    // console.log(mat)
    for(let i = 0, k = 0; i < r; i++){
        let tmp = [];
        
        for(let j = 0; j < c; j++){
            tmp.push(mat[k]);
            k++;
        }
        res.push(tmp);
    }
    
    return res;
};

