import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) Knight', () => {
  let game: Game, knight: Piece | null;

  beforeEach(() => {
    game = new Game();
    knight = game.board.getPieceByA1('B1');
  });

  it('should be the correct piece', () => {
    if (!knight) throw new Error('knight is null');
    expect(knight.type).toBe('Knight');
  });
});
