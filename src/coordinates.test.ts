import {
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
} from './coordinates';

describe('A1Notation', () => {
  describe('from_X_to_A', () => {
    it('converts the first value of a XY-coordinate to A1-notation', () => {
      expect(from_X_to_A(0)).toBe('A');
      expect(from_X_to_A(1)).toBe('B');
      expect(from_X_to_A(2)).toBe('C');
      expect(from_X_to_A(3)).toBe('D');
      expect(from_X_to_A(4)).toBe('E');
      expect(from_X_to_A(5)).toBe('F');
      expect(from_X_to_A(6)).toBe('G');
      expect(from_X_to_A(7)).toBe('H');
    });
  });

  describe('from_Y_to_1', () => {
    it('converts the second value of a XY-coordinate to A1-notation', () => {
      expect(from_Y_to_1(0)).toBe('1');
      expect(from_Y_to_1(1)).toBe('2');
      expect(from_Y_to_1(2)).toBe('3');
      expect(from_Y_to_1(3)).toBe('4');
      expect(from_Y_to_1(4)).toBe('5');
      expect(from_Y_to_1(5)).toBe('6');
      expect(from_Y_to_1(6)).toBe('7');
      expect(from_Y_to_1(7)).toBe('8');
    });
  });

  describe('from_A_to_X', () => {
    it('converts the first character of A1-notation to the first value of an XY-coordinate', () => {
      expect(from_A_to_X('A')).toBe(0);
      expect(from_A_to_X('B')).toBe(1);
      expect(from_A_to_X('C')).toBe(2);
      expect(from_A_to_X('D')).toBe(3);
      expect(from_A_to_X('E')).toBe(4);
      expect(from_A_to_X('F')).toBe(5);
      expect(from_A_to_X('G')).toBe(6);
      expect(from_A_to_X('H')).toBe(7);
    });
  });

  describe('from_1_to_Y', () => {
    it('converts the second value of a XY-coordinate to A1-notation', () => {
      expect(from_1_to_Y('1')).toBe(0);
      expect(from_1_to_Y('2')).toBe(1);
      expect(from_1_to_Y('3')).toBe(2);
      expect(from_1_to_Y('4')).toBe(3);
      expect(from_1_to_Y('5')).toBe(4);
      expect(from_1_to_Y('6')).toBe(5);
      expect(from_1_to_Y('7')).toBe(6);
      expect(from_1_to_Y('8')).toBe(7);
    });
  });

  describe('from_XY_to_A1', () => {
    it('converts a XY-coordinate-array or a Position type (extends Array) to an A1-notation string', () => {
      expect(from_XY_to_A1([0, 0])).toBe('A1');
      expect(from_XY_to_A1([1, 6])).toBe('B7');
      expect(from_XY_to_A1([5, 3])).toBe('F4');
      expect(from_XY_to_A1([7, 7])).toBe('H8');
    });
  });

  describe('from_A1_to_XY', () => {
    it('converts an A1-notation string to a XY-coordinate-array', () => {
      expect(from_A1_to_XY('A1')).toStrictEqual([0, 0]);
      expect(from_A1_to_XY('B7')).toStrictEqual([1, 6]);
      expect(from_A1_to_XY('F4')).toStrictEqual([5, 3]);
      expect(from_A1_to_XY('H8')).toStrictEqual([7, 7]);
    });
  });

  describe('isValidXYPoint', () => {
    it('returns whether the argument is a positive integer where 0 <= arg <= 7', () => {
      expect(isValidXYPoint(0)).toBe(true);
      expect(isValidXYPoint(3)).toBe(true);
      expect(isValidXYPoint(7)).toBe(true);
      expect(isValidXYPoint(8)).toBe(false);
      expect(isValidXYPoint(-1)).toBe(false);
    });
  });

  describe('isValidXY', () => {
    it('returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7', () => {
      expect(isValidXY([0, 0])).toBe(true);
      expect(isValidXY([2, 5])).toBe(true);
      expect(isValidXY([6, 1])).toBe(true);
      expect(isValidXY([7, 7])).toBe(true);
      expect(isValidXY([2, 7])).toBe(true);
      expect(isValidXY([7, 2])).toBe(true);
      expect(isValidXY([8, 2])).toBe(false);
      expect(isValidXY([2, 8])).toBe(false);
      expect(isValidXY([2, -1])).toBe(false);
      expect(isValidXY([-1, 2])).toBe(false);
    });
  });

  describe('isValidA1', () => {
    it('returns whether a string is valid A1-notation', () => {
      expect(isValidA1('A1')).toBe(true);
      expect(isValidA1('A7')).toBe(true);
      expect(isValidA1('A8')).toBe(true);
      expect(isValidA1('C2')).toBe(true);
      expect(isValidA1('F2')).toBe(true);
      expect(isValidA1('H2')).toBe(true);
      expect(isValidA1('H8')).toBe(true);
      expect(isValidA1('A0')).toBe(false);
      expect(isValidA1('A9')).toBe(false);
      expect(isValidA1('H9')).toBe(false);
      expect(isValidA1('H0')).toBe(false);
      expect(isValidA1('A0')).toBe(false);
    });
    it('does not accept strings longer than 2', () => {
      expect(isValidA1('A10')).toBe(false);
      expect(isValidA1('AA1')).toBe(false);
    });
  });

  describe('assertValidXYPoint', () => {
    it('Throws a TypeError if the argument is not a valid XY-coordinate point', () => {
      assertValidXYPoint(0);
      assertValidXYPoint(5);
      assertValidXYPoint(7);
      expect(() => {
        assertValidXYPoint(-1);
      }).toThrow(TypeError);
      expect(() => {
        assertValidXYPoint(8);
      }).toThrow(TypeError);
    });
  });

  describe('assertValidXY', () => {
    it('Throws a TypeError if the argument is not a valid XY-coordinate', () => {
      assertValidXY([0, 0]);
      assertValidXY([5, 3]);
      assertValidXY([7, 7]);
      expect(() => {
        assertValidXY([-1, 8]);
      }).toThrow(TypeError);
      expect(() => {
        assertValidXY([8, -1]);
      }).toThrow(TypeError);
    });
  });

  describe('assertValidA1', () => {
    it('Throws a TypeError if the argument is not valid A1-notation', () => {
      assertValidA1('A1');
      assertValidA1('D4');
      assertValidA1('H8');
      expect(() => {
        assertValidA1('A0');
      }).toThrow(TypeError);
      expect(() => {
        assertValidA1('I5');
      }).toThrow(TypeError);
    });
  });
});
