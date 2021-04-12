[bemoje-chess-engine](README.md) / Exports

# bemoje-chess-engine

## Table of contents

### References

- [default](modules.md#default)

### Classes

- [Bishop](classes/bishop.md)
- [Board](classes/board.md)
- [Game](classes/game.md)
- [King](classes/king.md)
- [Knight](classes/knight.md)
- [Move](classes/move.md)
- [Pawn](classes/pawn.md)
- [Player](classes/player.md)
- [Position](classes/position.md)
- [Queen](classes/queen.md)
- [Rook](classes/rook.md)

### Functions

- [arrClean](modules.md#arrclean)
- [assertValidA1](modules.md#assertvalida1)
- [assertValidXY](modules.md#assertvalidxy)
- [assertValidXYPoint](modules.md#assertvalidxypoint)
- [bytesToUint8Array](modules.md#bytestouint8array)
- [createAssertFunction](modules.md#createassertfunction)
- [from\_1\_to\_Y](modules.md#from_1_to_y)
- [from\_A1\_to\_XY](modules.md#from_a1_to_xy)
- [from\_A\_to\_X](modules.md#from_a_to_x)
- [from\_XY\_to\_A1](modules.md#from_xy_to_a1)
- [from\_X\_to\_A](modules.md#from_x_to_a)
- [from\_Y\_to\_1](modules.md#from_y_to_1)
- [isEven](modules.md#iseven)
- [isValidA1](modules.md#isvalida1)
- [isValidXY](modules.md#isvalidxy)
- [isValidXYPoint](modules.md#isvalidxypoint)
- [numericDifference](modules.md#numericdifference)
- [uInt8ToBytes](modules.md#uint8tobytes)

## References

### default

Renames and exports: [Game](classes/game.md)

## Functions

### arrClean

▸ **arrClean**(`arr`: ([*Position*](classes/position.md) \| *null*)[]): [*Position*](classes/position.md)[]

Removes elements of a given array if they do not evaluate to true.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | ([*Position*](classes/position.md) \| *null*)[] | The array containing null values or Position instances to clean.    |

**Returns:** [*Position*](classes/position.md)[]

Defined in: [util.ts:8](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L8)

___

### assertValidA1

▸ `Const`**assertValidA1**(`arg`: *string*, `name?`: *string*): *void*

Throws a TypeError if the argument is not valid A1-notation.

**`see`** isValidA1

**`function`** assertValidA1

**`throws`** {TypeError}

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *string* |
`name?` | *string* |

**Returns:** *void*

Defined in: [coordinates.ts:117](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L117)

___

### assertValidXY

▸ `Const`**assertValidXY**(`arg`: *number*[], `name?`: *string*): *void*

Throws a TypeError if the argument is not a valid XY-coordinate.

**`see`** isValidXY

**`function`** assertValidXY

**`throws`** {TypeError}

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *number*[] |
`name?` | *string* |

**Returns:** *void*

Defined in: [coordinates.ts:105](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L105)

___

### assertValidXYPoint

▸ `Const`**assertValidXYPoint**(`arg`: *number*, `name?`: *string*): *void*

Throws a TypeError if the argument is not a valid XY-coordinate point.

**`see`** isValidXYPoint

**`function`** assertValidXYPoint

**`throws`** {TypeError}

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *number* |
`name?` | *string* |

**Returns:** *void*

Defined in: [coordinates.ts:93](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L93)

___

### bytesToUint8Array

▸ **bytesToUint8Array**(`arr`: *number*[]): Uint8Array

Converts an array of bytes to a Uint8Array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arr` | *number*[] | An array of integers between 0 and 255.    |

**Returns:** Uint8Array

Defined in: [util.ts:82](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L82)

___

### createAssertFunction

▸ **createAssertFunction**<T\>(`expectedToBe`: *string*, `validate`: (`arg`: T) => *boolean*): *function*

Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`expectedToBe` | *string* | A string that describes the assertion.   |
`validate` | (`arg`: T) => *boolean* | A callback function that validates an argument.    |

**Returns:** (`arg`: T, `name?`: *string*) => *void*

Defined in: [util.ts:37](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L37)

___

### from\_1\_to\_Y

▸ **from_1_to_Y**(`n`: *string*): *number*

Converts the second character of A1-notation to the second value of an XY-coordinate.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n` | *string* | The second character of an A1-notation string.    |

**Returns:** *number*

Defined in: [coordinates.ts:37](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L37)

___

### from\_A1\_to\_XY

▸ **from_A1_to_XY**(`a1`: *string*): *number*[]

Converts an A1-notation string to a XY-coordinate-array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a1` | *string* | An A1-notation string.    |

**Returns:** *number*[]

Defined in: [coordinates.ts:55](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L55)

___

### from\_A\_to\_X

▸ **from_A_to_X**(`a`: *string*): *number*

Converts the first character of A1-notation to the first value of an XY-coordinate.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *string* | The first character of an A1-notation string.    |

**Returns:** *number*

Defined in: [coordinates.ts:28](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L28)

___

### from\_XY\_to\_A1

▸ **from_XY_to_A1**(`xy`: *number*[]): *string*

Converts a XY-coordinate-array to an A1-notation string.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xy` | *number*[] | An XY-coordinate array where x and y are integers and 0 <= x <= 7 and 0 <= y <= 7    |

**Returns:** *string*

Defined in: [coordinates.ts:46](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L46)

___

### from\_X\_to\_A

▸ **from_X_to_A**(`x`: *number*): *string*

Converts the first value of an XY-coordinate to A1-notation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`x` | *number* | An integer where 0 <= x <= 7    |

**Returns:** *string*

Defined in: [coordinates.ts:10](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L10)

___

### from\_Y\_to\_1

▸ **from_Y_to_1**(`y`: *number*): *string*

Converts the second value of an XY-coordinate to A1-notation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`y` | *number* | An integer where 0 <= y <= 7    |

**Returns:** *string*

Defined in: [coordinates.ts:19](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L19)

___

### isEven

▸ **isEven**(`n`: *number*): *boolean*

Returns whether a number is an even number.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n` | *number* | An integer    |

**Returns:** *boolean*

Defined in: [util.ts:59](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L59)

___

### isValidA1

▸ **isValidA1**(`a1`: *string*): *boolean*

Returns whether a string is valid A1-notation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a1` | *string* | An A1-notation string.    |

**Returns:** *boolean*

Defined in: [coordinates.ts:82](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L82)

___

### isValidXY

▸ **isValidXY**(`xy`: *number*[]): *boolean*

Returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xy` | *number*[] | An XY-coordinate array where x and y are integers and 0 <= x <= 7 and 0 <= y <= 7    |

**Returns:** *boolean*

Defined in: [coordinates.ts:73](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L73)

___

### isValidXYPoint

▸ **isValidXYPoint**(`n`: *number*): *boolean*

Returns whether the argument is a positive integer where 0 <= arg <= 7.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n` | *number* | The second character of an A1-notation string.    |

**Returns:** *boolean*

Defined in: [coordinates.ts:64](https://github.com/bemoje/chess/blob/3d08551/src/coordinates.ts#L64)

___

### numericDifference

▸ **numericDifference**(`n1`: *number*, `n2`: *number*): *number*

Returns the numeric difference between to numbers.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`n1` | *number* | A number   |
`n2` | *number* | A number    |

**Returns:** *number*

Defined in: [util.ts:26](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L26)

___

### uInt8ToBytes

▸ **uInt8ToBytes**(`uInt8`: Uint8Array): *number*[]

Converts an Uint8Array to an array of integers between 0 and 255.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`uInt8` | Uint8Array | An Uint8Array instance.    |

**Returns:** *number*[]

Defined in: [util.ts:68](https://github.com/bemoje/chess/blob/3d08551/src/util.ts#L68)
