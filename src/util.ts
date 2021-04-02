/**
 * Removes elements of a given array if they do not evaluate to true.
 */
export function arrClean(arr: Array<any>): Array<any> {
  const res = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i]) {
      res.push(arr[i]);
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
export function createAssertFunction(
  expectedToBe: string,
  validate: (arg: any) => boolean,
): (arg: any, name?: string) => void {
  const f = function (arg: any, name = 'arg') {
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
