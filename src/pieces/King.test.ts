import { Game } from '../Game';
import type { Piece } from './AbstractPiece';

describe('(class) King', () => {
  let game: Game, king: Piece | null;

  beforeEach(() => {
    game = new Game();
    king = game.board.getPieceByA1('E1');
  });

  it('should be the correct piece', () => {
    if (!king) throw new Error('king is null');
    expect(king.type).toBe('King');
  });
});
