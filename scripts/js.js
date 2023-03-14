const tablero = document.querySelector('.gameBoard');

/**
 * function to organize the board of game: contains the cell information, the conditional information for the game, the symbolic representation of X and O
 * */

const gameBoard = (() =>{

    const _rows = 3;
    const _columns = 3;
    const _board = [];

for (let i = 0; i < _rows; i++) {
    _board[i] = [];
    for (let j = 0; j < _columns; j++) {
      _board[i].push(Cell(i,j));
    }
  }

let celdaTablero = document.querySelector('.celda');

return _board;

})();

//Cell function will cotain the information of the cells && the incorporation of the cells changes to the array

function Cell(row,colum){
   
   var celda = document.createElement("div");
   celda.className ="celdaTablero"+row+colum;

   //moment in which the function get the parameter from the player in order to add to the cell

   celda.innerHTML = " ";

   tablero.appendChild(celda);

};

/**
 * player selector, it contains the player logic: if it is X or O, if can or cant tic some place of cells
 **/



function player(nombreJugador, selectorJugador){

    const play = ()=>{

        celdaTablero 

        return console.log("hey");

    };


    return {nombreJugador, selectorJugador, play}

}

//generación del jugador player (1 && 2), the name will be getted from the label form in the html

const player1 = player(prompt("introduce tu seleccion: "), "X");

