import { Game } from './Game';
import { Player } from './Player';
import { Position } from './Position';

describe('(class) Board', () => {
  let game: Game, white: Player, black: Player;

  beforeEach(() => {
    game = new Game();
    white = game.white;
    black = game.black;
  });

  describe('constructor', () => {
    it('creates an instance', () => {
      expect(white.constructor).toBe(Player);
      expect(white.game.constructor).toBe(Game);
      expect(white.color.constructor).toBe(String);
      expect(white.pieces.constructor).toBe(Array);
      expect(black.constructor).toBe(Player);
      expect(black.game.constructor).toBe(Game);
      expect(black.color.constructor).toBe(String);
      expect(black.pieces.constructor).toBe(Array);
    });

    it('fills out the board with pieces correctly for white and black respectively', () => {
      const whiteSet = new Set();
      const whitePositions = [
        ...['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
        ...['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
      ];
      for (const a1 of whitePositions) {
        const piece = game.board.getPieceByPosition(Position.fromA1(a1));
        if (piece) {
          whiteSet.add(piece.color);
        } else throw new Error('piece is null');
      }
      expect(whiteSet.size).toBe(1);

      const blackSet = new Set();
      const blackPositions = [
        ...['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
        ...['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
      ];
      for (const a1 of blackPositions) {
        const piece = game.board.getPieceByPosition(Position.fromA1(a1));
        if (piece) {
          blackSet.add(piece.color);
        } else throw new Error('piece is null');
      }
      expect(blackSet.size).toBe(1);
    });

    it('creates all 16 pieces for black and white player respectively.', () => {
      expect(white.pieces.length).toBe(16);
      expect(black.pieces.length).toBe(16);
    });
  });

  describe('(getter) moves', () => {
    it('returns an array of Move instances that describe moves of this Piece.', () => {
      const from = Position.fromA1('A2');
      const to1 = Position.fromA1('A3');
      const to2 = Position.fromA1('A4');
      const piece = game.board.getPieceByPosition(from);
      if (piece) {
        expect(white.moves.length).toBe(0);
        game.makeMove(piece, to1, true);
        expect(white.moves.length).toBe(1);
        game.makeMove(piece, to2, true);
        expect(white.moves.length).toBe(2);
        // the piece moved was white so black made no moves
        expect(black.moves.length).toBe(0);
      } else throw new Error('piece is null');
    });
  });
});
