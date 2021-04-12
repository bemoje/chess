import type { Piece } from './pieces/AbstractPiece';
import type { Position } from './Position';

/**
 * A class that represents a move in a chess Game.
 */
export class Move {
  /**
   * The Piece that made the move.
   */
  public piece: Piece;

  /**
   * The Piece that was taken out by the move, if any.
   */
  public takes: Piece | null;

  /**
   * The Position where the Piece was move was from.
   */
  public from: Position;

  /**
   * The Position where the Piece was move was to.
   */
  public to: Position;

  /**
   * @param piece - The Piece that made the move.
   * @param to - The Position where the Piece was moved to.
   * @param takes - The Piece that was taken out by the move, if any.
   */
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
