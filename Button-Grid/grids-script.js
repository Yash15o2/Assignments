let grid = [[1,2,3],[4,5,6],[7,8,9]];

// 1 2 3
// 4 5 6
// 7 8 9

const rotateClockwise = () => {

    let temp = grid[0][0];
    grid[0][0] = grid[1][0];
    grid[1][0] = grid[2][0];
    grid[2][0] = grid[2][1];
    grid[2][1] = grid[2][2];
    grid[2][2] = grid[1][2];
    grid[1][2] = grid[0][2];
    grid[0][2] = grid[0][1];
    grid[0][1] = temp;
    
    let num = 0;
    for(let row = 0 ; row < 3 ; row++){
        for(let col = 0 ; col < 3 ; col++){
            num++;
            if(row == 1 && col == 1) continue;
            document.getElementById("btn" + num).value = grid[row][col];
        }
    } 
}






