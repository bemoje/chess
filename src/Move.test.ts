import { Game } from './Game';
import { Move } from './Move';
import { Position } from './Position';
import type { Board } from './Board';

describe('(class) Move', () => {
  let game: Game, board: Board;

  beforeEach(() => {
    game = new Game();
    board = game.board;
  });

  describe('constructor', () => {
    it('Creates an instance', () => {
      const from = new Position(0, 1);
      const to = new Position(0, 2);
      const piece = board.getPieceByPosition(from);
      if (piece) {
        expect(new Move(piece, to).constructor).toBe(Move);
      } else throw new Error('piece is null');
    });

    it('Removes/takes the Piece from the game board if another piece is already at the target position.', () => {
      const from = new Position(0, 1);
      const to = new Position(0, 6);
      const piece = board.getPieceByPosition(from);
      const targetPiece = board.getPieceByPosition(to);
      if (piece && targetPiece) {
        game.makeMove(piece, to, true);
        expect(targetPiece.position).toBe(null);
      } else throw new Error('piece or targetPiece is null');
    });

    it('Throws if trying to move a piece that is no longer on the board.', () => {
      const from = new Position(0, 1);
      const to = new Position(0, 2);
      const piece = board.getPieceByPosition(from);
      if (piece) {
        piece.remove();
        expect(piece.position).toBe(null);
        expect(() => {
          new Move(piece, to);
        }).toThrow(Error);
      } else throw new Error('piece is null');
    });
  });
});
