[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Game

# Class: Game

## Table of contents

### Constructors

- [constructor](game.md#constructor)

### Properties

- [black](game.md#black)
- [board](game.md#board)
- [moves](game.md#moves)
- [white](game.md#white)

### Accessors

- [activePlayer](game.md#activeplayer)
- [isBlacksTurnToMove](game.md#isblacksturntomove)
- [isWhitesTurnToMove](game.md#iswhitesturntomove)

### Methods

- [clone](game.md#clone)
- [forEachActivePlayerPiece](game.md#foreachactiveplayerpiece)
- [forEachBlackPiece](game.md#foreachblackpiece)
- [forEachPiece](game.md#foreachpiece)
- [forEachWhitePiece](game.md#foreachwhitepiece)
- [makeMove](game.md#makemove)

## Constructors

### constructor

\+ **new Game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:12](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L12)

## Properties

### black

• **black**: [*Player*](player.md)

Defined in: [Game.ts:11](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L11)

___

### board

• **board**: [*Board*](board.md)

Defined in: [Game.ts:9](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L9)

___

### moves

• **moves**: [*Move*](move.md)[]

Defined in: [Game.ts:12](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L12)

___

### white

• **white**: [*Player*](player.md)

Defined in: [Game.ts:10](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L10)

## Accessors

### activePlayer

• get **activePlayer**(): [*Player*](player.md)

Returns whether it is black player's turn to move.

**Returns:** [*Player*](player.md)

Defined in: [Game.ts:38](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L38)

___

### isBlacksTurnToMove

• get **isBlacksTurnToMove**(): *boolean*

Returns whether it is black player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:31](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L31)

___

### isWhitesTurnToMove

• get **isWhitesTurnToMove**(): *boolean*

Returns whether it is white player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:24](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L24)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

Returns a deep clone of the game instance.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:138](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L138)

___

### forEachActivePlayerPiece

▸ **forEachActivePlayerPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *void*

Iterate each piece on the board belonging to the player whose turn it is to move.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.    |

**Returns:** *void*

Defined in: [Game.ts:90](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L90)

___

### forEachBlackPiece

▸ **forEachBlackPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *void*

Iterate each black piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.    |

**Returns:** *void*

Defined in: [Game.ts:76](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L76)

___

### forEachPiece

▸ **forEachPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *void*

Iterate each piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.    |

**Returns:** *void*

Defined in: [Game.ts:47](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L47)

___

### forEachWhitePiece

▸ **forEachWhitePiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *void*

Iterate each white piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.    |

**Returns:** *void*

Defined in: [Game.ts:62](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L62)

___

### makeMove

▸ **makeMove**(`piece`: *Piece*, `position`: [*Position*](position.md), `skipValidation?`: *boolean*): *void*

Moves a piece on the board.
If the target position already has a piece belonging to the opposing player, it is removed from the board.

**`throws`** {Error} on invalid move, unless `skipValidation` is true.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`piece` | *Piece* | The Piece to move.   |
`position` | [*Position*](position.md) | The Position to move to.   |
`skipValidation?` | *boolean* | skips validation of the move's legality according to the rules of the game. This is used internally for performance reasons when cloning a game, repeating the moves that were previously validated.    |

**Returns:** *void*

Defined in: [Game.ts:107](https://github.com/bemoje/chess/blob/1c5c430/src/Game.ts#L107)
