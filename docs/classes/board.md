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
- [removePiece](board.md#removepiece)

## Constructors

### constructor

\+ **new Board**(`game`: [*Game*](game.md)): [*Board*](board.md)

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*Game*](game.md) |

**Returns:** [*Board*](board.md)

Defined in: [src/Board.ts:10](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L10)

## Properties

### game

• **game**: [*Game*](game.md)

Defined in: [src/Board.ts:9](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L9)

___

### grid

• **grid**: (*null* \| *Piece*)[][]

Defined in: [src/Board.ts:10](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L10)

## Methods

### getPieceByA1

▸ **getPieceByA1**(`a1`: *string*): *null* \| *Piece*

Returns the piece at the given A1-notation-coordinates or null if no piece is found there.

#### Parameters:

Name | Type |
:------ | :------ |
`a1` | *string* |

**Returns:** *null* \| *Piece*

Defined in: [src/Board.ts:51](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L51)

___

### getPieceByPosition

▸ **getPieceByPosition**(`position`: [*Position*](position.md)): *null* \| *Piece*

Returns the piece at the given Position or null if no piece is found there.

#### Parameters:

Name | Type |
:------ | :------ |
`position` | [*Position*](position.md) |

**Returns:** *null* \| *Piece*

Defined in: [src/Board.ts:59](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L59)

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

Defined in: [src/Board.ts:44](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L44)

___

### registerMove

▸ **registerMove**(`move`: [*Move*](move.md)): *void*

Updates the board instance based on the information contained within a provided Move instance.

#### Parameters:

Name | Type |
:------ | :------ |
`move` | [*Move*](move.md) |

**Returns:** *void*

Defined in: [src/Board.ts:25](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L25)

___

### removePiece

▸ **removePiece**(`piece`: *Piece*): *void*

Removes a piece from the board.

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *Piece* |

**Returns:** *void*

Defined in: [src/Board.ts:36](https://github.com/bemoje/chess/blob/6d332b1/src/Board.ts#L36)
