import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) Queen', () => {
  let game: Game, queen: Piece | null;

  beforeEach(() => {
    game = new Game();
    queen = game.board.getPieceByA1('D1');
  });

  it('should be the correct piece', () => {
    if (!queen) throw new Error('queen is null');
    expect(queen.type).toBe('Queen');
  });
});
