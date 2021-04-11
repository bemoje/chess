import { Position } from './Position';
import {
  arrClean,
  numericDifference,
  createAssertFunction,
  isEven,
} from './util';

describe('util', () => {
  describe('arrClean', () => {
    it('Removes elements of a given array if they do not evaluate to true.', () => {
      const pos = new Position(0, 0);
      expect(arrClean([null, pos, null])).toStrictEqual([pos]);
    });
  });

  describe('numericDifference', () => {
    it('Returns the numeric difference between to numbers.', () => {
      expect(numericDifference(0, 2)).toBe(2);
      expect(numericDifference(2, 0)).toBe(2);
      expect(numericDifference(0, 0)).toBe(0);
      expect(numericDifference(1, 1)).toBe(0);
    });
  });

  describe('createAssertFunction', () => {
    it('Returns an assertion function that expects [string] "expectedToBe" evaluated by [Function] "validate"', () => {
      // create assert function
      const assertString = createAssertFunction(
        'a string',
        (arg) => typeof arg === 'string',
      );
      // test variables
      const myString = 'someString';
      const myInteger = 2;
      // string expected not to throw
      assertString(myString, 'myString');
      // myInteger expected to throw
      expect(() => {
        assertString(myInteger, 'myInteger');
      }).toThrow(TypeError);
    });
  });

  describe('isEven', () => {
    it('Returns whether a number is an even number.', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-1)).toBe(false);
      expect(isEven(0)).toBe(true);
      expect(isEven(1)).toBe(false);
      expect(isEven(2)).toBe(true);
      expect(isEven(15)).toBe(false);
      expect(isEven(16)).toBe(true);
    });
  });
});
