import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './AbstractPiece';
export declare class Board {
    game: Game;
    grid: Array<Array<Piece | null>>;
    constructor(game: Game);
    /**
     * Returns the piece at the given XY-coordinates or null if no piece is found there.
     */
    getPieceByXY(x: number, y: number): Piece | null;
    /**
     * Returns the piece at the given Position or null if no piece is found there.
     */
    getPieceByPosition(position: Position): Piece | null;
    /**
     * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
     */
    getPieceByA1(a1: string): Piece | null;
    /**
     * Sets a piece to the board.
     */
    setPiece(piece: Piece): void;
    /**
     * Removes a piece from the board.
     * This method does not check legality or whether this action is part of a move in the game.
     */
    removePiece(piece: Piece | null): void;
    /**
     * Updates the board instance based on the information contained within a provided Move instance.
     */
    registerMove(move: Move): void;
}
//# sourceMappingURL=Board.d.ts.map