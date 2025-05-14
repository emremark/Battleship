import { gameBoardModule } from "../src/gameboard";

test("gameboard to return a grid 10x10 of nulls", () => {
    const newBoard = new gameBoardModule.GameBoard();
    expect(newBoard.board.length).toBe(10);
})