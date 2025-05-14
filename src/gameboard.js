export const gameBoardModule = (function () {
    
    class GameBoard {
        constructor() {
            let emptyBoard = [];
            for (let a = 0; a < 10; a++) {
                let line = [];
                for (let inner = 0; inner < 10; inner++) {
                    let position = null;
                    line.push(position)
                }
                emptyBoard.push(line)
            }
            this.board = emptyBoard;
        }
    }



    return { GameBoard };
})();
