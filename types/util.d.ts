import type { Position } from './Position';
/**
 * Removes elements of a given array if they do not evaluate to true.
 */
export declare function arrClean(arr: Array<Position | null>): Array<Position>;
/**
 * Returns the numeric difference between to numbers.
 */
export declare function numericDifference(n1: number, n2: number): number;
/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 */
export declare function createAssertFunction<T>(expectedToBe: string, validate: (arg: T) => boolean): (arg: T, name?: string) => void;
/**
 * Returns whether a number is an even number.
 */
export declare function isEven(n: number): boolean;
/**
 * Converts an Uint8Array to an array of integers between 0 and 255.
 *
 * @param uInt8 - An Uint8Array instance.
 */
export declare function uInt8ToBytes(uInt8: Uint8Array): Array<number>;
/**
 * Converts an array of bytes to a Uint8Array.
 *
 * @param arr - An array of integers between 0 and 255.
 */
export declare function bytesToUint8Array(arr: Array<number>): Uint8Array;
//# sourceMappingURL=util.d.ts.map