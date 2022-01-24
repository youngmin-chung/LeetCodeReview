/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    ///////////////////////////////////////////////////////////////////////////
    const R = grid.length;
    const C = grid[0].length;
    var area = 0;   
    var checker = (row, column) =>{
        
    if(row < 0 || column < 0 || row >= R || column >= C || !grid[row][column]){
        return 0;
    }
    
    grid[row][column] = 0    
    
    return (1 + checker(row+1, column) + checker(row-1, column) + checker(row, column+1) + checker(row, column-1))

    }
    
    for(var r = 0; r < R; r++){
        for(var c = 0; c < C; c++){
           if (grid[r][c]){
               area = Math.max(area, checker(r, c));
           }
        }
    }
    return area;  
};


