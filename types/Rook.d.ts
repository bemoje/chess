import { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Rook extends Piece {
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    /**
     * Returns whether a move to a target position is a castling move.
     */
    isCastleMove(target: Position): boolean;
}
//# sourceMappingURL=Rook.d.ts.map