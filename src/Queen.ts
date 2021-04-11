import { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Queen extends Piece {
  /**
   * Returns the class name of the Piece.
   */
  public get type(): string {
    return 'Queen';
  }

  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    return pos ? pos.getAllStraightAndDiagonalRecursive() : [];
  }
}
