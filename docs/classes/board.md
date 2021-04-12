[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Board

# Class: Board

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

Name | Type |
:------ | :------ |
`game` | [*Game*](game.md) |

**Returns:** [*Board*](board.md)

Defined in: [Board.ts:9](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L9)

## Properties

### game

• **game**: [*Game*](game.md)

Defined in: [Board.ts:8](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L8)

___

### grid

• **grid**: (*null* \| *Piece*)[][]

Defined in: [Board.ts:9](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L9)

## Methods

### getPieceByA1

▸ **getPieceByA1**(`a1`: *string*): *null* \| *Piece*

Returns the piece at the given A1-notation-coordinates or null if no piece is found there.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:38](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L38)

___

### getPieceByPosition

▸ **getPieceByPosition**(`position`: [*Position*](position.md)): *null* \| *Piece*

Returns the piece at the given Position or null if no piece is found there.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:31](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L31)

___

### getPieceByXY

▸ **getPieceByXY**(`x`: *number*, `y`: *number*): *null* \| *Piece*

Returns the piece at the given XY-coordinates or null if no piece is found there.

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** *null* \| *Piece*

Defined in: [Board.ts:24](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L24)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

Updates the board instance based on the information contained within a provided Move instance.

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Defined in: [Board.ts:65](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L65)

___

### registerSwap

▸ **registerSwap**(`move`: [*Move*](move.md)): *void*

Updates the board instance based on the information contained within a provided Move instance that is known to make
out a swap (used for castling moves).

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Defined in: [Board.ts:77](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L77)

___

### removePiece

▸ **removePiece**(`piece`: *null* \| *Piece*): *void*

Removes a piece from the board.
This method does not check legality or whether this action is part of a move in the game.

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *null* \| *Piece* |

**Returns:** *void*

Defined in: [Board.ts:55](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L55)

___

### setPiece

▸ **setPiece**(`piece`: *Piece*): *void*

Sets a piece to the board.

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *Piece* |

**Returns:** *void*

Defined in: [Board.ts:46](https://github.com/bemoje/chess/blob/fba4a91/src/Board.ts#L46)
