[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Position

# Class: Position

## Table of contents

### Constructors

- [constructor](position.md#constructor)

### Properties

- [x](position.md#x)
- [y](position.md#y)

### Accessors

- [A1](position.md#a1)
- [XY](position.md#xy)

### Methods

- [clone](position.md#clone)
- [compare](position.md#compare)
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
- [toArray](position.md#toarray)
- [fromA1](position.md#froma1)
- [fromXY](position.md#fromxy)

## Constructors

### constructor

\+ **new Position**(`x`: *number*, `y`: *number*, `skipValidation?`: *boolean*): [*Position*](position.md)

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`x` | *number* | - | a positive integer between 0 and 7 both inclusive.   |
`y` | *number* | - | a positive integer between 0 and 7 both inclusive.    |
`skipValidation` | *boolean* | false | - |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:28](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L28)

## Properties

### x

• **x**: *number*

The X coordinate.

Defined in: [Position.ts:8](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L8)

___

### y

• **y**: *number*

The Y coordinate.

Defined in: [Position.ts:13](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L13)

## Accessors

### A1

• get **A1**(): *string*

Returns the board position in A1-notation.

**Returns:** *string*

Defined in: [Position.ts:45](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L45)

___

### XY

• get **XY**(): *number*[]

Returns the board position as an XY-coordinate array.

**Returns:** *number*[]

Defined in: [Position.ts:52](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L52)

## Methods

### clone

▸ **clone**(): [*Position*](position.md)

Returns a clone of the instance.
Out of bounds -validation is skipped.

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:67](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L67)

___

### compare

▸ **compare**(`position`: [*Position*](position.md)): *boolean*

Deep-equality-compares the Position instance to another Position instance.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *boolean*

Defined in: [Position.ts:59](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L59)

___

### getAllDiagonal

▸ **getAllDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:231](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L231)

___

### getAllDiagonalRecursive

▸ **getAllDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
directions from the position on the board that this instance describes until the resulting Position instance
becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:364](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L364)

___

### getAllKnightMovePositions

▸ **getAllKnightMovePositions**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:250](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L250)

___

### getAllStraight

▸ **getAllStraight**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:219](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L219)

___

### getAllStraightAndDiagonal

▸ **getAllStraightAndDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:243](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L243)

___

### getAllStraightAndDiagonalRecursive

▸ **getAllStraightAndDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:378](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L378)

___

### getAllStraightRecursive

▸ **getAllStraightRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) directions from the position on the board that this instance describes until the
resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:350](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L350)

___

### getDown

▸ **getDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:100](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L100)

___

### getDownDown

▸ **getDownDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:156](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L156)

___

### getDownDownLeft

▸ **getDownDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:177](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L177)

___

### getDownDownRight

▸ **getDownDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:184](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L184)

___

### getDownLeft

▸ **getDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:135](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L135)

___

### getDownLeftRecursive

▸ **getDownLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:332](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L332)

___

### getDownRecursive

▸ **getDownRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:289](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L289)

___

### getDownRight

▸ **getDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:142](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L142)

___

### getDownRightRecursive

▸ **getDownRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:341](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L341)

___

### getLeft

▸ **getLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:107](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L107)

___

### getLeftLeftDown

▸ **getLeftLeftDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:198](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L198)

___

### getLeftLeftUp

▸ **getLeftLeftUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:191](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L191)

___

### getLeftRecursive

▸ **getLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:297](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L297)

___

### getModulation

▸ `Private`**getModulation**(`xBy`: *number*, `yBy`: *number*): *null* \| [*Position*](position.md)

Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
is out of bounds of the board.

#### Parameters:

Name | Type |
:------ | :------ |
`xBy` | *number* |
`yBy` | *number* |

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:82](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L82)

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

Defined in: [Position.ts:267](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L267)

___

### getRight

▸ **getRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:114](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L114)

___

### getRightRecursive

▸ **getRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:305](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L305)

___

### getRightRightDown

▸ **getRightRightDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:212](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L212)

___

### getRightRightUp

▸ **getRightRightUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:205](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L205)

___

### getUp

▸ **getUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:93](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L93)

___

### getUpLeft

▸ **getUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:121](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L121)

___

### getUpLeftRecursive

▸ **getUpLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:314](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L314)

___

### getUpRecursive

▸ **getUpRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:281](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L281)

___

### getUpRight

▸ **getUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:128](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L128)

___

### getUpRightRecursive

▸ **getUpRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:323](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L323)

___

### getUpUp

▸ **getUpUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:149](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L149)

___

### getUpUpLeft

▸ **getUpUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:163](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L163)

___

### getUpUpRight

▸ **getUpUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:170](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L170)

___

### toArray

▸ **toArray**(): *number*[]

Returns the instance as a normal array.

**Returns:** *number*[]

Defined in: [Position.ts:74](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L74)

___

### fromA1

▸ `Static`**fromA1**(`a1`: *string*): [*Position*](position.md)

Returns a new Position instance based on A1-notation input.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:18](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L18)

___

### fromXY

▸ `Static`**fromXY**(`xy`: *number*[]): [*Position*](position.md)

Returns a new Position instance based on XY-coordinate array.

#### Parameters:

Name | Type |
:------ | :------ |
`xy` | *number*[] |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:26](https://github.com/bemoje/chess/blob/7af4530/src/Position.ts#L26)
