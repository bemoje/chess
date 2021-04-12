import { Board } from './Board';
import { Player } from './Player';
import { Move } from './Move';
import { isEven, uInt8ToBytes, bytesToUint8Array } from './util';
import { Position } from './Position';
import { Piece } from './pieces/AbstractPiece';

/**
 * The default exported class from which the chess game is controlled.
 */
export class Game {
  /**
   * Parse and optionally validate JSON data.
   *
   * @param data - A previously stringified Game instance.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game.
   *
   * @throws {TypeError} on invalid JSON data.
   */
  private static parseJSON(
    data: string,
    skipValidation: boolean,
  ): Array<number> {
    let moves;
    try {
      moves = JSON.parse(data);
      if (!skipValidation) {
        if (!Number.isInteger(moves.length / 4)) {
          throw new TypeError('Invalid length.');
        }
        for (let i = 0; i < moves.length; i++) {
          if (!Number.isInteger(moves[i])) {
            throw new TypeError('Expected an array of integers only.');
          }
        }
      }
    } catch (e) {
      throw new TypeError('Invalid JSON data. ' + e.message);
    }
    return moves;
  }

  /**
   * Recreates a Game instance from a previously parsed stringified or serialized Game instance converted to array.
   * Used internally by @see Game.fromJSON() and @see Game.deserialize()
   *
   * @param data - A previously stringified Game instance.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game.
   */
  private static fromArray(data: Array<number>, skipValidation: boolean) {
    const game = new Game();
    for (let i = 0; i < data.length; i += 4) {
      game.makeMove(
        new Position(data[i], data[i + 1]),
        new Position(data[i + 2], data[i + 3]),
        skipValidation,
      );
    }
    return game;
  }

  /**
   * Recreates a Game instance from a previously stringified Game instance.
   * @see Game.prototype.toJSON()
   *
   * @param data - A previously stringified Game instance.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game as well as the data.

   * @throws {Error} on invalid JSON data.
   */
  public static fromJSON(data: string, skipValidation = false): Game {
    return this.fromArray(this.parseJSON(data, skipValidation), skipValidation);
  }

  /**
   * Recreates a Game instance from binary data.
   * @see Game.prototype.serialize()
   *
   * @param data - A previously stringified Game instance.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game as well as the data.

   * @throws {Error} on invalid JSON data.
   */
  public static deserialze(data: Uint8Array, skipValidation = false): Game {
    return this.fromArray(uInt8ToBytes(data), skipValidation);
  }

  /**
   * The game board.
   */
  public board: Board;

  /**
   * White player.
   */
  public white: Player;

  /**
   * Black player.
   */
  public black: Player;

  /**
   * An array containing all moves made in the game.
   */
  public moves: Array<Move>;

