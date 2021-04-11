import { Board } from './Board';
import { Player } from './Player';
import { Move } from './Move';
import { isEven } from './util';
import type { Piece } from './AbstractPiece';
import type { Position } from './Position';

export class Game {
  public board: Board;
  public white: Player;
  public black: Player;
  public moves: Array<Move>;

  public constructor() {
    this.board = new Board(this);
    this.white = new Player(this, 'white');
    this.black = new Player(this, 'black');
    this.moves = [];
  }

  /**
   * Returns whether it is white player's turn to move.
   */
  public get isWhitesTurnToMove(): boolean {
    return isEven(this.moves.length);
  }

  /**
   * Returns whether it is black player's turn to move.
   */
  public get isBlacksTurnToMove(): boolean {
    return !isEven(this.moves.length);
  }

  /**
   * Returns whether it is black player's turn to move.
   */
  public get activePlayer(): Player {
    return this.isWhitesTurnToMove ? this.white : this.black;
  }

  /**
   * Iterate each piece on the board.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   */
  public forEachPiece(f: (piece?: Piece) => boolean | void): void {
    const w = this.white.pieces;
    const b = this.black.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(w[i]) === true || f(b[i]) === true) {
        return;
      }
    }
  }

  /**
   * Iterate each white piece on the board.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   */
  public forEachWhitePiece(f: (piece?: Piece) => boolean | void): void {
    const w = this.white.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(w[i]) === true) {
        return;
      }
    }
  }

  /**
   * Iterate each black piece on the board.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   */
  public forEachBlackPiece(f: (piece?: Piece) => boolean | void): void {
    const b = this.black.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(b[i]) === true) {
        return;
      }
    }
  }

  /**
   * Iterate each piece on the board belonging to the player whose turn it is to move.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   */
  public forEachActivePlayerPiece(f: (piece?: Piece) => boolean | void): void {
    return this.isWhitesTurnToMove
      ? this.forEachWhitePiece(f)
      : this.forEachBlackPiece(f);
  }

  /**
   * Moves a piece on the board.
   * If the target position already has a piece belonging to the opposing player, it is removed from the board.
   *
   * @param piece - The Piece to move.
   * @param position - The Position to move to.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game. This is used
   * internally for performance reasons when cloning a game, repeating the moves that were previously validated.
   *
   * @throws {Error} on invalid move, unless `skipValidation` is true.
   */
  public makeMove(
    piece: Piece,
    position: Position,
    skipValidation?: boolean,
  ): void {
    if (skipValidation || piece.isValidMove(position)) {
      const targetPiece = piece.game.board.getPieceByPosition(position);
      let move: Move;
      if (piece.isCastleMove(position)) {
        move = new Move(piece, position);
        this.board.registerSwap(move);
        if (targetPiece) {
          targetPiece.registerMove(new Move(targetPiece, move.from));
        }
      } else {
        move = new Move(piece, position, targetPiece);
        this.board.registerMove(move);
        if (targetPiece) {
          targetPiece.remove();
        }
      }
      piece.registerMove(move);
      this.moves.push(move);
    } else {
      throw new Error('Invalid move.');
    }
  }

  /**
   * Returns a deep clone of the game instance.
   */
  public clone(): Game {
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
