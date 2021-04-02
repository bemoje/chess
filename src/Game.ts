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

  get players(): Array<Player> {
    return [this.black, this.white];
  }

  get pieces(): Array<Piece> {
    return [...this.black.pieces, ...this.white.pieces];
  }

  makeMove(piece: Piece, to: Position, _skipValidation?: boolean): Move {
    return new Move(piece, to, _skipValidation);
  }

  clone(): Game {
    const game = new Game();
    const moves = this.moves;
    const l = moves.length;
    for (let i = 0; i < l; i++) {
      game.makeMove(moves[i].piece, moves[i].to, true);
    }
    return game;
  }
}
