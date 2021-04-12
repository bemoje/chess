import { Board } from './Board';
import { Player } from './Player';
import { Move } from './Move';
import { Position } from './Position';
import { Piece } from './pieces/AbstractPiece';
export declare class Game {
    /**
     * Recreates a Game instance from a previously stringified Game instance.
     * @throws {Error} on invalid JSON data
     */
    static fromJSON(data: string): Game;
    /**
     * The game board
     */
    board: Board;
    /**
     * White player
     */
    white: Player;
    /**
     * Black player
     */
    black: Player;
    /**
     * An array containing all moves made in the game
     */
    moves: Array<Move>;
    /**
     * Returns an instance of Game
     */
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
     * @returns true if iteration was ended before completion.
     */
    forEachPiece(f: (piece?: Piece) => boolean | void): boolean | void;
    /**
     * Iterate each white piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    forEachWhitePiece(f: (piece?: Piece) => boolean | void): boolean | void;
    /**
     * Iterate each black piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    forEachBlackPiece(f: (piece?: Piece) => boolean | void): boolean | void;
    /**
     * Iterate each piece on the board belonging to the player whose turn it is to move.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    forEachActivePlayerPiece(f: (piece?: Piece) => boolean | void): boolean | void;
    /**
     * Ensures the argument is converted into a Position instance.
     */
    private ensurePosition;
    /**
     * Get a Piece instance from the board by either Position, an A1 string or XY-coordinates
     */
    private getPiece;
    /**
     * Iterate each valid move position for either all active player pieces or a given piece.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @param pieceOrCoordinate - only iterate a single piece's valid move positions. Can be the Piece to move, or where
     * to find the piece which can be a Position instance, XY-array or A1-notation string.
     * @returns true if iteration was ended before completion.
     */
    forEachValidMove(f: (position?: Position, piece?: Piece) => boolean | void, pieceOrCoordinate?: Piece | Position | string | Array<number>): boolean | void;
    /**
     * Moves a piece on the board.
     * If the target position already has a piece belonging to the opposing player, it is removed from the board.
     *
     * @param pieceOrCoordinate - The Piece to move, or where to find the piece which can be a Position instance, XY-array
     * or A1-notation string.
     * @param to - The Position to move to.
     * @param skipValidation - skips validation of the move's legality according to the rules of the game. This is used
     * internally for performance reasons when cloning a game, which repeats the moves that were previously validated.
     *
     * @throws {Error} on invalid move, unless `skipValidation` is true.
     */
    makeMove(pieceOrCoordinate: Piece | Position, to: Position | string | Array<number>, skipValidation?: boolean): Game;
    /**
     * Returns a deep clone of the game instance.
     */
    clone(): Game;
    /**
     * Stringifies the necessary data for reconstructing the game.
     */
    toJSON(): string;
}
//# sourceMappingURL=Game.d.ts.map