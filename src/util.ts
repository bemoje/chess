import type { Position } from './Position';

/**
 * Removes elements of a given array if they do not evaluate to true.
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
 */
export function numericDifference(n1: number, n2: number): number {
  const dist = n1 - n2;
  return dist < 0 ? dist * -1 : dist;
}

/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
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
 */
export function isEven(n: number): boolean {
  return n % 2 == 0;
}
