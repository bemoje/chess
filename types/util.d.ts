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
//# sourceMappingURL=util.d.ts.map