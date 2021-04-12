import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) Pawn', () => {
  let game: Game, pawn: Piece | null;

  beforeEach(() => {
    game = new Game();
    pawn = game.board.getPieceByA1('A2');
  });

  it('should be the correct piece', () => {
    if (!pawn) throw new Error('pawn is null');
    expect(pawn.type).toBe('Pawn');
  });
});
