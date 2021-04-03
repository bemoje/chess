import { Piece } from './AbstractPiece';
import { Position } from './Position';

export class Rook extends Piece {
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    if (!pos) return [];
    const res = [];
    res.push(...pos.getAllStraightRecursive());
    if (this.color === 'white') {
      res.push(Position.fromA1Notation('D1'));
    } else {
      res.push(Position.fromA1Notation('D7'));
    }
    return res;
  }

  protected isValidMove(target: Position): boolean {
    return this.isMoveTargetOwnPiece(target)
      ? this.isValidCastleMove(target)
      : true;
  }

  private isValidCastleMove(target: Position): boolean {
    const targetPiece = this.game.board.getPieceByPosition(target);
    return targetPiece
      ? targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved
      : false;
  }
}
