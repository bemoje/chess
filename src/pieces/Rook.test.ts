import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) Rook', () => {
  let game: Game, rook: Piece | null;

  beforeEach(() => {
    game = new Game();
    rook = game.board.getPieceByA1('A1');
  });

  it('should be the correct piece', () => {
    if (!rook) throw new Error('rook is null');
    expect(rook.type).toBe('Rook');
  });
});
