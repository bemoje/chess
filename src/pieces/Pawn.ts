import { Piece } from './AbstractPiece';
import type { Position } from '../Position';

/**
 * {Piece} Pawn class.
 */
export class Pawn extends Piece {
  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const board = this.game.board;
    const pos = this.position;
    const res = [];

    if (!pos) {
      return [];
    }

    if (this.color === 'white') {
      const upPos = pos.getUp();
      if (upPos) {
        res.push(upPos);
      }

      const upUpPos = pos.getUpUp();
      if (upUpPos && !this.hasMoved) {
        res.push(upUpPos);
      }

      const upLeftPos = pos.getUpLeft();
      if (upLeftPos) {
        const diagLeftPiece = board.getPieceByPosition(upLeftPos);
        if (diagLeftPiece) {
          const diagLeftPos = diagLeftPiece.position;
          if (diagLeftPos && diagLeftPiece.color === 'black') {
            res.push(diagLeftPos.clone());
          }
        }
      }

      const upRightPos = pos.getUpRight();
      if (upRightPos) {
        const diagRightPiece = board.getPieceByPosition(upRightPos);
        if (diagRightPiece) {
          const diagLeftPos = diagRightPiece.position;
          if (diagLeftPos && diagRightPiece.color === 'black') {
            res.push(diagLeftPos.clone());
          }
        }
      }
    } else {
      const downPos = pos.getDown();
      if (downPos) {
        res.push(downPos);
      }

      const downDownPos = pos.getDownDown();
      if (downDownPos && !this.hasMoved) {
        res.push(downDownPos);
      }

      const downLeftPos = pos.getDownLeft();
      if (downLeftPos) {
        const diagLeftPiece = board.getPieceByPosition(downLeftPos);
        if (diagLeftPiece) {
          const diagLeftPos = diagLeftPiece.position;
          if (diagLeftPos && diagLeftPiece.color === 'white') {
            res.push(diagLeftPos.clone());
          }
        }
      }

      const downRightPos = pos.getDownRight();
      if (downRightPos) {
        const diagRightPiece = board.getPieceByPosition(downRightPos);
        if (diagRightPiece) {
          const diagLeftPos = diagRightPiece.position;
          if (diagLeftPos && diagRightPiece.color === 'white') {
            res.push(diagLeftPos.clone());
          }
        }
      }
    }
    return res;
  }
}
