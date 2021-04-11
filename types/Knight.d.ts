import { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Knight extends Piece {
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
//# sourceMappingURL=Knight.d.ts.map