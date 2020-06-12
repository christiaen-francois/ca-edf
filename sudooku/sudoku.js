const fs = require('fs');
const source = fs.readFileSync("./" + process.argv[2],"utf8").split("\n");
let numbersToCheck = [1,2,3,4,5,6,7,8,9];
let board = cleanSudo(source);

// Epurer la grille
function cleanSudo(source){
    let board = [];
    for(let row = 0; row < source.length; row++){
        if(source[row] !== "---+---+---"){
            newRow = source[row].replace(/[|]/g,'').replace(/[_]/g,'0').split("");
            board.push(newRow);
        }
    }
    return board;
}
function validSudo(board, x, y, number){
    //console.log("x = "+ x + " / y = "+ y + " / n = "+ number);
    for (let i = 0; i < 9; i++) {
        // On calcule la position des carrés de 3x3 selon la position de l'inconnue
        const m = 3 * Math.floor(x / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(y / 3) + i % 3;
        
        if (board[x][i] == number || board[i][y] == number || board[m][n] == number){
            return false;
        }
    }
    return true;
}
function processSudo(board){
    let rowLength = board.length;
    let gridLength = board[0].length;
    
    // Parcours de l'axe X
    for (let x = 0; x < rowLength; x++) {
        // Parcours de l'axe Y
        for (let y = 0; y < gridLength; y++) {
            // Si il y a une inconnue
            if (board[x][y] == '0') {
                // Parcours des possitilités à valider
                numbersToCheck.forEach( number => {
                    if (validSudo(board, x, y, number)) {
                        board[x][y] = `${number}`;
                        if (processSudo(board)) {
                            // On sauvegarde le résultat final dans un
                            // nouveau fichier
                            saveSudo(board);
                            return true;
                        } else {
                            board[x][y] = '0';
                        }
                    }
                });
                return false;
            }
        }
    }
    return true;
}

function saveSudo(board){
    let rowLength = board.length;
    let gridLength = board[0].length;
    let boardToString = "";
    let splitedRow;

    for (let x = 0; x < rowLength; x++) {
        splitedRow = board[x].join('').match(/.{1,3}/g).join('|');
        boardToString += splitedRow +"\n";
        if(x == 2 || x == 5){
            boardToString += "---+---+---\n";
        }
    }
    console.log(boardToString);
}
processSudo(board);