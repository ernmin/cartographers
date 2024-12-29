function Gameboard(){
    const rows = 11;
    const columns = 11;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell())
        }
    }

    const getBoard = () => board;

    const addSymbol = (row, column, symbol) => {
        board[row][column].addMove(symbol);
        console.log('Just added', board[row][column].getValue());
        printBoard();
    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    }

    const getSymbol = (row, column) => {
        return board[row][column];
    }

    const reset = () => {
        for(let i = 0; i < rows; i++){
            board[i] = [];
            for(let j = 0; j < columns; j++){
                board[i].push(Cell())
            }
        }
        printBoard();

    }
    return { getBoard, printBoard, getSymbol, reset, addSymbol, }
}

function Cell() {
    let value = 0;

    const getValue = () => value;

    const addMove = (symbol) => {
        value = symbol;
    }
    return {
        getValue, addMove,
    };
}

function GameController() {
    const board = Gameboard();
    let tiles = [
        {
            terrain: 'forest',
            symbol: 1
        },

        {
            terrain: 'village',
            symbol: 2
        },

        {
            terrain: 'farm',
            symbol: 3
        },

        {
            terrain: 'water',
            symbol: 4
        },

        {
            terrain: 'monster',
            symbol: 5,
        },

        {
            terrain: 'hero',
            symbol: 6
        },

        {
            terrain: 'mountain',
            symbol: 7
        },
    ];

    const playRound = (row, column, symbol) => {
        if (board.getSymbol(row, column).getValue() != 0){
            console.log('Invalid move, please choose another square');
            return;
        }
        else {
            board.addSymbol(row, column, symbol);
        }
    }

    return {
        playRound,
        board,
    };
}

function ScreenController() {
    const game = GameController();
    const boardDiv = document.querySelector('.board');
    for(let i = 0; i < 11; i++){
        for(let j = 0; j < 11; j++){
            const createDiv = document.createElement("div");
            createDiv.classList.add('box');
            boardDiv.appendChild(createDiv);        
        }
    }

    

}

ScreenController();

const game = GameController();