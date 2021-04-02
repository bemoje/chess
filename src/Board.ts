import { from_A1_to_XY } from './coordinates';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
import type { Piece } from './AbstractPiece';

export class Board extends Array {
  game: Game;

  constructor(game: Game) {
    super(8);

    this.game = game;

    let i = 0;
    while (i < 8) {
      this[i] = new Array(8).fill(null, 0, 7);
      i++;
    }
  }

  registerMove(move: Move): void {
    const currPos = move.from;
    const newPos = move.to;
    const piece = this[currPos.y][currPos.x];
    this[newPos.y][newPos.x] = piece;
    this[currPos.y][currPos.x] = null;
  }

  removePiece(piece: Piece): void {
    const pos = piece.position;
    if (pos) this[pos.y][pos.x] = null;
  }

  getPieceByXY(x: number, y: number): Piece | null {
    return this[y][x];
  }

  getPieceByA1(a1: string): Piece | null {
    const [x, y] = from_A1_to_XY(a1);
    return this.getPieceByXY(x, y);
  }

  getPieceByPosition(position: Position): Piece | null {
    return this.getPieceByXY(position.x, position.y);
  }

  clone(game: Game = this.game): Board {
    const board = new Board(game);
    let i = 0;
    while (i < 8) {
      let j = 0;
      while (j < 8) {
        board[i][j] = this[i][j];
        j++;
      }
      i++;
    }
    return board;
  }
}
