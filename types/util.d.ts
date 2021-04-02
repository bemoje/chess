/**
 * Removes elements of a given array if they do not evaluate to true.
 */
export declare function arrClean(arr: Array<any>): Array<any>;
/**
 * Returns the numeric difference between to numbers.
 */
export declare function numericDifference(n1: number, n2: number): number;
/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 */
export declare function createAssertFunction(expectedToBe: string, validate: (arg: any) => boolean): (arg: any, name?: string) => void;
//# sourceMappingURL=util.d.ts.map