import type { Position } from './Position';
/**
 * Converts the first value of an XY-coordinate to A1-notation.
 */
export declare function from_X_to_A(x: number): string;
/**
 * Converts the second value of an XY-coordinate to A1-notation.
 */
export declare function from_Y_to_1(y: number): string;
/**
 * Converts the first character of A1-notation to the first value of an XY-coordinate.
 */
export declare function from_A_to_X(a: string): number;
/**
 * Converts the second character of A1-notation to the second value of an XY-coordinate.
 */
export declare function from_1_to_Y(n: string): number;
/**
 * Converts a XY-coordinate-array or a Position type (extends Array) to an A1-notation string.
 */
export declare function from_XY_to_A1(pos: Array<number> | Position): string;
/**
 * Converts an A1-notation string to a XY-coordinate-array.
 */
export declare function from_A1_to_XY(a1: string): Array<number>;
/**
 * Returns whether the argument is a positive integer where 0 <= arg <= 7.
 */
export declare function isValidXYPoint(n: number): boolean;
/**
 * Returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7.
 */
export declare function isValidXY(pos: Array<number> | Position): boolean;
/**
 * Returns whether a string is valid A1-notation.
 */
export declare function isValidA1(a1: string): boolean;
/**
 * Throws a TypeError if the argument is not a valid XY-coordinate point.
 * @see isValidXYPoint
 *
 * @function assertValidXYPoint
 * @throws {TypeError}
 */
export declare const assertValidXYPoint: (arg: any, name?: string | undefined) => void;
/**
 * Throws a TypeError if the argument is not a valid XY-coordinate.
 * @see isValidXY
 *
 * @function assertValidXY
 * @throws {TypeError}
 */
export declare const assertValidXY: (arg: any, name?: string | undefined) => void;
/**
 * Throws a TypeError if the argument is not valid A1-notation.
 * @see isValidA1
 *
 * @function assertValidA1
 * @throws {TypeError}
 */
export declare const assertValidA1: (arg: any, name?: string | undefined) => void;
//# sourceMappingURL=coordinates.d.ts.map