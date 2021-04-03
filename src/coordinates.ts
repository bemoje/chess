import { createAssertFunction } from './util';

const A_CHAR_CODE = 'A'.charCodeAt(0);

/**
 * Converts the first value of an XY-coordinate to A1-notation.
 */
export function from_X_to_A(x: number): string {
  return String.fromCharCode(x + A_CHAR_CODE);
}

/**
 * Converts the second value of an XY-coordinate to A1-notation.
 */
export function from_Y_to_1(y: number): string {
  return (y + 1).toString();
}

/**
 * Converts the first character of A1-notation to the first value of an XY-coordinate.
 */
export function from_A_to_X(a: string): number {
  return a.toUpperCase().charCodeAt(0) - A_CHAR_CODE;
}

/**
 * Converts the second character of A1-notation to the second value of an XY-coordinate.
 */
export function from_1_to_Y(n: string): number {
  return Number(n.charAt(0)) - 1;
}

/**
 * Converts a XY-coordinate-array to an A1-notation string.
 */
export function from_XY_to_A1(pos: Array<number>): string {
  return from_X_to_A(pos[0]) + from_Y_to_1(pos[1]);
}

/**
 * Converts an A1-notation string to a XY-coordinate-array.
 */
export function from_A1_to_XY(a1: string): Array<number> {
  return [from_A_to_X(a1.charAt(0)), from_1_to_Y(a1.charAt(1))];
}

/**
 * Returns whether the argument is a positive integer where 0 <= arg <= 7.
 */
export function isValidXYPoint(n: number): boolean {
  return n >= 0 && n <= 7;
}

/**
 * Returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7.
 */
export function isValidXY(pos: Array<number>): boolean {
  return isValidXYPoint(pos[0]) && isValidXYPoint(pos[1]);
}

/**
 * Returns whether a string is valid A1-notation.
 */
export function isValidA1(a1: string): boolean {
  return a1.length === 2 && isValidXY(from_A1_to_XY(a1));
}

/**
 * Throws a TypeError if the argument is not a valid XY-coordinate point.
 * @see isValidXYPoint
 *
 * @function assertValidXYPoint
 * @throws {TypeError}
 */
export const assertValidXYPoint = createAssertFunction(
  'a positive integer between 0 and 7',
  isValidXYPoint,
);

/**
 * Throws a TypeError if the argument is not a valid XY-coordinate.
 * @see isValidXY
 *
 * @function assertValidXY
 * @throws {TypeError}
 */
export const assertValidXY = createAssertFunction(
  'an array containing two positive integers between 0 and 7',
  isValidXY,
);

/**
 * Throws a TypeError if the argument is not valid A1-notation.
 * @see isValidA1
 *
 * @function assertValidA1
 * @throws {TypeError}
 */
export const assertValidA1 = createAssertFunction(
  'a valid A1-notation string',
  isValidA1,
);
