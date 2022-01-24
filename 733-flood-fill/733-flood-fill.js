/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] == newColor) {
        return image;
    }
    
    fill(image, sr, sc, image[sr][sc], newColor)    
    
    return image;
};

var fill = function (imageArr, srNum, scNum, colorVal, newColorVal){
    if(srNum < 0 || scNum < 0 || srNum >= imageArr.length || scNum >= imageArr[0].length || imageArr[srNum][scNum] != colorVal){
        return;
    }
    
    imageArr[srNum][scNum] = newColorVal;
    fill(imageArr, srNum-1, scNum, colorVal, newColorVal);
    fill(imageArr, srNum+1, scNum, colorVal, newColorVal);
    fill(imageArr, srNum, scNum-1, colorVal, newColorVal);
    fill(imageArr, srNum, scNum+1, colorVal, newColorVal);
    
    
}