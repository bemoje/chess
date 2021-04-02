[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Position

# Class: Position

## Hierarchy

* *Array*

  ↳ **Position**

## Table of contents

### Constructors

- [constructor](position.md#constructor)

### Properties

- [length](position.md#length)
- [[Symbol.species]](position.md#[symbol.species])

### Accessors

- [A1](position.md#a1)
- [x](position.md#x)
- [y](position.md#y)

### Methods

- [[Symbol.iterator]](position.md#[symbol.iterator])
- [[Symbol.unscopables]](position.md#[symbol.unscopables])
- [clone](position.md#clone)
- [compare](position.md#compare)
- [concat](position.md#concat)
- [copyWithin](position.md#copywithin)
- [entries](position.md#entries)
- [every](position.md#every)
- [fill](position.md#fill)
- [filter](position.md#filter)
- [find](position.md#find)
- [findIndex](position.md#findindex)
- [forEach](position.md#foreach)
- [getAllDiagonal](position.md#getalldiagonal)
- [getAllDiagonalRecursive](position.md#getalldiagonalrecursive)
- [getAllKnightMovePositions](position.md#getallknightmovepositions)
- [getAllStraight](position.md#getallstraight)
- [getAllStraightAndDiagonal](position.md#getallstraightanddiagonal)
- [getAllStraightAndDiagonalRecursive](position.md#getallstraightanddiagonalrecursive)
- [getAllStraightRecursive](position.md#getallstraightrecursive)
- [getDown](position.md#getdown)
- [getDownDown](position.md#getdowndown)
- [getDownDownLeft](position.md#getdowndownleft)
- [getDownDownRight](position.md#getdowndownright)
- [getDownLeft](position.md#getdownleft)
- [getDownLeftRecursive](position.md#getdownleftrecursive)
- [getDownRecursive](position.md#getdownrecursive)
- [getDownRight](position.md#getdownright)
- [getDownRightRecursive](position.md#getdownrightrecursive)
- [getLeft](position.md#getleft)
- [getLeftLeftDown](position.md#getleftleftdown)
- [getLeftLeftUp](position.md#getleftleftup)
- [getLeftRecursive](position.md#getleftrecursive)
- [getModulation](position.md#getmodulation)
- [getRecursive](position.md#getrecursive)
- [getRight](position.md#getright)
- [getRightRecursive](position.md#getrightrecursive)
- [getRightRightDown](position.md#getrightrightdown)
- [getRightRightUp](position.md#getrightrightup)
- [getUp](position.md#getup)
- [getUpLeft](position.md#getupleft)
- [getUpLeftRecursive](position.md#getupleftrecursive)
- [getUpRecursive](position.md#getuprecursive)
- [getUpRight](position.md#getupright)
- [getUpRightRecursive](position.md#getuprightrecursive)
- [getUpUp](position.md#getupup)
- [getUpUpLeft](position.md#getupupleft)
- [getUpUpRight](position.md#getupupright)
- [indexOf](position.md#indexof)
- [join](position.md#join)
- [keys](position.md#keys)
- [lastIndexOf](position.md#lastindexof)
- [map](position.md#map)
- [pop](position.md#pop)
- [push](position.md#push)
- [reduce](position.md#reduce)
- [reduceRight](position.md#reduceright)
- [reverse](position.md#reverse)
- [shift](position.md#shift)
- [slice](position.md#slice)
- [some](position.md#some)
- [sort](position.md#sort)
- [splice](position.md#splice)
- [toArray](position.md#toarray)
- [toLocaleString](position.md#tolocalestring)
- [toString](position.md#tostring)
- [unshift](position.md#unshift)
- [values](position.md#values)
- [from](position.md#from)
- [fromA1Notation](position.md#froma1notation)
- [isArray](position.md#isarray)
- [of](position.md#of)

## Constructors

### constructor

\+ **new Position**(`x`: *number*, `y`: *number*, `_skipValidation?`: *boolean*): [*Position*](position.md)

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`x` | *number* | - | a positive integer between 0 and 7 both inclusive.   |
`y` | *number* | - | a positive integer between 0 and 7 both inclusive.    |
`_skipValidation` | *boolean* | false | - |

**Returns:** [*Position*](position.md)

Overrides: void

Defined in: [src/Position.ts:11](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L11)

## Properties

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

## Accessors

### A1

• get **A1**(): *string*

Returns the board position in A1-notation.

**Returns:** *string*

Defined in: [src/Position.ts:43](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L43)

___

### x

• get **x**(): *number*

Returns the first value of the XY-point that the instance describes.

**Returns:** *number*

Defined in: [src/Position.ts:29](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L29)

___

### y

• get **y**(): *number*

Returns the second value of the XY-point that the instance describes.

**Returns:** *number*

Defined in: [src/Position.ts:36](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L36)

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

▸ **clone**(): [*Position*](position.md)

Returns a clone of the instance.
Out of bounds -validation is skipped.

**Returns:** [*Position*](position.md)

Defined in: [src/Position.ts:58](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L58)

___

### compare

▸ **compare**(`position`: [*Position*](position.md)): *boolean*

Deep-equality-compares the Position instance to another Position instance.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *boolean*

Defined in: [src/Position.ts:50](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L50)

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

▸ **copyWithin**(`target`: *number*, `start`: *number*, `end?`: *number*): [*Position*](position.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`target` | *number* | If target is negative, it is treated as length+target where length is the length of the array.   |
`start` | *number* | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.   |
`end?` | *number* | If not specified, length of the this object is used as its default value.    |

**Returns:** [*Position*](position.md)

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

▸ **fill**(`value`: *any*, `start?`: *number*, `end?`: *number*): [*Position*](position.md)

Returns the this object after filling the section identified by start and end with value

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | *any* | value to fill array section with   |
`start?` | *number* | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.   |
`end?` | *number* | index to stop filling the array at. If end is negative, it is treated as length+end.    |

**Returns:** [*Position*](position.md)

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

### getAllDiagonal

▸ **getAllDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:221](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L221)

___

### getAllDiagonalRecursive

▸ **getAllDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
directions. from the position on the board that this instance describes until the resulting Position instance
becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [src/Position.ts:354](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L354)

___

### getAllKnightMovePositions

▸ **getAllKnightMovePositions**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:240](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L240)

___

### getAllStraight

▸ **getAllStraight**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:209](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L209)

___

### getAllStraightAndDiagonal

▸ **getAllStraightAndDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:233](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L233)

___

### getAllStraightAndDiagonalRecursive

▸ **getAllStraightAndDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [src/Position.ts:368](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L368)

___

### getAllStraightRecursive

▸ **getAllStraightRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) directions from the position on the board that this instance describes until the
resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [src/Position.ts:340](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L340)

___

### getDown

▸ **getDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:90](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L90)

___

### getDownDown

▸ **getDownDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:146](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L146)

___

### getDownDownLeft

▸ **getDownDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:167](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L167)

___

### getDownDownRight

▸ **getDownDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:174](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L174)

___

### getDownLeft

▸ **getDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:125](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L125)

___

### getDownLeftRecursive

▸ **getDownLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:322](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L322)

___

### getDownRecursive

▸ **getDownRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:279](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L279)

___

### getDownRight

▸ **getDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:132](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L132)

___

### getDownRightRecursive

▸ **getDownRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:331](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L331)

___

### getLeft

▸ **getLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:97](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L97)

___

### getLeftLeftDown

▸ **getLeftLeftDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:188](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L188)

___

### getLeftLeftUp

▸ **getLeftLeftUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:181](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L181)

___

### getLeftRecursive

▸ **getLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:287](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L287)

___

### getModulation

▸ `Private`**getModulation**(`xBy`: *number*, `yBy`: *number*): *null* \| [*Position*](position.md)

Modulates the XY-position coordinate and returns a new Position instance equivalent to it.

#### Parameters:

Name | Type |
:------ | :------ |
`xBy` | *number* |
`yBy` | *number* |

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:72](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L72)

___

### getRecursive

▸ `Private`**getRecursive**(`modulator`: () => *null* \| [*Position*](position.md)): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by a provided modulator function recursively until the
modulator's returned Position instance becomes out of bounds of the board.

#### Parameters:

Name | Type |
:------ | :------ |
`modulator` | () => *null* \| [*Position*](position.md) |

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:257](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L257)

___

### getRight

▸ **getRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:104](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L104)

___

### getRightRecursive

▸ **getRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:295](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L295)

___

### getRightRightDown

▸ **getRightRightDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:202](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L202)

___

### getRightRightUp

▸ **getRightRightUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:195](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L195)

___

### getUp

▸ **getUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:83](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L83)

___

### getUpLeft

▸ **getUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:111](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L111)

___

### getUpLeftRecursive

▸ **getUpLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:304](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L304)

___

### getUpRecursive

▸ **getUpRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:271](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L271)

___

### getUpRight

▸ **getUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:118](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L118)

___

### getUpRightRecursive

▸ **getUpRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [src/Position.ts:313](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L313)

___

### getUpUp

▸ **getUpUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:139](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L139)

___

### getUpUpLeft

▸ **getUpUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:153](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L153)

___

### getUpUpRight

▸ **getUpUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [src/Position.ts:160](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L160)

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

▸ **sort**(`compareFn?`: (`a`: *any*, `b`: *any*) => *number*): [*Position*](position.md)

Sorts an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`compareFn?` | (`a`: *any*, `b`: *any*) => *number* | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```    |

**Returns:** [*Position*](position.md)

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

### toArray

▸ **toArray**(): *number*[]

Returns the instance as a normal array.

**Returns:** *number*[]

Defined in: [src/Position.ts:65](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L65)

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

### fromA1Notation

▸ `Static`**fromA1Notation**(`a1`: *string*): [*Position*](position.md)

Returns a new Position instance based on A1-notation input.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** [*Position*](position.md)

Defined in: [src/Position.ts:8](https://github.com/bemoje/chess/blob/e03f9b9/src/Position.ts#L8)

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
