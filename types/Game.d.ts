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
     * Iterate each piece on the board very efficiently.
     * If the callback function returns true, iteration ends.
     */
    forEachPiece(f: (piece: Piece) => boolean | void): void;
    /**
     * Moves a piece on the board.
     * If the target position already has a piece belonging to the opposing player, it is removed from the board.
     * Allows for skipping validation of the move's legality according to the rules of the game. This is used internally
     * for performance reasons when cloning the game, repeating the moves that were previously checked.
     */
    makeMove(piece: Piece, to: Position, skipValidation?: boolean): void;
    /**
     * Returns a deep clone of the game instance.
     */
    clone(): Game;
}
//# sourceMappingURL=Game.d.ts.map