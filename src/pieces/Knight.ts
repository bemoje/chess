import { Piece } from './AbstractPiece';
import type { Position } from '../Position';

/**
 * {Piece} Knight class.
 */
export class Knight extends Piece {
  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    return pos ? pos.getAllKnightMovePositions() : [];
  }
}
