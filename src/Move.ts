import type { Piece } from './pieces/AbstractPiece';
import type { Position } from './Position';

export class Move {
  public piece: Piece;
  public takes: Piece | null;
  public from: Position;
  public to: Position;

  public constructor(piece: Piece, to: Position, takes: Piece | null = null) {
    const pos = piece.position;
    if (!pos) {
      throw new Error('Cannot move a piece that is not on the board.');
    }

    this.piece = piece;
    this.takes = takes;
    this.from = pos.clone();
    this.to = to.clone();
  }

  /**
   * Stringifies the data necessary for completely reconstructing the Move instance.
   */
  public toJSON(): Array<number> {
    return [this.from.x, this.from.y, this.to.x, this.to.y];
  }
}
