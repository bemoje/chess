import type { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Move {
  piece: Piece;
  takes: Piece | null;
  from: Position;
  to: Position;

  constructor(piece: Piece, to: Position, takes: Piece | null = null) {
    const pos = piece.position;
    if (!pos) {
      throw new Error('Cannot move a piece that is not on the board.');
    }

    this.piece = piece;
    this.takes = takes;
    this.from = pos.clone();
    this.to = to.clone();
  }
}
