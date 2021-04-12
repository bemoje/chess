[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Board

# Class: Board

A class that acts as a data view of all the pieces that offers faster lookups than iterating pieces.

## Table of contents

### Constructors

- [constructor](board.md#constructor)

### Properties

- [game](board.md#game)
- [grid](board.md#grid)

### Methods

- [getPieceByA1](board.md#getpiecebya1)
- [getPieceByPosition](board.md#getpiecebyposition)
- [getPieceByXY](board.md#getpiecebyxy)
- [registerMove](board.md#registermove)
- [registerSwap](board.md#registerswap)
- [removePiece](board.md#removepiece)
- [setPiece](board.md#setpiece)

## Constructors

### constructor

\+ **new Board**(`game`: [*Game*](game.md)): [*Board*](board.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`game` | [*Game*](game.md) | The Game instance that the board belongs to.    |

**Returns:** [*Board*](board.md)

Defined in: [Board.ts:19](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L19)

## Properties

### game

• **game**: [*Game*](game.md)

The Game instance that the board belongs to.

Defined in: [Board.ts:14](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L14)

___

### grid

• **grid**: (*null* \| *Piece*)[][]

A 2D array grid representing the game board.

Defined in: [Board.ts:19](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L19)

## Methods

### getPieceByA1

▸ **getPieceByA1**(`a1`: *string*): *null* \| *Piece*

Returns the piece at the given A1-notation-coordinates or null if no piece is found there.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a1` | *string* | An A1-notation string.    |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:58](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L58)

___

### getPieceByPosition

▸ **getPieceByPosition**(`position`: [*Position*](position.md)): *null* \| *Piece*

Returns the piece at the given Position or null if no piece is found there.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*Position*](position.md) | The position on the game board by which to find the Piece instance there.    |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:49](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L49)

___

### getPieceByXY

▸ **getPieceByXY**(`x`: *number*, `y`: *number*): *null* \| *Piece*

Returns the piece at the given XY-coordinates or null if no piece is found there.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`x` | *number* | The X coordinate   |
`y` | *number* | The Y coordinate    |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:40](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L40)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

Updates the board instance based on the information contained within a provided Move instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`move` | [*Move*](move.md) | The Move instance containing the information needed to update the board.    |

**Returns:** *void*

Defined in: [Board.ts:91](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L91)

___

### registerSwap

▸ **registerSwap**(`move`: [*Move*](move.md)): *void*

Updates the board instance based on the information contained within a provided Move instance that is known to make
out a swap (used for castling moves).

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`move` | [*Move*](move.md) | The Move instance containing the information needed to update the board.    |

**Returns:** *void*

Defined in: [Board.ts:105](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L105)

___

### removePiece

▸ **removePiece**(`piece`: *null* \| *Piece*): *void*

Removes a piece from the board.
This method does not check legality or whether this action is part of a move in the game.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`piece` | *null* \| *Piece* | The piece to remove.    |

**Returns:** *void*

Defined in: [Board.ts:79](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L79)

___

### setPiece

▸ **setPiece**(`piece`: *Piece*): *void*

Moves a piece to the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`piece` | *Piece* | The piece to move.    |

**Returns:** *void*

Defined in: [Board.ts:68](https://github.com/bemoje/chess/blob/7af4530/src/Board.ts#L68)
