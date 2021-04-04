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

### Methods

- [clone](game.md#clone)
- [forEachPiece](game.md#foreachpiece)
- [makeMove](game.md#makemove)

## Constructors

### constructor

\+ **new Game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:11](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L11)

## Properties

### black

• **black**: [*Player*](player.md)

Defined in: [Game.ts:10](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L10)

___

### board

• **board**: [*Board*](board.md)

Defined in: [Game.ts:8](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L8)

___

### moves

• **moves**: [*Move*](move.md)[]

Defined in: [Game.ts:11](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L11)

___

### white

• **white**: [*Player*](player.md)

Defined in: [Game.ts:9](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L9)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

Returns a deep clone of the game instance.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:56](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L56)

___

### forEachPiece

▸ **forEachPiece**(`f`: (`piece`: *Piece*) => *boolean* \| *void*): *void*

Iterate each piece on the board very efficiently.
If the callback function returns true, iteration ends.

#### Parameters:

Name | Type |
:------ | :------ |
`f` | (`piece`: *Piece*) => *boolean* \| *void* |

**Returns:** *void*

Defined in: [Game.ts:24](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L24)

___

### makeMove

▸ **makeMove**(`piece`: *Piece*, `to`: [*Position*](position.md), `skipValidation?`: *boolean*): *void*

Moves a piece on the board.
If the target position already has a piece belonging to the opposing player, it is removed from the board.
Allows for skipping validation of the move's legality according to the rules of the game. This is used internally
for performance reasons when cloning the game, repeating the moves that were previously checked.

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *Piece* |
`to` | [*Position*](position.md) |
`skipValidation?` | *boolean* |

**Returns:** *void*

Defined in: [Game.ts:40](https://github.com/bemoje/chess/blob/5a6d4ac/src/Game.ts#L40)
