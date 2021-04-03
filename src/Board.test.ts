import { Board } from './Board';
import { Game } from './Game';
import { Move } from './Move';
import { Position } from './Position';

describe('(class) Board', () => {
  let game: Game, board: Board;

  beforeEach(() => {
    game = new Game();
    board = game.board;
  });

  it('constructor', () => {
    expect(board.constructor).toBe(Board);
    expect(board.grid.length).toBe(8);
    for (const col of board.grid) {
      expect(col.length).toBe(8);
    }
  });

  describe('(method) getPieceByXY', () => {
    it('Returns the piece at the given XY-coordinates or null if no piece is found there.', () => {
      let piece, pos, arr;

      piece = board.getPieceByXY(0, 0);
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([0, 0]);

      piece = board.getPieceByXY(1, 1);
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([1, 1]);

      piece = board.getPieceByXY(2, 2);
      expect(piece).toBe(null);
    });
  });

  describe('(method) getPieceByPosition', () => {
    it('Returns the piece at the given Position or null if no piece is found there.', () => {
      let piece, pos, arr;

      piece = board.getPieceByPosition(new Position(0, 0));
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([0, 0]);

      piece = board.getPieceByPosition(new Position(1, 1));
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([1, 1]);

      piece = board.getPieceByPosition(new Position(2, 2));
      expect(piece).toBe(null);
    });
  });

  describe('(method) getPieceByA1', () => {
    it('Returns the piece at the given A1-notation-coordinates or null if no piece is found there.', () => {
      let piece, pos, arr;

      piece = board.getPieceByA1('A1');
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([0, 0]);

      piece = board.getPieceByA1('B2');
      pos = piece ? piece.position : null;
      arr = pos ? pos.toArray() : null;
      expect(arr).toStrictEqual([1, 1]);

      piece = board.getPieceByA1('C3');
      expect(piece).toBe(null);
    });
  });

  describe('(method) removePiece', () => {
    it('Removes a piece from the board.', () => {
      const pos = new Position(0, 0);
      let piece;
      piece = board.getPieceByPosition(pos);
      board.removePiece(null);
      expect(piece).not.toBe(null);
      board.removePiece(piece);
      piece = board.getPieceByPosition(pos);
      expect(piece).toBe(null);
    });
  });

  describe('(method) registerMove', () => {
    it('Updates the board instance based on the information contained within a provided Move instance.', () => {
      const from = new Position(0, 0);
      const to = new Position(2, 2);
      const piece = board.getPieceByPosition(from);
      if (piece) {
        board.registerMove(new Move(piece, to));
      }
      expect(board.getPieceByPosition(from)).toBe(null);
      expect(board.getPieceByPosition(to)).toBe(piece);
    });
  });
});
