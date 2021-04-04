import { Board } from './Board';
import { Player } from './Player';
import { Move } from './Move';
import type { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Game {
  board: Board;
  white: Player;
  black: Player;
  moves: Array<Move>;

  constructor() {
    this.board = new Board(this);
    this.white = new Player(this, 'white');
    this.black = new Player(this, 'black');
    this.moves = [];
  }

  /**
   * Iterate each piece on the board.
   * If the callback function returns true, iteration ends.
   */
  forEachPiece(f: (piece: Piece) => boolean | void): void {
    const w = this.white.pieces;
    const b = this.black.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(w[i]) === true || f(b[i]) === true) {
        return;
      }
    }
  }

  /**
   * Moves a piece on the board.
   * If the target position already has a piece belonging to the opposing player, it is removed from the board.
   * Allows for skipping validation of the move's legality according to the rules of the game. This is used internally
   * for performance reasons when cloning the game, repeating the moves that were previously checked.
   */
  makeMove(piece: Piece, to: Position, skipValidation?: boolean): void {
    if (skipValidation || piece.isValidMovePosition(to)) {
      const targetPiece = piece.game.board.getPieceByPosition(to);
      const move = new Move(piece, to, targetPiece);
      this.moves.push(move);
      this.board.registerMove(move);
      piece.registerMove(move);
      if (targetPiece) targetPiece.remove();
    } else {
      throw new Error('Invalid move.');
    }
  }

  /**
   * Returns a deep clone of the game instance.
   */
  clone(): Game {
    const game = new Game();
    const w = game.white.pieces;
    const b = game.black.pieces;
    const moves = this.moves;
    const l = moves.length;
    for (let piece, i = 0; i < l; i++) {
      piece = moves[i].piece;
      game.makeMove(
        (piece.color === 'white' ? w : b)[piece.index],
        moves[i].to.clone(),
        true,
      );
    }
    return game;
  }
}
