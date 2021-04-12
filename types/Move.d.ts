import type { Piece } from './pieces/AbstractPiece';
import type { Position } from './Position';
/**
 * A class that represents a move in a chess Game.
 */
export declare class Move {
    /**
     * The Piece that made the move.
     */
    piece: Piece;
    /**
     * The Piece that was taken out by the move, if any.
     */
    takes: Piece | null;
    /**
     * The Position where the Piece was move was from.
     */
    from: Position;
    /**
     * The Position where the Piece was move was to.
     */
    to: Position;
    /**
     * @param piece - The Piece that made the move.
     * @param to - The Position where the Piece was moved to.
     * @param takes - The Piece that was taken out by the move, if any.
     */
    constructor(piece: Piece, to: Position, takes?: Piece | null);
    /**
     * Stringifies the data necessary for completely reconstructing the Move instance.
     */
    toJSON(): Array<number>;
}
//# sourceMappingURL=Move.d.ts.map