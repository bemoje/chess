import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './AbstractPiece';
export declare class Board extends Array {
    game: Game;
    constructor(game: Game);
    registerMove(move: Move): void;
    removePiece(piece: Piece): void;
    getPieceByXY(x: number, y: number): Piece | null;
    getPieceByA1(a1: string): Piece | null;
    getPieceByPosition(position: Position): Piece | null;
    clone(game?: Game): Board;
}
//# sourceMappingURL=Board.d.ts.map