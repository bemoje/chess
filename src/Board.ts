import { from_A1_to_XY } from './coordinates';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './AbstractPiece';

export class Board {
  public game: Game;
  public grid: Array<Array<Piece | null>>;

  public constructor(game: Game) {
    this.game = game;
    this.grid = [];
    let i = 0;
    while (i < 8) {
      this.grid.push(new Array(8).fill(null, 0, 7));
      i++;
    }
  }

  /**
   * Returns the piece at the given XY-coordinates or null if no piece is found there.
   */
  public getPieceByXY(x: number, y: number): Piece | null {
    return this.grid[y][x];
  }

  /**
   * Returns the piece at the given Position or null if no piece is found there.
   */
  public getPieceByPosition(position: Position): Piece | null {
    return this.getPieceByXY(position.x, position.y);
  }

  /**
   * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
   */
  public getPieceByA1(a1: string): Piece | null {
    const [x, y] = from_A1_to_XY(a1);
    return this.getPieceByXY(x, y);
  }

  /**
   * Sets a piece to the board.
   */
  public setPiece(piece: Piece): void {
    const pos = piece.position;
    if (pos) this.grid[pos.y][pos.x] = piece;
  }

  /**
   * Removes a piece from the board.
   * This method does not check legality or whether this action is part of a move in the game.
   */
  public removePiece(piece: Piece | null): void {
    if (piece) {
      const pos = piece.position;
      if (pos) this.grid[pos.y][pos.x] = null;
    }
  }

  /**
   * Updates the board instance based on the information contained within a provided Move instance.
   */
  public registerMove(move: Move): void {
    const from = move.from;
    const to = move.to;
    const piece = this.grid[from.y][from.x];
    this.grid[to.y][to.x] = piece;
    this.grid[from.y][from.x] = null;
  }

  /**
   * Updates the board instance based on the information contained within a provided Move instance that is known to make
   * out a swap (used for castling moves).
   */
  public registerSwap(move: Move): void {
    const from = move.from;
    const to = move.to;
    const pieceFrom = this.grid[from.y][from.x];
    const pieceTo = this.grid[to.y][to.x];
    this.grid[to.y][to.x] = pieceFrom;
    this.grid[from.y][from.x] = pieceTo;
  }
}
