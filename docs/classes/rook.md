[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Rook

# Class: Rook

{Piece} Rook class.

## Hierarchy

* *Piece*

  ↳ **Rook**

## Table of contents

### Constructors

- [constructor](rook.md#constructor)

### Properties

- [index](rook.md#index)
- [moveCount](rook.md#movecount)
- [player](rook.md#player)
- [position](rook.md#position)

### Accessors

- [color](rook.md#color)
- [game](rook.md#game)
- [hasMoved](rook.md#hasmoved)
- [isOwnTurn](rook.md#isownturn)
- [isTaken](rook.md#istaken)
- [moves](rook.md#moves)
- [type](rook.md#type)

### Methods

- [forEachValidMovePosition](rook.md#foreachvalidmoveposition)
- [getMovePositionsWithinBounds](rook.md#getmovepositionswithinbounds)
- [isCastleMove](rook.md#iscastlemove)
- [isMoveTargetOwnPiece](rook.md#ismovetargetownpiece)
- [isValidMove](rook.md#isvalidmove)
- [registerMove](rook.md#registermove)
- [remove](rook.md#remove)

## Constructors

### constructor

\+ **new Rook**(`player`: [*Player*](player.md), `index`: *number*, `position`: [*Position*](position.md)): [*Rook*](rook.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`player` | [*Player*](player.md) | The Player who owns the Piece.   |
`index` | *number* | Manually set piece index value. Only unique per Player instance.   |
`position` | [*Position*](position.md) | The Position of the piece.    |

**Returns:** [*Rook*](rook.md)

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:28](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L28)

## Properties

### index

• **index**: *number*

Manually set piece index value. Only unique per Player instance.

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:18](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L18)

___

### moveCount

• **moveCount**: *number*

The number of times the piece has moved.

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:28](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L28)

___

### player

• **player**: [*Player*](player.md)

The Player who owns the Piece.

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:13](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L13)

___

### position

• **position**: *null* \| [*Position*](position.md)

The Position of the piece.

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:23](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L23)

## Accessors

### color

• get **color**(): *string*

Returns the player color of the Player instance that this Piece belongs to.

**Returns:** *string*

Defined in: [pieces/AbstractPiece.ts:67](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L67)

___

### game

• get **game**(): [*Game*](game.md)

Returns the Game instance that this Piece is associated with.

**Returns:** [*Game*](game.md)

Defined in: [pieces/AbstractPiece.ts:46](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L46)

___

### hasMoved

• get **hasMoved**(): *boolean*

Returns whether or not this Piece has made any moves yet.

**Returns:** *boolean*

Defined in: [pieces/AbstractPiece.ts:60](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L60)

___

### isOwnTurn

• `Protected`get **isOwnTurn**(): *boolean*

Returns whether it is this Piece's Player's turn to move.

**Returns:** *boolean*

Defined in: [pieces/AbstractPiece.ts:113](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L113)

___

### isTaken

• get **isTaken**(): *boolean*

Returns whether this Piece is still on the board.

**Returns:** *boolean*

Defined in: [pieces/AbstractPiece.ts:74](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L74)

___

### moves

• get **moves**(): [*Move*](move.md)[]

Returns an array of Move instances that represent moves made by this Piece.

**Returns:** [*Move*](move.md)[]

Defined in: [pieces/AbstractPiece.ts:81](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L81)

___

### type

• get **type**(): *string*

Returns the class name of the Piece.

**Returns:** *string*

Defined in: [pieces/AbstractPiece.ts:53](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L53)

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

Defined in: [pieces/AbstractPiece.ts:130](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L130)

___

### getMovePositionsWithinBounds

▸ `Protected`**getMovePositionsWithinBounds**(): ([*Position*](position.md) \| [*Position*](position.md)[])[]

Returns a Position array with all piece-specific move positions within bounds of the board.

**Returns:** ([*Position*](position.md) \| [*Position*](position.md)[])[]

Overrides: void

Defined in: [pieces/Rook.ts:11](https://github.com/bemoje/chess/blob/3d08551/src/pieces/Rook.ts#L11)

___

### isCastleMove

▸ **isCastleMove**(`target`: [*Position*](position.md)): *boolean*

Returns whether a move to a target position is a castling move.

#### Parameters:

Name | Type |
:------ | :------ |
`target` | [*Position*](position.md) |

**Returns:** *boolean*

Overrides: void

Defined in: [pieces/Rook.ts:20](https://github.com/bemoje/chess/blob/3d08551/src/pieces/Rook.ts#L20)

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

Defined in: [pieces/AbstractPiece.ts:105](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L105)

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

Defined in: [pieces/AbstractPiece.ts:170](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L170)

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

Defined in: [pieces/AbstractPiece.ts:90](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L90)

___

### remove

▸ **remove**(): *void*

Sets the position property to null, which means that this Piece is no longer on the board.

**Returns:** *void*

Inherited from: void

Defined in: [pieces/AbstractPiece.ts:98](https://github.com/bemoje/chess/blob/3d08551/src/pieces/AbstractPiece.ts#L98)
