import { from_A1_to_XY } from './coordinates';

import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './AbstractPiece';

export class Board {
  game: Game;
  grid: Array<Array<Piece | null>>;

  constructor(game: Game) {
    this.game = game;
    this.grid = [];
    let i = 0;
    while (i < 8) {
      this.grid.push(new Array(8).fill(null, 0, 7));
      i++;
    }
  }

  /**
   * Updates the board instance based on the information contained within a provided Move instance.
   */
  registerMove(move: Move): void {
    const currPos = move.from;
    const newPos = move.to;
    const piece = this.grid[currPos.y][currPos.x];
    this.grid[newPos.y][newPos.x] = piece;
    this.grid[currPos.y][currPos.x] = null;
  }

  /**
   * Removes a piece from the board.
   */
  removePiece(piece: Piece): void {
    const pos = piece.position;
    if (pos) this.grid[pos.y][pos.x] = null;
  }

  /**
   * Returns the piece at the given XY-coordinates or null if no piece is found there.
   */
  getPieceByXY(x: number, y: number): Piece | null {
    return this.grid[y][x];
  }

  /**
   * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
   */
  getPieceByA1(a1: string): Piece | null {
    const [x, y] = from_A1_to_XY(a1);
    return this.getPieceByXY(x, y);
  }

  /**
   * Returns the piece at the given Position or null if no piece is found there.
   */
  getPieceByPosition(position: Position): Piece | null {
    return this.getPieceByXY(position.x, position.y);
  }

  // clone(game: Game = this.game): Board {
  //   const board = new Board(game);
  //   let i = 0;
  //   while (i < 8) {
  //     let j = 0;
  //     while (j < 8) {
  //       board[i][j] = this.grid[i][j];
  //       j++;
  //     }
  //     i++;
  //   }
  //   return board;
  // }
}
