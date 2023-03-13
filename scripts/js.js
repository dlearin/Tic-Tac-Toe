function gameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    //creating 2nd dimmension of an array Board

    for (let i=0;i<rows;i++){
        board[i] = [];
        for(let j = 0;j<columns;j++ ){
            board[i].push(Cell());
        }

    }
}


