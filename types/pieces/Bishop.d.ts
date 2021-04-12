import { Piece } from './AbstractPiece';
import type { Position } from '../Position';
export declare class Bishop extends Piece {
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
//# sourceMappingURL=Bishop.d.ts.map