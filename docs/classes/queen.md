[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Queen

# Class: Queen

## Hierarchy

* *Piece*

  ↳ **Queen**

## Table of contents

### Constructors

- [constructor](queen.md#constructor)

### Properties

- [moves](queen.md#moves)
- [player](queen.md#player)
- [position](queen.md#position)

### Accessors

- [color](queen.md#color)
- [game](queen.md#game)
- [hasMoved](queen.md#hasmoved)
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

\+ **new Queen**(`player`: [*Player*](player.md), `position`: [*Position*](position.md)): [*Queen*](queen.md)

#### Parameters:

Name | Type |
:------ | :------ |
`player` | [*Player*](player.md) |
`position` | [*Position*](position.md) |

**Returns:** [*Queen*](queen.md)

Inherited from: void

Defined in: [src/AbstractPiece.ts:9](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L9)

## Properties

### moves

• **moves**: [*Move*](move.md)[]

Inherited from: void

Defined in: [src/AbstractPiece.ts:9](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L9)

___

### player

• **player**: [*Player*](player.md)

Inherited from: void

Defined in: [src/AbstractPiece.ts:7](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L7)

___

### position

• **position**: *null* \| [*Position*](position.md)

Inherited from: void

Defined in: [src/AbstractPiece.ts:8](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L8)

## Accessors

### color

• get **color**(): *string*

**Returns:** *string*

Defined in: [src/AbstractPiece.ts:29](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L29)

___

### game

• get **game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [src/AbstractPiece.ts:17](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L17)

___

### hasMoved

• get **hasMoved**(): *boolean*

**Returns:** *boolean*

Defined in: [src/AbstractPiece.ts:25](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L25)

___

### type

• get **type**(): *string*

**Returns:** *string*

Defined in: [src/AbstractPiece.ts:21](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L21)

## Methods

### getMovePositionsWithinBounds

▸ `Protected`**getMovePositionsWithinBounds**(): ([*Position*](position.md) \| [*Position*](position.md)[])[]

**Returns:** ([*Position*](position.md) \| [*Position*](position.md)[])[]

Overrides: void

Defined in: [src/Queen.ts:5](https://github.com/bemoje/chess/blob/e03f9b9/src/Queen.ts#L5)

___

### getValidMovePositions

▸ **getValidMovePositions**(): [*Position*](position.md)[]

Returns a Position array with all valid moves.

**Returns:** [*Position*](position.md)[]

Inherited from: void

Defined in: [src/AbstractPiece.ts:64](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L64)

___

### isMoveTargetOwnPiece

▸ `Protected`**isMoveTargetOwnPiece**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [src/AbstractPiece.ts:42](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L42)

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

Defined in: [src/AbstractPiece.ts:50](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L50)

___

### isValidMovePosition

▸ **isValidMovePosition**(`target`: [*Position*](position.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [src/AbstractPiece.ts:78](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L78)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Inherited from: void

Defined in: [src/AbstractPiece.ts:33](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L33)

___

### remove

▸ **remove**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: [src/AbstractPiece.ts:38](https://github.com/bemoje/chess/blob/e03f9b9/src/AbstractPiece.ts#L38)
