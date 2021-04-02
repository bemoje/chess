import { Piece } from './AbstractPiece';
import { Position } from './Position';
export declare class Rook extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    protected isValidMove(target: Position): boolean;
    private isValidCastleMove;
}
//# sourceMappingURL=Rook.d.ts.map