let grid = [[1,2,3],[4,5,6],[7,8,9]];

function rotateOuterElements(grid, row, col){
    let temp = grid[0][0];

    for(let fcol=0 ; fcol<row-1 ; fcol++)   
        grid[fcol][0] = grid[fcol+1][0];

    for(let lrow=0 ; lrow<col-1 ; lrow++)   
        grid[row-1][lrow] = grid[row-1][lrow+1];

    for(let lcol=col-1 ; lcol>0 ; lcol--)   
        grid[lcol][col-1] = grid[lcol-1][col-1];

    for(let frow=row-1 ; frow>0 ; frow--)   
        grid[0][frow] = grid[0][frow-1];

    grid[0][1] = temp;
}

const rotateClockwise = () => {

    rotateOuterElements(grid,3,3);
     
    let num = 0;
    for(let row = 0 ; row < 3 ; row++){
        for(let col = 0 ; col < 3 ; col++){
            num++;
            if(row == 1 && col == 1) continue;
            document.getElementById("btn" + num).value = grid[row][col];
        }
    } 
}






