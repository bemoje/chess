import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) Bishop', () => {
  let game: Game, bishop: Piece | null;

  beforeEach(() => {
    game = new Game();
    bishop = game.board.getPieceByA1('C1');
  });

  it('should be the correct piece', () => {
    if (!bishop) throw new Error('bishop is null');
    expect(bishop.type).toBe('Bishop');
  });
});
