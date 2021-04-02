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

    const pos = Position.fromA1Notation;

    this.pieces = [
      new King(this, pos('E' + row1)),
      new Queen(this, pos('D' + row1)),
      new Bishop(this, pos('C' + row1)),
      new Bishop(this, pos('F' + row1)),
      new Knight(this, pos('B' + row1)),
      new Knight(this, pos('G' + row1)),
      new Rook(this, pos('A' + row1)),
      new Rook(this, pos('H' + row1)),
      new Pawn(this, pos('A' + row2)),
      new Pawn(this, pos('B' + row2)),
      new Pawn(this, pos('C' + row2)),
      new Pawn(this, pos('D' + row2)),
      new Pawn(this, pos('E' + row2)),
      new Pawn(this, pos('F' + row2)),
      new Pawn(this, pos('G' + row2)),
      new Pawn(this, pos('H' + row2)),
    ];
  }
}
