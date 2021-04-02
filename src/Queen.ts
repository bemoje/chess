import { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Queen extends Piece {
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    return pos ? pos.getAllStraightAndDiagonalRecursive() : [];
  }
}
