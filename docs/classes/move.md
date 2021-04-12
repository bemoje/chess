[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Move

# Class: Move

A class that represents a move in a chess Game.

## Table of contents

### Constructors

- [constructor](move.md#constructor)

### Properties

- [from](move.md#from)
- [piece](move.md#piece)
- [takes](move.md#takes)
- [to](move.md#to)

### Methods

- [toJSON](move.md#tojson)

## Constructors

### constructor

\+ **new Move**(`piece`: *Piece*, `to`: [*Position*](position.md), `takes?`: *null* \| *Piece*): [*Move*](move.md)

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`piece` | *Piece* | - | The Piece that made the move.   |
`to` | [*Position*](position.md) | - | The Position where the Piece was moved to.   |
`takes` | *null* \| *Piece* | null | The Piece that was taken out by the move, if any.    |

**Returns:** [*Move*](move.md)

Defined in: [Move.ts:26](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L26)

## Properties

### from

• **from**: [*Position*](position.md)

The Position where the Piece was move was from.

Defined in: [Move.ts:21](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L21)

___

### piece

• **piece**: *Piece*

The Piece that made the move.

Defined in: [Move.ts:11](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L11)

___

### takes

• **takes**: *null* \| *Piece*

The Piece that was taken out by the move, if any.

Defined in: [Move.ts:16](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L16)

___

### to

• **to**: [*Position*](position.md)

The Position where the Piece was move was to.

Defined in: [Move.ts:26](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L26)

## Methods

### toJSON

▸ **toJSON**(): *number*[]

Stringifies the data necessary for completely reconstructing the Move instance.

**Returns:** *number*[]

Defined in: [Move.ts:48](https://github.com/bemoje/chess/blob/3d08551/src/Move.ts#L48)
