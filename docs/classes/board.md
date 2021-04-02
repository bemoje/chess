[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Board

# Class: Board

## Hierarchy

* *Array*

  ↳ **Board**

## Table of contents

### Constructors

- [constructor](board.md#constructor)

### Properties

- [game](board.md#game)
- [length](board.md#length)
- [[Symbol.species]](board.md#[symbol.species])

### Methods

- [[Symbol.iterator]](board.md#[symbol.iterator])
- [[Symbol.unscopables]](board.md#[symbol.unscopables])
- [clone](board.md#clone)
- [concat](board.md#concat)
- [copyWithin](board.md#copywithin)
- [entries](board.md#entries)
- [every](board.md#every)
- [fill](board.md#fill)
- [filter](board.md#filter)
- [find](board.md#find)
- [findIndex](board.md#findindex)
- [forEach](board.md#foreach)
- [getPieceByA1](board.md#getpiecebya1)
- [getPieceByPosition](board.md#getpiecebyposition)
- [getPieceByXY](board.md#getpiecebyxy)
- [indexOf](board.md#indexof)
- [join](board.md#join)
- [keys](board.md#keys)
- [lastIndexOf](board.md#lastindexof)
- [map](board.md#map)
- [pop](board.md#pop)
- [push](board.md#push)
- [reduce](board.md#reduce)
- [reduceRight](board.md#reduceright)
- [registerMove](board.md#registermove)
- [removePiece](board.md#removepiece)
- [reverse](board.md#reverse)
- [shift](board.md#shift)
- [slice](board.md#slice)
- [some](board.md#some)
- [sort](board.md#sort)
- [splice](board.md#splice)
- [toLocaleString](board.md#tolocalestring)
- [toString](board.md#tostring)
- [unshift](board.md#unshift)
- [values](board.md#values)
- [from](board.md#from)
- [isArray](board.md#isarray)
- [of](board.md#of)

## Constructors

### constructor

\+ **new Board**(`game`: [*Game*](game.md)): [*Board*](board.md)

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*Game*](game.md) |

**Returns:** [*Board*](board.md)

Overrides: void

Defined in: [src/Board.ts:8](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L8)

## Properties

### game

• **game**: [*Game*](game.md)

Defined in: [src/Board.ts:8](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L8)

___

### length

• **length**: *number*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1224

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: ArrayConstructor

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:309

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<any\>

Iterator

**Returns:** *IterableIterator*<any\>

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

Name | Type |
:------ | :------ |
`copyWithin` | *boolean* |
`entries` | *boolean* |
`fill` | *boolean* |
`find` | *boolean* |
`findIndex` | *boolean* |
`keys` | *boolean* |
`values` | *boolean* |

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

___

### clone

▸ **clone**(`game?`: [*Game*](game.md)): [*Board*](board.md)

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*Game*](game.md) |

**Returns:** [*Board*](board.md)

Defined in: [src/Board.ts:48](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L48)

___

### concat

▸ **concat**(...`items`: *ConcatArray*<any\>[]): *any*[]

Combines two or more arrays.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...items` | *ConcatArray*<any\>[] | Additional items to add to the end of array1.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1246

▸ **concat**(...`items`: *any*[]): *any*[]

Combines two or more arrays.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...items` | *any*[] | Additional items to add to the end of array1.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1251

___

### copyWithin

▸ **copyWithin**(`target`: *number*, `start`: *number*, `end?`: *number*): [*Board*](board.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`target` | *number* | If target is negative, it is treated as length+target where length is the length of the array.   |
`start` | *number* | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.   |
`end?` | *number* | If not specified, length of the this object is used as its default value.    |

**Returns:** [*Board*](board.md)

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): *IterableIterator*<[*number*, *any*]\>

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator*<[*number*, *any*]\>

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<S\>(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S, `thisArg?`: *any*): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** this is S[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1319

▸ **every**(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether all the members of an array satisfy the specified test.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown* | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1328

___

### fill

▸ **fill**(`value`: *any*, `start?`: *number*, `end?`: *number*): [*Board*](board.md)

Returns the this object after filling the section identified by start and end with value

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | *any* | value to fill array section with   |
`start?` | *number* | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.   |
`end?` | *number* | index to stop filling the array at. If end is negative, it is treated as length+end.    |

**Returns:** [*Board*](board.md)

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<S\>(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S, `thisArg?`: *any*): S[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** S[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1355

▸ **filter**(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown*, `thisArg?`: *any*): *any*[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown* | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1361

___

### find

▸ **find**<S\>(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => value is S, `thisArg?`: *any*): *undefined* \| S

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.   |
`thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.    |

**Returns:** *undefined* \| S

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown*, `thisArg?`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown* |
`thisArg?` | *any* |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown*, `thisArg?`: *any*): *number*

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown* | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.   |
`thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.    |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### forEach

▸ **forEach**(`callbackfn`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void*, `thisArg?`: *any*): *void*

Performs the specified action for each element in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void* | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1343

___

### getPieceByA1

▸ **getPieceByA1**(`a1`: *string*): *null* \| *Piece*

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** *null* \| *Piece*

Defined in: [src/Board.ts:39](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L39)

___

### getPieceByPosition

▸ **getPieceByPosition**(`position`: [*Position*](position.md)): *null* \| *Piece*

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *null* \| *Piece*

Defined in: [src/Board.ts:44](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L44)

___

### getPieceByXY

▸ **getPieceByXY**(`x`: *number*, `y`: *number*): *null* \| *Piece*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** *null* \| *Piece*

Defined in: [src/Board.ts:35](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L35)

___

### indexOf

▸ **indexOf**(`searchElement`: *any*, `fromIndex?`: *number*): *number*

Returns the index of the first occurrence of a value in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchElement` | *any* | The value to locate in the array.   |
`fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.    |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1304

___

### join

▸ **join**(`separator?`: *string*): *string*

Adds all the elements of an array separated by the specified separator string.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`separator?` | *string* | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.    |

**Returns:** *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1256

___

### keys

▸ **keys**(): *IterableIterator*<number\>

Returns an iterable of keys in the array

**Returns:** *IterableIterator*<number\>

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: *any*, `fromIndex?`: *number*): *number*

Returns the index of the last occurrence of a specified value in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchElement` | *any* | The value to locate in the array.   |
`fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.    |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1310

___

### map

▸ **map**<U\>(`callbackfn`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => U, `thisArg?`: *any*): U[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => U | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** U[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1349

___

### pop

▸ **pop**(): *any*

Removes the last element from an array and returns it.

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1236

___

### push

▸ **push**(...`items`: *any*[]): *number*

Appends new elements to an array, and returns the new length of the array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...items` | *any*[] | New elements of the Array.    |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1241

___

### reduce

▸ **reduce**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*): *any*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.   |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1367

▸ **reduce**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*, `initialValue`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* |
`initialValue` | *any* |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1368

▸ **reduce**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.   |
`initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.    |

**Returns:** U

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1374

___

### reduceRight

▸ **reduceRight**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*): *any*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.   |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **reduceRight**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*, `initialValue`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* |
`initialValue` | *any* |

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1381

▸ **reduceRight**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.   |
`initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.    |

**Returns:** U

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1387

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Defined in: [src/Board.ts:22](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L22)

___

### removePiece

▸ **removePiece**(`piece`: *Piece*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *Piece* |

**Returns:** *void*

Defined in: [src/Board.ts:30](https://github.com/bemoje/chess/blob/e03f9b9/src/Board.ts#L30)

___

### reverse

▸ **reverse**(): *any*[]

Reverses the elements in an Array.

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1260

___

### shift

▸ **shift**(): *any*

Removes the first element from an array and returns it.

**Returns:** *any*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1264

___

### slice

▸ **slice**(`start?`: *number*, `end?`: *number*): *any*[]

Returns a section of an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`start?` | *number* | The beginning of the specified portion of the array.   |
`end?` | *number* | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1270

___

### some

▸ **some**(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether the specified callback function returns true for any element of an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown* | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1337

___

### sort

▸ **sort**(`compareFn?`: (`a`: *any*, `b`: *any*) => *number*): [*Board*](board.md)

Sorts an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`compareFn?` | (`a`: *any*, `b`: *any*) => *number* | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```    |

**Returns:** [*Board*](board.md)

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1280

___

### splice

▸ **splice**(`start`: *number*, `deleteCount?`: *number*): *any*[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`start` | *number* | The zero-based location in the array from which to start removing elements.   |
`deleteCount?` | *number* | The number of elements to remove.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1286

▸ **splice**(`start`: *number*, `deleteCount`: *number*, ...`items`: *any*[]): *any*[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`start` | *number* | The zero-based location in the array from which to start removing elements.   |
`deleteCount` | *number* | The number of elements to remove.   |
`...items` | *any*[] | Elements to insert into the array in place of the deleted elements.    |

**Returns:** *any*[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1293

___

### toLocaleString

▸ **toLocaleString**(): *string*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1232

___

### toString

▸ **toString**(): *string*

Returns a string representation of an array.

**Returns:** *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1228

___

### unshift

▸ **unshift**(...`items`: *any*[]): *number*

Inserts new elements at the start of an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...items` | *any*[] | Elements to insert at the start of the Array.    |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1298

___

### values

▸ **values**(): *IterableIterator*<any\>

Returns an iterable of values in the array

**Returns:** *IterableIterator*<any\>

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static`**from**<T\>(`arrayLike`: *ArrayLike*<T\>): T[]

Creates an array from an array-like object.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arrayLike` | *ArrayLike*<T\> | An array-like object to convert to an array.    |

**Returns:** T[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static`**from**<T, U\>(`arrayLike`: *ArrayLike*<T\>, `mapfn`: (`v`: T, `k`: *number*) => U, `thisArg?`: *any*): U[]

Creates an array from an iterable object.

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arrayLike` | *ArrayLike*<T\> | An array-like object to convert to an array.   |
`mapfn` | (`v`: T, `k`: *number*) => U | A mapping function to call on every element of the array.   |
`thisArg?` | *any* | Value of 'this' used to invoke the mapfn.    |

**Returns:** U[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static`**from**<T\>(`iterable`: *Iterable*<T\> \| *ArrayLike*<T\>): T[]

Creates an array from an iterable object.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`iterable` | *Iterable*<T\> \| *ArrayLike*<T\> | An iterable object to convert to an array.    |

**Returns:** T[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static`**from**<T, U\>(`iterable`: *Iterable*<T\> \| *ArrayLike*<T\>, `mapfn`: (`v`: T, `k`: *number*) => U, `thisArg?`: *any*): U[]

Creates an array from an iterable object.

#### Type parameters:

Name |
:------ |
`T` |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`iterable` | *Iterable*<T\> \| *ArrayLike*<T\> | An iterable object to convert to an array.   |
`mapfn` | (`v`: T, `k`: *number*) => U | A mapping function to call on every element of the array.   |
`thisArg?` | *any* | Value of 'this' used to invoke the mapfn.    |

**Returns:** U[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

___

### isArray

▸ `Static`**isArray**(`arg`: *any*): arg is any[]

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *any* |

**Returns:** arg is any[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1399

___

### of

▸ `Static`**of**<T\>(...`items`: T[]): T[]

Returns a new array from a set of elements.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...items` | T[] | A set of elements to include in the new array object.    |

**Returns:** T[]

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:86
