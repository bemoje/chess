import type { Piece } from './pieces/AbstractPiece';
import type { Game } from './Game';
import type { Move } from './Move';
/**
 * A class that represents a player in a chess Game.
 */
export declare class Player {
    /**
     * The game that this Player instance belongs to.
     */
    game: Game;
    /**
     * The color of the player. Can be `white` or `black`.
     */
    color: string;
    /**
     * An array containing the board Pieces that the player has.
     */
    pieces: Piece[];
    /**
     * @param game - The game that this Player instance belongs to.
     * @param color - The color of the player. Can be `white` or `black`.
     * @throws {Error} on invalid color.
     */
    constructor(game: Game, color: string);
    /**
     * Returns an array of Moves that the player has made.
     */
    get moves(): Move[];
}
//# sourceMappingURL=Player.d.ts.map