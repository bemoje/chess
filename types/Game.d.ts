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
    get players(): Array<Player>;
    get pieces(): Array<Piece>;
    makeMove(piece: Piece, to: Position, _skipValidation?: boolean): Move;
    clone(): Game;
}
//# sourceMappingURL=Game.d.ts.map