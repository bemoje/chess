import { Board } from './Board';
import { Player } from './Player';
import { Move } from './Move';
import type { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Game {
    board: Board;
    white: Player;
    black: Player;
    moves: Array<Move>;
    constructor();
    /**
     * Returns whether it is white player's turn to move.
     */
    get isWhitesTurnToMove(): boolean;
    /**
     * Returns whether it is black player's turn to move.
     */
    get isBlacksTurnToMove(): boolean;
    /**
     * Returns whether it is black player's turn to move.
     */
    get activePlayer(): Player;
    /**
     * Iterate each piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     */
    forEachPiece(f: (piece?: Piece) => boolean | void): void;
    /**
     * Iterate each white piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     */
    forEachWhitePiece(f: (piece?: Piece) => boolean | void): void;
    /**
     * Iterate each black piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     */
    forEachBlackPiece(f: (piece?: Piece) => boolean | void): void;
    /**
     * Iterate each piece on the board belonging to the player whose turn it is to move.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     */
    forEachActivePlayerPiece(f: (piece?: Piece) => boolean | void): void;
    /**
     * Moves a piece on the board.
     * If the target position already has a piece belonging to the opposing player, it is removed from the board.
     *
     * @param piece - The Piece to move.
     * @param position - The Position to move to.
     * @param skipValidation - skips validation of the move's legality according to the rules of the game. This is used
     * internally for performance reasons when cloning a game, repeating the moves that were previously validated.
     *
     * @throws {Error} on invalid move, unless `skipValidation` is true.
     */
    makeMove(piece: Piece, position: Position, skipValidation?: boolean): void;
    /**
     * Returns a deep clone of the game instance.
     */
    clone(): Game;
}
//# sourceMappingURL=Game.d.ts.map