import { Piece } from './AbstractPiece';
import type { Position } from './Position';
export declare class Queen extends Piece {
    /**
     * Returns the class name of the Piece.
     */
    get type(): string;
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
//# sourceMappingURL=Queen.d.ts.map