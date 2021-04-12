[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Player

# Class: Player

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

#### Parameters:

Name | Type |
:------ | :------ |
`game` | [*Game*](game.md) |
`color` | *string* |

**Returns:** [*Player*](player.md)

Defined in: [Player.ts:15](https://github.com/bemoje/chess/blob/a1ccdde/src/Player.ts#L15)

## Properties

### color

• **color**: *string*

Defined in: [Player.ts:14](https://github.com/bemoje/chess/blob/a1ccdde/src/Player.ts#L14)

___

### game

• **game**: [*Game*](game.md)

Defined in: [Player.ts:13](https://github.com/bemoje/chess/blob/a1ccdde/src/Player.ts#L13)

___

### pieces

• **pieces**: *Piece*[]

Defined in: [Player.ts:15](https://github.com/bemoje/chess/blob/a1ccdde/src/Player.ts#L15)

## Accessors

### moves

• get **moves**(): [*Move*](move.md)[]

Returns an array of Move instances that describe moves of this Piece.

**Returns:** [*Move*](move.md)[]

Defined in: [Player.ts:55](https://github.com/bemoje/chess/blob/a1ccdde/src/Player.ts#L55)
