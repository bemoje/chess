import { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Pawn extends Piece {
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    if (!pos) return [];
    const res = [];

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
        const diagLeftPiece = this.game.board.getPieceByPosition(upLeftPos);
        if (diagLeftPiece) {
          const diagLeftPos = diagLeftPiece.position;
          if (diagLeftPos && diagLeftPiece.color === 'black') {
            res.push(diagLeftPos.clone());
          }
        }
      }

      const upRightPos = pos.getUpRight();
      if (upRightPos) {
        const diagRightPiece = this.game.board.getPieceByPosition(upRightPos);
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
        const diagLeftPiece = this.game.board.getPieceByPosition(downLeftPos);
        if (diagLeftPiece) {
          const diagLeftPos = diagLeftPiece.position;
          if (diagLeftPos && diagLeftPiece.color === 'white') {
            res.push(diagLeftPos.clone());
          }
        }
      }

      const downRightPos = pos.getDownRight();
      if (downRightPos) {
        const diagRightPiece = this.game.board.getPieceByPosition(downRightPos);
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
