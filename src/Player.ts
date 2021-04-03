import { Position } from './Position';
import { Pawn } from './Pawn';
import { Knight } from './Knight';
import { Bishop } from './Bishop';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { King } from './King';
import type { Piece } from './AbstractPiece';
import type { Game } from './Game';

export class Player {
  game: Game;
  color: string;
  pieces: Array<Piece>;

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
      new King(this, 0, Position.fromA1Notation('E' + row1)),
      new Queen(this, 1, Position.fromA1Notation('D' + row1)),
      new Bishop(this, 2, Position.fromA1Notation('C' + row1)),
      new Bishop(this, 3, Position.fromA1Notation('F' + row1)),
      new Knight(this, 4, Position.fromA1Notation('B' + row1)),
      new Knight(this, 5, Position.fromA1Notation('G' + row1)),
      new Rook(this, 6, Position.fromA1Notation('A' + row1)),
      new Rook(this, 7, Position.fromA1Notation('H' + row1)),
      new Pawn(this, 8, Position.fromA1Notation('A' + row2)),
      new Pawn(this, 9, Position.fromA1Notation('B' + row2)),
      new Pawn(this, 10, Position.fromA1Notation('C' + row2)),
      new Pawn(this, 11, Position.fromA1Notation('D' + row2)),
      new Pawn(this, 12, Position.fromA1Notation('E' + row2)),
      new Pawn(this, 13, Position.fromA1Notation('F' + row2)),
      new Pawn(this, 14, Position.fromA1Notation('G' + row2)),
      new Pawn(this, 15, Position.fromA1Notation('H' + row2)),
    ];
  }
}
