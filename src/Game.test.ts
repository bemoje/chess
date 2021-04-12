import { Game } from './Game';
import { Board } from './Board';
import { Player } from './Player';
import { Position } from './Position';

describe('(class) Board', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('constructor', () => {
    expect(game.constructor).toBe(Game);
    expect(game.board.constructor).toBe(Board);
    expect(game.white.constructor).toBe(Player);
    expect(game.black.constructor).toBe(Player);
    expect(game.moves.constructor).toBe(Array);
  });

  describe('(method) forEachPiece', () => {
    it('iterates all 32 pieces on the board.', () => {
      let c = 0;
      game.forEachActivePiece(() => {
        c++;
      });
      expect(c).toBe(32);
    });

    it('is able to stop iteration.', () => {
      let i = 0;
      game.forEachActivePiece(() => {
        i++;
        if (i === 5) return true;
        else return;
      });
      expect(i).toBe(5);
    });

    it('iterates unique Piece instances.', () => {
      const set = new Set();
      game.forEachActivePiece((piece) => {
        set.add(piece);
      });
      expect(set.size).toBe(32);
    });
  });

  describe('(method) move', () => {
    it("allows for skipping validation of the move's legality according to the rules of chess.", () => {
      const piece = game.board.getPieceByA1('A2');
      const to = Position.fromA1('A3');
      if (piece) {
        game.move(piece, to, true);
        expect(game.board.getPieceByA1('A3')).toBe(piece);
      } else throw new Error('piece is null');
    });

    it('swaps pieces when making a castling move', () => {
      const king = game.board.getPieceByA1('E1');
      const targetPos = Position.fromA1('A1');
      const rook = game.board.getPieceByA1('A1');
      if (king && rook) {
        game.move(king, targetPos);
        expect(game.board.getPieceByA1('E1')).toBe(rook);
        expect(game.board.getPieceByA1('A1')).toBe(king);
      } else throw new Error('king or rook is null');
    });

    it('throws on illegal/invalid moves if skipValidation is not ´true´.', () => {
      // TODO
    });
  });

  describe('(method) clone', () => {
    it('returns a deep clone of the game instance.', () => {
      // TODO
    });
  });

  describe('(method) toJSON', () => {
    it('returns a deep clone of the game instance.', () => {
      // TODO
    });
  });
});
