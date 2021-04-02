import type { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Move {
    piece: Piece;
    from: Position;
    to: Position;
    constructor(piece: Piece, to: Position, _skipValidation?: boolean);
}
//# sourceMappingURL=Move.d.ts.map