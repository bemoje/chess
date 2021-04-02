import {
  Bishop,
  Board,
  Game,
  King,
  Knight,
  Move,
  Pawn,
  Player,
  Position,
  Queen,
  Rook,
  from_X_to_A,
  from_Y_to_1,
  from_A_to_X,
  from_1_to_Y,
  from_XY_to_A1,
  from_A1_to_XY,
  isValidXYPoint,
  isValidXY,
  isValidA1,
  assertValidXYPoint,
  assertValidXY,
  assertValidA1,
} from './';

describe('Exports', () => {
  it('exports all classes.', () => {
    expect(Bishop.constructor).toBe(Function);
    expect(Board.constructor).toBe(Function);
    expect(Game.constructor).toBe(Function);
    expect(King.constructor).toBe(Function);
    expect(Knight.constructor).toBe(Function);
    expect(Move.constructor).toBe(Function);
    expect(Pawn.constructor).toBe(Function);
    expect(Player.constructor).toBe(Function);
    expect(Position.constructor).toBe(Function);
    expect(Queen.constructor).toBe(Function);
    expect(Rook.constructor).toBe(Function);
  }),
    it('exports all coordinate-related functions.', () => {
      expect(from_X_to_A.constructor).toBe(Function);
      expect(from_Y_to_1.constructor).toBe(Function);
      expect(from_A_to_X.constructor).toBe(Function);
      expect(from_1_to_Y.constructor).toBe(Function);
      expect(from_XY_to_A1.constructor).toBe(Function);
      expect(from_A1_to_XY.constructor).toBe(Function);
      expect(isValidXYPoint.constructor).toBe(Function);
      expect(isValidXY.constructor).toBe(Function);
      expect(isValidA1.constructor).toBe(Function);
      expect(assertValidXYPoint.constructor).toBe(Function);
      expect(assertValidXY.constructor).toBe(Function);
      expect(assertValidA1.constructor).toBe(Function);
    });
});
