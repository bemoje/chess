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
- [fromA1Notation](position.md#froma1notation)

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

Defined in: [Position.ts:13](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L13)

## Properties

### x

• **x**: *number*

Defined in: [Position.ts:5](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L5)

___

### y

• **y**: *number*

Defined in: [Position.ts:6](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L6)

## Accessors

### A1

• get **A1**(): *string*

Returns the board position in A1-notation.

**Returns:** *string*

Defined in: [Position.ts:30](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L30)

## Methods

### clone

▸ **clone**(): [*Position*](position.md)

Returns a clone of the instance.
Out of bounds -validation is skipped.

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:45](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L45)

___

### compare

▸ **compare**(`position`: [*Position*](position.md)): *boolean*

Deep-equality-compares the Position instance to another Position instance.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *boolean*

Defined in: [Position.ts:37](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L37)

___

### getAllDiagonal

▸ **getAllDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:209](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L209)

___

### getAllDiagonalRecursive

▸ **getAllDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
directions. from the position on the board that this instance describes until the resulting Position instance
becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:342](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L342)

___

### getAllKnightMovePositions

▸ **getAllKnightMovePositions**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:228](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L228)

___

### getAllStraight

▸ **getAllStraight**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:197](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L197)

___

### getAllStraightAndDiagonal

▸ **getAllStraightAndDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:221](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L221)

___

### getAllStraightAndDiagonalRecursive

▸ **getAllStraightAndDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:356](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L356)

___

### getAllStraightRecursive

▸ **getAllStraightRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) directions from the position on the board that this instance describes until the
resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:328](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L328)

___

### getDown

▸ **getDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:78](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L78)

___

### getDownDown

▸ **getDownDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:134](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L134)

___

### getDownDownLeft

▸ **getDownDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:155](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L155)

___

### getDownDownRight

▸ **getDownDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:162](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L162)

___

### getDownLeft

▸ **getDownLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:113](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L113)

___

### getDownLeftRecursive

▸ **getDownLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:310](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L310)

___

### getDownRecursive

▸ **getDownRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:267](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L267)

___

### getDownRight

▸ **getDownRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:120](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L120)

___

### getDownRightRecursive

▸ **getDownRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:319](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L319)

___

### getLeft

▸ **getLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:85](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L85)

___

### getLeftLeftDown

▸ **getLeftLeftDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:176](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L176)

___

### getLeftLeftUp

▸ **getLeftLeftUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:169](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L169)

___

### getLeftRecursive

▸ **getLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:275](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L275)

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

Defined in: [Position.ts:60](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L60)

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

Defined in: [Position.ts:245](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L245)

___

### getRight

▸ **getRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:92](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L92)

___

### getRightRecursive

▸ **getRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:283](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L283)

___

### getRightRightDown

▸ **getRightRightDown**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:190](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L190)

___

### getRightRightUp

▸ **getRightRightUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:183](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L183)

___

### getUp

▸ **getUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:71](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L71)

___

### getUpLeft

▸ **getUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:99](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L99)

___

### getUpLeftRecursive

▸ **getUpLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:292](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L292)

___

### getUpRecursive

▸ **getUpRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:259](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L259)

___

### getUpRight

▸ **getUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:106](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L106)

___

### getUpRightRecursive

▸ **getUpRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:301](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L301)

___

### getUpUp

▸ **getUpUp**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:127](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L127)

___

### getUpUpLeft

▸ **getUpUpLeft**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:141](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L141)

___

### getUpUpRight

▸ **getUpUpRight**(): *null* \| [*Position*](position.md)

Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:148](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L148)

___

### toArray

▸ **toArray**(): *number*[]

Returns the instance as a normal array.

**Returns:** *number*[]

Defined in: [Position.ts:52](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L52)

___

### fromA1Notation

▸ `Static`**fromA1Notation**(`a1`: *string*): [*Position*](position.md)

Returns a new Position instance based on A1-notation input.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:10](https://github.com/bemoje/chess/blob/255b248/src/Position.ts#L10)
