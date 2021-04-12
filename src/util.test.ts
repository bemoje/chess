import { Position } from './Position';
import {
  arrClean,
  numericDifference,
  createAssertFunction,
  isEven,
  uInt8ToBytes,
  bytesToUint8Array,
} from './util';

describe('util', () => {
  describe('arrClean', () => {
    it('removes elements of a given array if they do not evaluate to true', () => {
      const pos = new Position(0, 0);
      expect(arrClean([null, pos, null])).toStrictEqual([pos]);
    });
  });

  describe('numericDifference', () => {
    it('returns the numeric difference between to numbers', () => {
      expect(numericDifference(0, 2)).toBe(2);
      expect(numericDifference(2, 0)).toBe(2);
      expect(numericDifference(0, 0)).toBe(0);
      expect(numericDifference(1, 1)).toBe(0);
    });
  });

  describe('createAssertFunction', () => {
    it('returns an assertion function that expects [string] "expectedToBe" evaluated by [Function] "validate"', () => {
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
    it('returns whether a number is an even number', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-1)).toBe(false);
      expect(isEven(0)).toBe(true);
      expect(isEven(1)).toBe(false);
      expect(isEven(2)).toBe(true);
      expect(isEven(15)).toBe(false);
      expect(isEven(16)).toBe(true);
    });
  });

  describe('uInt8ToBytes', () => {
    it('converts an Uint8Array to an array of integers between 0 and 255', () => {
      uInt8ToBytes;
      //TODO
    });
  });

  describe('bytesToUint8Array', () => {
    it('converts an array of bytes to a Uint8Array', () => {
      bytesToUint8Array;
      //TODO
    });
  });
});
