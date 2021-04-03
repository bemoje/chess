[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Bishop

# Class: Bishop

## Hierarchy

* *Piece*

  ↳ **Bishop**

## Table of contents

### Constructors

- [constructor](bishop.md#constructor)

### Properties

- [index](bishop.md#index)
- [moves](bishop.md#moves)
- [player](bishop.md#player)
- [position](bishop.md#position)

### Accessors

- [color](bishop.md#color)
- [game](bishop.md#game)
- [hasMoved](bishop.md#hasmoved)
- [type](bishop.md#type)

### Methods

- [getMovePositionsWithinBounds](bishop.md#getmovepositionswithinbounds)
- [getValidMovePositions](bishop.md#getvalidmovepositions)
- [isMoveTargetOwnPiece](bishop.md#ismovetargetownpiece)
- [isValidMove](bishop.md#isvalidmove)
- [isValidMovePosition](bishop.md#isvalidmoveposition)
- [registerMove](bishop.md#registermove)
- [remove](bishop.md#remove)

## Constructors

### constructor

\+ **new Bishop**(`player`: [*Player*](player.md), `index`: *number*, `position`: [*Position*](position.md)): [*Bishop*](bishop.md)

#### Parameters:

Name | Type |
:------ | :------ |
`player` | [*Player*](player.md) |
`index` | *number* |
`position` | [*Position*](position.md) |

**Returns:** [*Bishop*](bishop.md)

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L10)

## Properties

### index

• **index**: *number*

Inherited from: void

Defined in: [AbstractPiece.ts:8](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L8)

___

### moves

• **moves**: [*Move*](move.md)[]

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L10)

___

### player

• **player**: [*Player*](player.md)

Inherited from: void

Defined in: [AbstractPiece.ts:7](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L7)

___

### position

• **position**: *null* \| [*Position*](position.md)

Inherited from: void

Defined in: [AbstractPiece.ts:9](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L9)

## Accessors

### color

• get **color**(): *string*

**Returns:** *string*

Defined in: [AbstractPiece.ts:33](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L33)

___

### game

• get **game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [AbstractPiece.ts:21](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L21)

___

### hasMoved

• get **hasMoved**(): *boolean*

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:29](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L29)

___

### type

• get **type**(): *string*

**Returns:** *string*

Defined in: [AbstractPiece.ts:25](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L25)

## Methods

### getMovePositionsWithinBounds

▸ `Protected`**getMovePositionsWithinBounds**(): ([*Position*](position.md) \| [*Position*](position.md)[])[]

**Returns:** ([*Position*](position.md) \| [*Position*](position.md)[])[]

Overrides: void

Defined in: [Bishop.ts:5](https://github.com/bemoje/chess/blob/255b248/src/Bishop.ts#L5)

___

### getValidMovePositions

▸ **getValidMovePositions**(): [*Position*](position.md)[]

Returns a Position array with all valid moves.

**Returns:** [*Position*](position.md)[]

Inherited from: void

Defined in: [AbstractPiece.ts:68](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L68)

___

### isMoveTargetOwnPiece

▸ `Protected`**isMoveTargetOwnPiece**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:46](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L46)

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

Defined in: [AbstractPiece.ts:54](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L54)

___

### isValidMovePosition

▸ **isValidMovePosition**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:83](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L83)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:37](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L37)

___

### remove

▸ **remove**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:42](https://github.com/bemoje/chess/blob/255b248/src/AbstractPiece.ts#L42)
