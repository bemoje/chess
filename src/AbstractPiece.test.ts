import { Game } from './Game';
import { Position } from './Position';
import { Player } from './Player';
import { Pawn } from './Pawn';
import type { Piece } from './AbstractPiece';

describe('(class) AbstractPiece', () => {
  let game: Game, pawn: Piece | null;

  beforeEach(() => {
    game = new Game();
    pawn = game.board.getPieceByA1('A2');
  });

  it('constructor', () => {
    if (pawn) {
      expect(pawn.constructor).toBe(Pawn);
      expect(pawn.player.constructor).toBe(Player);
      expect(pawn.index.constructor).toBe(Number);
      if (pawn.position) {
        expect(pawn.position.constructor).toBe(Position);
      } else throw new Error('pawn.position is null');
      expect(pawn.moveCount.constructor).toBe(Number);
    } else throw new Error('pawn is null');
  });

  it('(getter) game', () => {
    if (pawn) {
      expect(pawn.game).toStrictEqual(game);
    } else throw new Error('pawn is null');
  });

  it('(getter) type', () => {
    if (pawn) {
      expect(pawn.type).toStrictEqual('Pawn');
    } else throw new Error('pawn is null');
  });

  it('(getter) hasMoved', () => {
    if (pawn) {
      expect(pawn.hasMoved).toStrictEqual(false);
      game.makeMove(pawn, new Position(0, 2), true);
      expect(pawn.hasMoved).toStrictEqual(true);
    } else throw new Error('pawn is null');
  });

  it('(getter) color', () => {
    if (pawn) {
      expect(pawn.color).toStrictEqual('white');
    } else throw new Error('pawn is null');
  });

  it('(getter) isTaken', () => {
    if (pawn) {
      expect(pawn.isTaken).toStrictEqual(false);
      game.makeMove(pawn, new Position(0, 2), true);
      const enemyPawn = game.board.getPieceByA1('A7');
      if (enemyPawn) {
        game.makeMove(enemyPawn, new Position(0, 2), true);
      } else throw new Error('enemyPawn is null');
      expect(pawn.isTaken).toStrictEqual(true);
    } else throw new Error('pawn is null');
  });

  it('(getter) moves', () => {
    if (pawn) {
      expect(pawn.moves.length).toStrictEqual(0);
      game.makeMove(pawn, new Position(0, 2), true);
      expect(pawn.moves.length).toStrictEqual(1);
    } else throw new Error('pawn is null');
  });

  it('(method) registerMove', () => {
    if (pawn) {
      expect(pawn.moveCount).toStrictEqual(0);
      const initPos = pawn.position;
      if (initPos) {
        expect(initPos.compare(new Position(0, 1))).toStrictEqual(true);
      } else throw new Error('initPos is null');
      game.makeMove(pawn, new Position(0, 2), true);
      const targetPos = pawn.position;
      if (targetPos) {
        expect(targetPos.compare(new Position(0, 2))).toStrictEqual(true);
      } else throw new Error('targetPos is null');
      expect(pawn.moveCount).toStrictEqual(1);
    } else throw new Error('pawn is null');
  });

  it('(method) remove', () => {
    if (pawn) {
      expect(pawn.position).not.toBe(null);
      pawn.remove();
      expect(pawn.position).toBe(null);
    } else throw new Error('pawn is null');
  });
});
