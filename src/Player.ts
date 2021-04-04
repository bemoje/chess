import { Position } from './Position';
import { Pawn } from './Pawn';
import { Knight } from './Knight';
import { Bishop } from './Bishop';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { King } from './King';
import type { Piece } from './AbstractPiece';
import type { Game } from './Game';
import type { Move } from './Move';

export class Player {
  game: Game;
  color: string;
  pieces: Piece[];

  constructor(game: Game, color: string) {
    this.game = game;
    this.color = color;

    let row1: string, row2: string;
    if (color === 'white') {
      row1 = '1';
      row2 = '2';
    } else if (color === 'black') {
      row1 = '8';
      row2 = '7';
    } else {
      throw new Error('Invalid color');
    }

    this.pieces = [
      new King(this, 0, Position.fromA1('E' + row1)),
      new Queen(this, 1, Position.fromA1('D' + row1)),
      new Bishop(this, 2, Position.fromA1('C' + row1)),
      new Bishop(this, 3, Position.fromA1('F' + row1)),
      new Knight(this, 4, Position.fromA1('B' + row1)),
      new Knight(this, 5, Position.fromA1('G' + row1)),
      new Rook(this, 6, Position.fromA1('A' + row1)),
      new Rook(this, 7, Position.fromA1('H' + row1)),
      new Pawn(this, 8, Position.fromA1('A' + row2)),
      new Pawn(this, 9, Position.fromA1('B' + row2)),
      new Pawn(this, 10, Position.fromA1('C' + row2)),
      new Pawn(this, 11, Position.fromA1('D' + row2)),
      new Pawn(this, 12, Position.fromA1('E' + row2)),
      new Pawn(this, 13, Position.fromA1('F' + row2)),
      new Pawn(this, 14, Position.fromA1('G' + row2)),
      new Pawn(this, 15, Position.fromA1('H' + row2)),
    ];
  }

  /**
   * Returns an array of Move instances that describe moves of this Piece.
   */
  get moves(): Move[] {
    return this.game.moves.filter((move) => {
      return move.piece.player === this;
    });
  }
}
