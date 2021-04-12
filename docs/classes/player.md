[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Player

# Class: Player

A class that represents a player in a chess Game.

## Table of contents

### Constructors

- [constructor](player.md#constructor)

### Properties

- [color](player.md#color)
- [game](player.md#game)
- [pieces](player.md#pieces)

### Accessors

- [moves](player.md#moves)

## Constructors

### constructor

\+ **new Player**(`game`: [*Game*](game.md), `color`: *string*): [*Player*](player.md)

**`throws`** {Error} on invalid color.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`game` | [*Game*](game.md) | The game that this Player instance belongs to.   |
`color` | *string* | The color of the player. Can be `white` or `black`.   |

**Returns:** [*Player*](player.md)

Defined in: [Player.ts:29](https://github.com/bemoje/chess/blob/3d08551/src/Player.ts#L29)

## Properties

### color

• **color**: *string*

The color of the player. Can be `white` or `black`.

Defined in: [Player.ts:24](https://github.com/bemoje/chess/blob/3d08551/src/Player.ts#L24)

___

### game

• **game**: [*Game*](game.md)

The game that this Player instance belongs to.

Defined in: [Player.ts:19](https://github.com/bemoje/chess/blob/3d08551/src/Player.ts#L19)

___

### pieces

• **pieces**: *Piece*[]

An array containing the board Pieces that the player has.

Defined in: [Player.ts:29](https://github.com/bemoje/chess/blob/3d08551/src/Player.ts#L29)

## Accessors

### moves

• get **moves**(): [*Move*](move.md)[]

Returns an array of Moves that the player has made.

**Returns:** [*Move*](move.md)[]

Defined in: [Player.ts:74](https://github.com/bemoje/chess/blob/3d08551/src/Player.ts#L74)