  /**
   * Creates and initializes a new chess game.
   */
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
   * @returns true if iteration was ended before completion.
   */
  public forEachPiece(f: (piece?: Piece) => boolean | void): boolean | void {
    const w = this.white.pieces;
    const b = this.black.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(w[i]) || f(b[i])) {
        return true;
      }
    }
  }

  /**
   * Iterate each white piece on the board.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   * @returns true if iteration was ended before completion.
   */
  public forEachWhitePiece(
    f: (piece?: Piece) => boolean | void,
  ): boolean | void {
    const w = this.white.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(w[i])) {
        return true;
      }
    }
  }

  /**
   * Iterate each black piece on the board.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   * @returns true if iteration was ended before completion.
   */
  public forEachBlackPiece(
    f: (piece?: Piece) => boolean | void,
  ): boolean | void {
    const b = this.black.pieces;
    for (let i = 0; i < 16; i++) {
      if (f(b[i])) {
        return true;
      }
    }
  }

  /**
   * Iterate each piece on the board belonging to the player whose turn it is to move.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   * @returns true if iteration was ended before completion.
   */
  public forEachActivePlayerPiece(
    f: (piece?: Piece) => boolean | void,
  ): boolean | void {
    return this.isWhitesTurnToMove
      ? this.forEachWhitePiece(f)
      : this.forEachBlackPiece(f);
  }

  /**
   * Ensures the argument is converted into a Position instance.
   *
   * @param from - a Position instance, A1-notation string or XY-coordinate-array.
   */
  private ensurePosition(from: Position | string | Array<number>): Position {
    return from instanceof Position
      ? from
      : typeof from === 'string'
      ? Position.fromA1(from)
      : Position.fromXY(from);
  }

  /**
   * Get a Piece instance from the board by either Position, an A1 string or XY-coordinates
   *
   * @param from - a Position instance, A1-notation string or XY-coordinate-array. If a Piece instance is passed, it is returned.
   */
  private getPiece(
    from?: Position | string | Array<number> | Piece,
  ): Piece | null {
    return !from
      ? null
      : from instanceof Piece
      ? from
      : this.board.getPieceByPosition(this.ensurePosition(from));
  }

  /**
   * Iterate each valid move position for either all active player pieces or a given piece.
   *
   * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
   * @param pieceOrCoordinate - only iterate a single piece's valid move positions. Can be the Piece to move, or where
   * to find the piece which can be a Position instance, XY-array or A1-notation string.
   * @returns true if iteration was ended before completion.
   */
  public forEachValidMove(
    f: (position?: Position, piece?: Piece) => boolean | void,
    pieceOrCoordinate?: Piece | Position | string | Array<number>,
  ): boolean | void {
    const piece = this.getPiece(pieceOrCoordinate);
    return piece
      ? piece.forEachValidMovePosition((pos) => {
          return f(pos, piece);
        })
      : this.forEachActivePlayerPiece((piece) => {
          if (piece) {
            return piece.forEachValidMovePosition((pos) => {
              return f(pos, piece);
            });
          } else return;
        });
  }

  /**
   * Moves a piece on the board.
   * If the target position already has a piece belonging to the opposing player, it is removed from the board.
   *
   * @param pieceOrCoordinate - The Piece to move, or where to find the piece which can be a Position instance, XY-array
   * or A1-notation string.
   * @param to - Where to move to.
   * @param skipValidation - skips validation of the move's legality according to the rules of the game. This is used
   * internally for performance reasons when cloning a game, which repeats the moves that were previously validated.
   *
   * @throws {Error} on invalid move, unless `skipValidation` is true.
   */
  public makeMove(
    pieceOrCoordinate: Piece | Position,
    to: Position | string | Array<number>,
    skipValidation?: boolean,
  ): Game {
    to = this.ensurePosition(to);
    const piece = this.getPiece(pieceOrCoordinate);
    if (piece && (skipValidation || piece.isValidMove(to))) {
      const targetPiece = piece.game.board.getPieceByPosition(to);
      let move;
      if (piece.isCastleMove(to)) {
        move = new Move(piece, to);
        this.board.registerSwap(move);
        if (targetPiece) {
          targetPiece.registerMove(new Move(targetPiece, move.from));
        }
      } else {
        move = new Move(piece, to, targetPiece);
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
    return this;
  }

  /**
   * Returns a deep clone of the game instance.
   */
  public clone(): Game {
    const game = new Game();
    const w = game.white.pieces;
    const b = game.black.pieces;
    const moves = this.moves;
    for (let i = 0; i < moves.length; i++) {
      const piece = moves[i].piece;
      game.makeMove(
        (piece.color === 'white' ? w : b)[piece.index],
        moves[i].to.clone(),
        true,
      );
    }
    return game;
  }

  /**
   * Method used by JSON.stringify to return string-serialized data necessary for completely reconstructing the Game
   * instance.
   * @see Game.fromJSON()
   */
  public toJSON(): Array<number> {
    const moves = this.moves;
    const l = moves.length;
    const res = new Array(l * 4);
    for (let move, i = 0; i < l; i++) {
      move = moves[i];
      res[i * 4 + 0] = move.from.x;
      res[i * 4 + 1] = move.from.y;
      res[i * 4 + 2] = move.to.x;
      res[i * 4 + 3] = move.to.y;
    }
    return res;
  }

  /**
   * Serializes the data necessary for completely reconstructing the Game instance to binary.
   * @see Game.deserialize()
   */
  public serialize(): Uint8Array {
    return bytesToUint8Array(this.toJSON());
  }
}
