import { Piece } from './AbstractPiece';
import type { Position } from '../Position';

/**
 * {Piece} Bishop class.
 */
export class Bishop extends Piece {
  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    return pos ? pos.getAllDiagonalRecursive() : [];
  }
}
