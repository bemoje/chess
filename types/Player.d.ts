import type { Piece } from './pieces/AbstractPiece';
import type { Game } from './Game';
import type { Move } from './Move';
export declare class Player {
    game: Game;
    color: string;
    pieces: Piece[];
    constructor(game: Game, color: string);
    /**
     * Returns an array of Move instances that describe moves of this Piece.
     */
    get moves(): Move[];
}
//# sourceMappingURL=Player.d.ts.map