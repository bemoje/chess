[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Pawn

# Class: Pawn

## Hierarchy

* *Piece*

  ↳ **Pawn**

## Table of contents

### Constructors

- [constructor](pawn.md#constructor)

### Properties

- [index](pawn.md#index)
- [moveCount](pawn.md#movecount)
- [player](pawn.md#player)
- [position](pawn.md#position)

### Accessors

- [color](pawn.md#color)
- [game](pawn.md#game)
- [hasMoved](pawn.md#hasmoved)
- [isOwnTurn](pawn.md#isownturn)
- [isTaken](pawn.md#istaken)
- [moves](pawn.md#moves)
- [type](pawn.md#type)

### Methods

- [forEachValidMovePosition](pawn.md#foreachvalidmoveposition)
- [getMovePositionsWithinBounds](pawn.md#getmovepositionswithinbounds)
- [isCastleMove](pawn.md#iscastlemove)
- [isMoveTargetOwnPiece](pawn.md#ismovetargetownpiece)
- [isValidMove](pawn.md#isvalidmove)
- [registerMove](pawn.md#registermove)
- [remove](pawn.md#remove)

## Constructors

### constructor

\+ **new Pawn**(`player`: [*Player*](player.md), `index`: *number*, `position`: [*Position*](position.md)): [*Pawn*](pawn.md)

#### Parameters:

Name | Type |
:------ | :------ |
`player` | [*Player*](player.md) |
`index` | *number* |
`position` | [*Position*](position.md) |

**Returns:** [*Pawn*](pawn.md)

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L10)

## Properties

### index

• **index**: *number*

Inherited from: void

Defined in: [AbstractPiece.ts:8](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L8)

___

### moveCount

• **moveCount**: *number*

Inherited from: void

Defined in: [AbstractPiece.ts:10](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L10)

___

### player

• **player**: [*Player*](player.md)

Inherited from: void

Defined in: [AbstractPiece.ts:7](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L7)

___

### position

• **position**: *null* \| [*Position*](position.md)

Inherited from: void

Defined in: [AbstractPiece.ts:9](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L9)

## Accessors

### color

• get **color**(): *string*

Returns the player color of the Player instance that this Piece belongs to.

**Returns:** *string*

Defined in: [AbstractPiece.ts:44](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L44)

___

### game

• get **game**(): [*Game*](game.md)

Returns the Game instance that this Piece is associated with.

**Returns:** [*Game*](game.md)

Defined in: [AbstractPiece.ts:23](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L23)

___

### hasMoved

• get **hasMoved**(): *boolean*

Returns whether or not this Piece has made any moves yet.

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:37](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L37)

___

### isOwnTurn

• `Protected`get **isOwnTurn**(): *boolean*

Returns whether it is this Piece's Player's turn to move.

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:90](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L90)

___

### isTaken

• get **isTaken**(): *boolean*

Returns whether this Piece is still on the board.

**Returns:** *boolean*

Defined in: [AbstractPiece.ts:51](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L51)

___

### moves

• get **moves**(): [*Move*](move.md)[]

Returns an array of Move instances that represent moves made by this Piece.

**Returns:** [*Move*](move.md)[]

Defined in: [AbstractPiece.ts:58](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L58)

___

### type

• get **type**(): *string*

Returns the class name of the Piece.

**Returns:** *string*

Defined in: [AbstractPiece.ts:30](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L30)

## Methods

### forEachValidMovePosition

▸ **forEachValidMovePosition**(`f`: (`position`: [*Position*](position.md)) => *boolean* \| *void*): *boolean* \| *void*

Iterates all valid move Position instances for this Piece.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`position`: [*Position*](position.md)) => *boolean* \| *void* | a callback function to invoke for each valid move position. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Inherited from: void

Defined in: [AbstractPiece.ts:107](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L107)

___

### getMovePositionsWithinBounds

▸ `Protected`**getMovePositionsWithinBounds**(): ([*Position*](position.md) \| [*Position*](position.md)[])[]

Returns a Position array with all piece-specific move positions within bounds of the board.

**Returns:** ([*Position*](position.md) \| [*Position*](position.md)[])[]

Overrides: void

Defined in: [Pawn.ts:8](https://github.com/bemoje/chess/blob/203a32d/src/Pawn.ts#L8)

___

### isCastleMove

▸ **isCastleMove**(`_target`: [*Position*](position.md)): *boolean*

Returns whether a move to a target position is a castling move.

#### Parameters:

Name | Type |
:------ | :------ |
`_target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:139](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L139)

___

### isMoveTargetOwnPiece

▸ `Protected`**isMoveTargetOwnPiece**(`target`: [*Position*](position.md)): *boolean*

Returns whether there is a 'friendly' Piece at a given Position.

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:82](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L82)

___

### isValidMove

▸ **isValidMove**(`target`: [*Position*](position.md)): *boolean*

Returns whether a move to a position is a valid move.

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Inherited from: void

Defined in: [AbstractPiece.ts:147](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L147)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

Increments the moveCount number property and sets the position property.

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:67](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L67)

___

### remove

▸ **remove**(): *void*

Sets the position property to null, which means that this Piece is no longer on the board.

**Returns:** *void*

Inherited from: void

Defined in: [AbstractPiece.ts:75](https://github.com/bemoje/chess/blob/203a32d/src/AbstractPiece.ts#L75)
