import type { Position } from './Position';

/**
 * Removes elements of a given array if they do not evaluate to true.
 *
 * @param arr - The array containing null values or Position instances to clean.
 */
export function arrClean(arr: Array<Position | null>): Array<Position> {
  const res = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    const pos = arr[i];
    if (pos) {
      res.push(pos);
    }
  }
  return res;
}

/**
 * Returns the numeric difference between to numbers.
 *
 * @param n1 - A number
 * @param n2 - A number
 */
export function numericDifference(n1: number, n2: number): number {
  const dist = n1 - n2;
  return dist < 0 ? dist * -1 : dist;
}

/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 *
 * @param expectedToBe - A string that describes the assertion.
 * @param validate - A callback function that validates an argument.
 */
export function createAssertFunction<T>(
  expectedToBe: string,
  validate: (arg: T) => boolean,
): (arg: T, name?: string) => void {
  const f = function (arg: T, name = 'arg') {
    if (!validate(arg)) {
      throw new TypeError(
        `Expected ${name} to be ${expectedToBe}. ${name}: ${arg}`,
      );
    }
  };
  Object.defineProperty(f, 'name', {
    value: validate.name.replace(/^is/, 'assert'),
  });
  return f;
}

/**
 * Returns whether a number is an even number.
 *
 * @param n - An integer
 */
export function isEven(n: number): boolean {
  return n % 2 == 0;
}

/**
 * Converts an Uint8Array to an array of integers between 0 and 255.
 *
 * @param uInt8 - An Uint8Array instance.
 */
export function uInt8ToBytes(uInt8: Uint8Array): Array<number> {
  const l = uInt8.length;
  const res = new Array(l);
  for (let i = 0; i < l; i++) {
    res[i] = uInt8[i];
  }
  return res;
}

/**
 * Converts an array of bytes to a Uint8Array.
 *
 * @param arr - An array of integers between 0 and 255.
 */
export function bytesToUint8Array(arr: Array<number>): Uint8Array {
  const l = arr.length;
  const res = new Uint8Array(l);
  for (let i = 0; i < l; i++) {
    res[i] = arr[i];
  }
  return res;
}
