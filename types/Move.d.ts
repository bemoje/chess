import type { Piece } from './pieces/AbstractPiece';
import type { Position } from './Position';
export declare class Move {
    piece: Piece;
    takes: Piece | null;
    from: Position;
    to: Position;
    constructor(piece: Piece, to: Position, takes?: Piece | null);
    /**
     * Stringifies the data necessary for completely reconstructing the Move instance.
     */
    toJSON(): Array<number>;
}
//# sourceMappingURL=Move.d.ts.map