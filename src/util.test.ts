import { arrClean, numericDifference, createAssertFunction } from './util';

describe('util', () => {
  describe('arrClean', () => {
    it('Removes elements of a given array if they do not evaluate to true.', () => {
      expect(arrClean([null, undefined, 1, 'a', 0, ''])).toStrictEqual([
        1,
        'a',
      ]);
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
      let threw, msg;
      try {
        assertString(myInteger, 'myInteger');
        threw = false;
      } catch (e) {
        threw = true;
        msg = e.message;
      }
      expect(threw).toBe(true);
      expect(msg).toBe('Expected myInteger to be a string. myInteger: 2');
    });
  });
});
