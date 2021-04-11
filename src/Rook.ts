import { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Rook extends Piece {
  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    if (!pos) return [];
    return pos.getAllStraightRecursive();
  }

  /**
   * Returns whether a move to a target position is a castling move.
   */
  public isCastleMove(target: Position): boolean {
    const targetPiece = this.game.board.getPieceByPosition(target);
    if (!targetPiece) return false;
    // it is not necessary to check whether the taget piece is an own piece since an enemy piece will never be in the
    // designated position without having moved, which gets checked.
    return (
      targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved
    );
  }
}
