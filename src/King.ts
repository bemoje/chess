import { Piece } from './AbstractPiece';
import { Position } from './Position';

export class King extends Piece {
  protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
    const pos = this.position;
    if (!pos) return [];
    const res = pos.getAllStraightAndDiagonal();
    if (this.color === 'white') {
      res.push(Position.fromA1Notation('A1'), Position.fromA1Notation('H1'));
    } else {
      res.push(Position.fromA1Notation('A7'), Position.fromA1Notation('H7'));
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
      ? targetPiece.type === 'Rook' && !targetPiece.hasMoved && !this.hasMoved
      : false;
  }
}
