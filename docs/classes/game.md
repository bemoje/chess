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
- [forEachValidMove](game.md#foreachvalidmove)
- [forEachWhitePiece](game.md#foreachwhitepiece)
- [makeMove](game.md#makemove)
- [toJSON](game.md#tojson)
- [fromJSON](game.md#fromjson)

## Constructors

### constructor

\+ **new Game**(): [*Game*](game.md)

Returns an instance of Game

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:45](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L45)

## Properties

### black

• **black**: [*Player*](player.md)

Black player

Defined in: [Game.ts:40](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L40)

___

### board

• **board**: [*Board*](board.md)

The game board

Defined in: [Game.ts:30](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L30)

___

### moves

• **moves**: [*Move*](move.md)[]

An array containing all moves made in the game

Defined in: [Game.ts:45](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L45)

___

### white

• **white**: [*Player*](player.md)

White player

Defined in: [Game.ts:35](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L35)

## Accessors

### activePlayer

• get **activePlayer**(): [*Player*](player.md)

Returns whether it is black player's turn to move.

**Returns:** [*Player*](player.md)

Defined in: [Game.ts:74](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L74)

___

### isBlacksTurnToMove

• get **isBlacksTurnToMove**(): *boolean*

Returns whether it is black player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:67](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L67)

___

### isWhitesTurnToMove

• get **isWhitesTurnToMove**(): *boolean*

Returns whether it is white player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:60](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L60)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

Returns a deep clone of the game instance.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:216](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L216)

___

### forEachActivePlayerPiece

▸ **forEachActivePlayerPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each piece on the board belonging to the player whose turn it is to move.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:134](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L134)

___

### forEachBlackPiece

▸ **forEachBlackPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each black piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:117](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L117)

___

### forEachPiece

▸ **forEachPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:84](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L84)

___

### forEachValidMove

▸ **forEachValidMove**(`f`: (`position?`: [*Position*](position.md), `piece?`: *Piece*) => *boolean* \| *void*, `pieceOrPosition?`: *Piece* \| [*Position*](position.md)): *boolean* \| *void*

Iterate each valid move position for either all active player pieces or a given piece.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`position?`: [*Position*](position.md), `piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |
`pieceOrPosition?` | *Piece* \| [*Position*](position.md) | only iterate a single piece's valid move positions.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:149](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L149)

___

### forEachWhitePiece

▸ **forEachWhitePiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each white piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:100](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L100)

___

### makeMove

▸ **makeMove**(`pieceOrPosition`: *Piece* \| [*Position*](position.md), `position`: [*Position*](position.md), `skipValidation?`: *boolean*): *void*

Moves a piece on the board.
If the target position already has a piece belonging to the opposing player, it is removed from the board.

**`throws`** {Error} on invalid move, unless `skipValidation` is true.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pieceOrPosition` | *Piece* \| [*Position*](position.md) | The Piece to move.   |
`position` | [*Position*](position.md) | The Position to move to.   |
`skipValidation?` | *boolean* | skips validation of the move's legality according to the rules of the game. This is used internally for performance reasons when cloning a game, repeating the moves that were previously validated.    |

**Returns:** *void*

Defined in: [Game.ts:181](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L181)

___

### toJSON

▸ **toJSON**(): *string*

Stringifies the necessary data for reconstructing the game.

**Returns:** *string*

Defined in: [Game.ts:235](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L235)

___

### fromJSON

▸ `Static`**fromJSON**(`data`: *string*): [*Game*](game.md)

Recreates a Game instance from a previously stringified Game instance.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *string* |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:12](https://github.com/bemoje/chess/blob/203a32d/src/Game.ts#L12)
