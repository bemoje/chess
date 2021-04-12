[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Move

# Class: Move

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

Name | Type | Default value |
:------ | :------ | :------ |
`piece` | *Piece* | - |
`to` | [*Position*](position.md) | - |
`takes` | *null* \| *Piece* | null |

**Returns:** [*Move*](move.md)

Defined in: [Move.ts:8](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L8)

## Properties

### from

• **from**: [*Position*](position.md)

Defined in: [Move.ts:7](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L7)

___

### piece

• **piece**: *Piece*

Defined in: [Move.ts:5](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L5)

___

### takes

• **takes**: *null* \| *Piece*

Defined in: [Move.ts:6](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L6)

___

### to

• **to**: [*Position*](position.md)

Defined in: [Move.ts:8](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L8)

## Methods

### toJSON

▸ **toJSON**(): *number*[][]

**Returns:** *number*[][]

Defined in: [Move.ts:22](https://github.com/bemoje/chess/blob/203a32d/src/Move.ts#L22)
