/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let q = [];
    let time = 0, fresh = 0;
    const ROWS = grid.length;
    const COLS = grid[0].length;
    
    
    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c]==1){
                fresh += 1;
            }
            if(grid[r][c] == 2){
                q.push([r,c]);
            }
        }
    }
    
    while(q.length && fresh > 0){
        let newQueue = [];
        while(q.length){
             let pos = q.shift();
            let newRotten = rotten(grid, pos[0], pos[1], newQueue);
            fresh -= newRotten;
        }
        
        time++;
        q = newQueue;
    }
    
    if(fresh !== 0) return -1 
    return time;
    

};

var rotten = function (grid, row, column, queue){
    let rotten = 0;
    
    if (row > 0 && grid[row-1][column] === 1) {
        grid[row-1][column]++;
        rotten++;
        queue.push([row-1,column]);
    }
    if (column > 0 && grid[row][column-1] === 1) {
        grid[row][column-1]++;
        rotten++;
        queue.push([row,column-1]);
    }
    if (row < grid.length-1 && grid[row+1][column] === 1) {
        grid[row+1][column]++;
        rotten++;
        queue.push([row+1,column]);
    } 
    if (column < grid[0].length-1 && grid[row][column+1] === 1) {
        grid[row][column+1]++;
        rotten++;
        queue.push([row,column+1]);
    }
    return rotten;
}