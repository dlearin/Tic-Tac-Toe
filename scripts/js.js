const tablero = document.querySelector('#gameBoard');

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

    function Cell(row,colum){
   
        var celda = document.createElement("div");
        celda.className ="celdaTablero";
        celda.id = "celda" + row + colum; // agregar un id único a la celda

        celda.innerHTML = " ";

        tablero.appendChild(celda);

    };

    return _board;

})();

/**
 * player selector, it contains the player logic: if it is X or O, if can or cant tic some place of cells
 **/

function player(nombreJugador, selectorJugador){

    const play = (()=>{

        const celdas = document.querySelectorAll('#gameBoard .celdaTablero'); // seleccionar todas las celdas del tablero

        celdas.forEach((celda) => { // agregar un addEventListener a cada celda
            celda.addEventListener('click',function(){

                if (selectorJugador == "X"){
                    celda.innerHTML = "X";
                }
    
                if (selectorJugador=="O"){
                    celda.innerHTML = "O";
                }
            })
        });

    })();

    return {nombreJugador, selectorJugador, play}
}

//generación del jugador player (1 && 2), the name will be getted from the label form in the html

const player1 = new player(prompt("introduce tu seleccion: "), "X");