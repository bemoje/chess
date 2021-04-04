[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Queen

# Class: Queen

## Hierarchy

* *Piece*

  ↳ **Queen**

## Table of contents

### Constructors

- [constructor](queen.md#constructor)

### Properties

- [index](queen.md#index)
- [moveCount](queen.md#movecount)
- [player](queen.md#player)
- [position](queen.md#position)

### Accessors

- [color](queen.md#color)
- [game](queen.md#game)
- [hasMoved](queen.md#hasmoved)
- [isTaken](queen.md#istaken)
- [moves](queen.md#moves)
- [type](queen.md#type)

### Methods

- [getMovePositionsWithinBounds](queen.md#getmovepositionswithinbounds)
- [getValidMovePositions](queen.md#getvalidmovepositions)
- [isMoveTargetOwnPiece](queen.md#ismovetargetownpiece)
- [isValidMove](queen.md#isvalidmove)
- [isValidMovePosition](queen.md#isvalidmoveposition)
- [registerMove](queen.md#registermove)
- [remove](queen.md#remove)

## Constructors

### constructor

\+ **new Queen**(`player`: [*Player*](player.md), `index`: *number*, `position`: [*Position*](position.md)): [*Queen*](queen.md)

#### Parameters:

Name | Type |
:------ | :------ |
`player` | [*Player*](player.md) |
`index` | *number* |
`position` | [*Position*](position.md) |

**Returns:** [*Queen*](queen.md)

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L10)

## Properties

### index

• **index**: *number*

Inherited from: void

Defined in: [AbstractPiece.ts:8](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L8)

___

### moveCount

• **moveCount**: *number*

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L10)

___

### player

• **player**: [*Player*](player.md)

Inherited from: void

Defined in: [AbstractPiece.ts:7](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L7)

___

### position

• **position**: *null* \| [*Position*](position.md)

Inherited from: void

Defined in: [AbstractPiece.ts:9](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L9)

## Accessors

### color

• get **color**(): *string*

**Returns:** *string*

Defined in: [AbstractPiece.ts:33](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L33)

___

### game

• get **game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [AbstractPiece.ts:21](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L21)

___

### hasMoved

• get **hasMoved**(): *boolean*

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:29](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L29)

___

### isTaken

• get **isTaken**(): *boolean*

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:37](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L37)

___

### moves

• get **moves**(): [*Move*](move.md)[]

**Returns:** [*Move*](move.md)[]

Defined in: [AbstractPiece.ts:41](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L41)

___

### type

• get **type**(): *string*

**Returns:** *string*

Defined in: [AbstractPiece.ts:25](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L25)

## Methods

### getMovePositionsWithinBounds

▸ `Protected`**getMovePositionsWithinBounds**(): ([*Position*](position.md) \| [*Position*](position.md)[])[]

**Returns:** ([*Position*](position.md) \| [*Position*](position.md)[])[]

Overrides: void

Defined in: [Queen.ts:5](https://github.com/bemoje/chess/blob/5a6d4ac/src/Queen.ts#L5)

___

### getValidMovePositions

▸ **getValidMovePositions**(): [*Position*](position.md)[]

Returns a Position array with all valid moves.

**Returns:** [*Position*](position.md)[]

Inherited from: void

Defined in: [AbstractPiece.ts:78](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L78)

___

### isMoveTargetOwnPiece

▸ `Protected`**isMoveTargetOwnPiece**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:56](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L56)

___

### isValidMove

▸ `Protected`**isValidMove**(`target`: [*Position*](position.md)): *boolean*

Returns whether a move to a position is a valid move.

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:64](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L64)

___

### isValidMovePosition

▸ **isValidMovePosition**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:93](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L93)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:47](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L47)

___

### remove

▸ **remove**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:52](https://github.com/bemoje/chess/blob/5a6d4ac/src/AbstractPiece.ts#L52)
