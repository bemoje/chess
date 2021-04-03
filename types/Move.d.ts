import type { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Move {
    piece: Piece;
    takes: Piece | null;
    from: Position;
    to: Position;
    constructor(piece: Piece, to: Position, takes?: Piece | null);
}
//# sourceMappingURL=Move.d.ts.map