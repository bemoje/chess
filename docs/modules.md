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

- [assertValidA1](modules.md#assertvalida1)
- [assertValidXY](modules.md#assertvalidxy)
- [assertValidXYPoint](modules.md#assertvalidxypoint)
- [from\_1\_to\_Y](modules.md#from_1_to_y)
- [from\_A1\_to\_XY](modules.md#from_a1_to_xy)
- [from\_A\_to\_X](modules.md#from_a_to_x)
- [from\_XY\_to\_A1](modules.md#from_xy_to_a1)
- [from\_X\_to\_A](modules.md#from_x_to_a)
- [from\_Y\_to\_1](modules.md#from_y_to_1)
- [isValidA1](modules.md#isvalida1)
- [isValidXY](modules.md#isvalidxy)
- [isValidXYPoint](modules.md#isvalidxypoint)

## References

### default

Renames and exports: [Game](classes/game.md)

## Functions

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

Defined in: [coordinates.ts:114](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L114)

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

Defined in: [coordinates.ts:102](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L102)

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

Defined in: [coordinates.ts:90](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L90)

___

### from\_1\_to\_Y

▸ **from_1_to_Y**(`n`: *string*): *number*

Converts the second character of A1-notation to the second value of an XY-coordinate.

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *string* |

**Returns:** *number*

Defined in: [coordinates.ts:30](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L30)

___

### from\_A1\_to\_XY

▸ **from_A1_to_XY**(`a1`: *string*): *number*[]

Converts an A1-notation string to a XY-coordinate-array.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** *number*[]

Defined in: [coordinates.ts:44](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L44)

___

### from\_A\_to\_X

▸ **from_A_to_X**(`a`: *string*): *number*

Converts the first character of A1-notation to the first value of an XY-coordinate.

#### Parameters:

Name | Type |
:------ | :------ |
`a` | *string* |

**Returns:** *number*

Defined in: [coordinates.ts:23](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L23)

___

### from\_XY\_to\_A1

▸ **from_XY_to_A1**(`pos`: *number*[]): *string*

Converts a XY-coordinate-array to an A1-notation string.

#### Parameters:

Name | Type |
:------ | :------ |
`pos` | *number*[] |

**Returns:** *string*

Defined in: [coordinates.ts:37](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L37)

___

### from\_X\_to\_A

▸ **from_X_to_A**(`x`: *number*): *string*

Converts the first value of an XY-coordinate to A1-notation.

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |

**Returns:** *string*

Defined in: [coordinates.ts:9](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L9)

___

### from\_Y\_to\_1

▸ **from_Y_to_1**(`y`: *number*): *string*

Converts the second value of an XY-coordinate to A1-notation.

#### Parameters:

Name | Type |
:------ | :------ |
`y` | *number* |

**Returns:** *string*

Defined in: [coordinates.ts:16](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L16)

___

### isValidA1

▸ **isValidA1**(`a1`: *string*): *boolean*

Returns whether a string is valid A1-notation.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** *boolean*

Defined in: [coordinates.ts:79](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L79)

___

### isValidXY

▸ **isValidXY**(`pos`: *number*[]): *boolean*

Returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7.

#### Parameters:

Name | Type |
:------ | :------ |
`pos` | *number*[] |

**Returns:** *boolean*

Defined in: [coordinates.ts:72](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L72)

___

### isValidXYPoint

▸ **isValidXYPoint**(`n`: *number*): *boolean*

Returns whether the argument is a positive integer where 0 <= arg <= 7.

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** *boolean*

Defined in: [coordinates.ts:65](https://github.com/bemoje/chess/blob/fba4a91/src/coordinates.ts#L65)
