[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Position

# Class: Position

A class that represents a XY-coordinate position on the Board of a chess Game.

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

Defined in: [Position.ts:31](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L31)

## Properties

### x

• **x**: *number*

The X coordinate.

Defined in: [Position.ts:11](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L11)

___

### y

• **y**: *number*

The Y coordinate.

Defined in: [Position.ts:16](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L16)

## Accessors

### A1

• get **A1**(): *string*

Returns the board position in A1-notation.

**Returns:** *string*

Defined in: [Position.ts:48](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L48)

___

### XY

• get **XY**(): *number*[]

Returns the board position as an XY-coordinate array.

**Returns:** *number*[]

Defined in: [Position.ts:55](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L55)

## Methods

### clone

▸ **clone**(): [*Position*](position.md)

Returns a clone of the instance.

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:71](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L71)

___

### compare

▸ **compare**(`position`: [*Position*](position.md)): *boolean*

Deep-equality-compares the Position instance to another Position instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*Position*](position.md) | The Position instance to compare.    |

**Returns:** *boolean*

Defined in: [Position.ts:64](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L64)

___

### getAllDiagonal

▸ **getAllDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:257](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L257)

___

### getAllDiagonalRecursive

▸ **getAllDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
directions from the position on the board that this instance describes until the resulting Position instance
becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:393](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L393)

___

### getAllKnightMovePositions

▸ **getAllKnightMovePositions**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:277](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L277)

___

### getAllStraight

▸ **getAllStraight**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:245](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L245)

___

### getAllStraightAndDiagonal

▸ **getAllStraightAndDiagonal**(): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and
diagonal directions.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:270](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L270)

___

### getAllStraightAndDiagonalRecursive

▸ **getAllStraightAndDiagonalRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:407](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L407)

___

### getAllStraightRecursive

▸ **getAllStraightRecursive**(): [*Position*](position.md)[][]

Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
(horizontal and vertical) directions from the position on the board that this instance describes until the
resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[][]

Defined in: [Position.ts:379](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L379)

___

### getDown

▸ **getDown**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 1 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:110](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L110)

___

### getDownDown

▸ **getDownDown**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 2 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:174](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L174)

___

### getDownDownLeft

▸ **getDownDownLeft**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 2 and left by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:198](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L198)

___

### getDownDownRight

▸ **getDownDownRight**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 2 and right by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:206](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L206)

___

### getDownLeft

▸ **getDownLeft**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 1 and left by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:150](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L150)

___

### getDownLeftRecursive

▸ **getDownLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:361](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L361)

___

### getDownRecursive

▸ **getDownRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:318](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L318)

___

### getDownRight

▸ **getDownRight**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved down by 1 and right by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:158](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L158)

___

### getDownRightRecursive

▸ **getDownRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:370](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L370)

___

### getLeft

▸ **getLeft**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved left by 1 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:118](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L118)

___

### getLeftLeftDown

▸ **getLeftLeftDown**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved left by 2 and up by 1 from the position on
the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:222](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L222)

___

### getLeftLeftUp

▸ **getLeftLeftUp**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved left by 2 and up by 1 from the position on
the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:214](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L214)

___

### getLeftRecursive

▸ **getLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:326](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L326)

___

### getModulation

▸ `Private`**getModulation**(`xBy`: *number*, `yBy`: *number*): *null* \| [*Position*](position.md)

Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
is out of bounds of the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`xBy` | *number* | The number of chess grid units to module by on the x-axis.   |
`yBy` | *number* | The number of chess grid units to module by on the y-axis.   |

**Returns:** *null* \| [*Position*](position.md)

`null` if the resulting position is out of bounds.

Defined in: [Position.ts:90](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L90)

___

### getRecursive

▸ `Private`**getRecursive**(`modulator`: () => *null* \| [*Position*](position.md)): [*Position*](position.md)[]

Returns an array of new Position instances that are moved by a provided modulator function recursively until the
modulator's returned Position instance becomes out of bounds of the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`modulator` | () => *null* \| [*Position*](position.md) | The modulator method to use for recursion.    |

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:296](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L296)

___

### getRight

▸ **getRight**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved right by 1 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:126](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L126)

___

### getRightRecursive

▸ **getRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:334](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L334)

___

### getRightRightDown

▸ **getRightRightDown**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved right by 2 and down by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:238](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L238)

___

### getRightRightUp

▸ **getRightRightUp**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved right by 2 and up by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:230](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L230)

___

### getUp

▸ **getUp**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 1 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:102](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L102)

___

### getUpLeft

▸ **getUpLeft**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 1 and left by 1 from the position on
the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:134](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L134)

___

### getUpLeftRecursive

▸ **getUpLeftRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:343](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L343)

___

### getUpRecursive

▸ **getUpRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
the board that this instance describes until the resulting Position instance becomes out of bounds of the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:310](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L310)

___

### getUpRight

▸ **getUpRight**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 1 and right by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:142](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L142)

___

### getUpRightRecursive

▸ **getUpRightRecursive**(): [*Position*](position.md)[]

Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
position on the board that this instance describes until the resulting Position instance becomes out of bounds of
the board.

**Returns:** [*Position*](position.md)[]

Defined in: [Position.ts:352](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L352)

___

### getUpUp

▸ **getUpUp**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 2 from the position on the board
that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:166](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L166)

___

### getUpUpLeft

▸ **getUpUpLeft**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 2 and left by 1 from the position on
the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:182](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L182)

___

### getUpUpRight

▸ **getUpUpRight**(): *null* \| [*Position*](position.md)

Modulates the Position and returns a new Position instance that is moved up by 2 and right by 1 from the position
on the board that this instance describes.

**Returns:** *null* \| [*Position*](position.md)

Defined in: [Position.ts:190](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L190)

___

### toArray

▸ **toArray**(): *number*[]

Returns the instance as a normal array.

**Returns:** *number*[]

Defined in: [Position.ts:78](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L78)

___

### fromA1

▸ `Static`**fromA1**(`a1`: *string*): [*Position*](position.md)

Modulates the Position and returns a new Position instance based on A1-notation input.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:21](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L21)

___

### fromXY

▸ `Static`**fromXY**(`xy`: *number*[]): [*Position*](position.md)

Modulates the Position and returns a new Position instance based on XY-coordinate array.

#### Parameters:

Name | Type |
:------ | :------ |
`xy` | *number*[] |

**Returns:** [*Position*](position.md)

Defined in: [Position.ts:29](https://github.com/bemoje/chess/blob/3d08551/src/Position.ts#L29)
