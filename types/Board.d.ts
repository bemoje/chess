import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './pieces/AbstractPiece';
/**
 * A class that acts as a data view of all the pieces that offers faster lookups than iterating pieces.
 */
export declare class Board {
    /**
     * The Game instance that the board belongs to.
     */
    game: Game;
    /**
     * A 2D array grid representing the game board.
     */
    grid: Array<Array<Piece | null>>;
    /**
     * @param game - The Game instance that the board belongs to.
     */
    constructor(game: Game);
    /**
     * Returns the piece at the given XY-coordinates or null if no piece is found there.
     *
     * @param x - The X coordinate
     * @param y - The Y coordinate
     */
    getPieceByXY(x: number, y: number): Piece | null;
    /**
     * Returns the piece at the given Position or null if no piece is found there.
     *
     * @param position - The position on the game board by which to find the Piece instance there.
     */
    getPieceByPosition(position: Position): Piece | null;
    /**
     * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
     *
     * @param a1 - An A1-notation string.
     */
    getPieceByA1(a1: string): Piece | null;
    /**
     * Moves a piece to the board.
     *
     * @param piece - The piece to move.
     */
    setPiece(piece: Piece): void;
    /**
     * Removes a piece from the board.
     * This method does not check legality or whether this action is part of a move in the game.
     *
     * @param piece - The piece to remove.
     */
    removePiece(piece: Piece | null): void;
    /**
     * Updates the board instance based on the information contained within a provided Move instance.
     *
     * @param move - The Move instance containing the information needed to update the board.
     */
    registerMove(move: Move): void;
    /**
     * Updates the board instance based on the information contained within a provided Move instance that is known to make
     * out a swap (used for castling moves).
     *
     * @param move - The Move instance containing the information needed to update the board.
     */
    registerSwap(move: Move): void;
}
//# sourceMappingURL=Board.d.ts.map