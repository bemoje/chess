import type { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Move {
  piece: Piece;
  from: Position;
  to: Position;

  constructor(piece: Piece, to: Position, _skipValidation = false) {
    const pos = piece.position;
    if (!pos) throw new Error('Cannot move a piece that is not on the board.');

    this.piece = piece;
    this.from = pos.clone();
    this.to = to.clone();

    if (_skipValidation || piece.isValidMovePosition(to)) {
      const targetPiece = piece.game.board.getPieceByPosition(to);
      if (targetPiece) targetPiece.remove();
      piece.registerMove(this);
      piece.game.board.registerMove(this);
    } else {
      throw new Error('Invalid move.');
    }
  }
}
