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

Defined in: [Move.ts:8](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L8)

## Properties

### from

• **from**: [*Position*](position.md)

Defined in: [Move.ts:7](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L7)

___

### piece

• **piece**: *Piece*

Defined in: [Move.ts:5](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L5)

___

### takes

• **takes**: *null* \| *Piece*

Defined in: [Move.ts:6](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L6)

___

### to

• **to**: [*Position*](position.md)

Defined in: [Move.ts:8](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L8)

## Methods

### toJSON

▸ **toJSON**(): *number*[]

Stringifies the data necessary for completely reconstructing the Move instance.

**Returns:** *number*[]

Defined in: [Move.ts:25](https://github.com/bemoje/chess/blob/7af4530/src/Move.ts#L25)
