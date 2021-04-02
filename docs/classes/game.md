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

- [pieces](game.md#pieces)
- [players](game.md#players)

### Methods

- [clone](game.md#clone)
- [makeMove](game.md#makemove)

## Constructors

### constructor

\+ **new Game**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [src/Game.ts:11](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L11)

## Properties

### black

• **black**: [*Player*](player.md)

Defined in: [src/Game.ts:10](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L10)

___

### board

• **board**: [*Board*](board.md)

Defined in: [src/Game.ts:8](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L8)

___

### moves

• **moves**: [*Move*](move.md)[]

Defined in: [src/Game.ts:11](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L11)

___

### white

• **white**: [*Player*](player.md)

Defined in: [src/Game.ts:9](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L9)

## Accessors

### pieces

• get **pieces**(): *Piece*[]

**Returns:** *Piece*[]

Defined in: [src/Game.ts:24](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L24)

___

### players

• get **players**(): [*Player*](player.md)[]

**Returns:** [*Player*](player.md)[]

Defined in: [src/Game.ts:20](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L20)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

**Returns:** [*Game*](game.md)

Defined in: [src/Game.ts:32](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L32)

___

### makeMove

▸ **makeMove**(`piece`: *Piece*, `to`: [*Position*](position.md), `_skipValidation?`: *boolean*): [*Move*](move.md)

#### Parameters:

Name | Type |
:------ | :------ |
`piece` | *Piece* |
`to` | [*Position*](position.md) |
`_skipValidation?` | *boolean* |

**Returns:** [*Move*](move.md)

Defined in: [src/Game.ts:28](https://github.com/bemoje/chess/blob/e03f9b9/src/Game.ts#L28)
