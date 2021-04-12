[bemoje-chess-engine](../README.md) / [Exports](../modules.md) / Game

# Class: Game

The default exported class from which the chess game is controlled.

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
- [ensurePiece](game.md#ensurepiece)
- [ensurePosition](game.md#ensureposition)
- [forEachActiveBlackPiece](game.md#foreachactiveblackpiece)
- [forEachActivePiece](game.md#foreachactivepiece)
- [forEachActiveWhitePiece](game.md#foreachactivewhitepiece)
- [forEachCurrentPlayerActivePiece](game.md#foreachcurrentplayeractivepiece)
- [forEachValidMove](game.md#foreachvalidmove)
- [move](game.md#move)
- [serialize](game.md#serialize)
- [toJSON](game.md#tojson)
- [deserialze](game.md#deserialze)
- [fromArray](game.md#fromarray)
- [fromJSON](game.md#fromjson)
- [parseJSON](game.md#parsejson)

## Constructors

### constructor

\+ **new Game**(): [*Game*](game.md)

Creates and initializes a new chess game.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:103](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L103)

## Properties

### black

• **black**: [*Player*](player.md)

Black player.

Defined in: [Game.ts:98](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L98)

___

### board

• **board**: [*Board*](board.md)

The game board.

Defined in: [Game.ts:88](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L88)

___

### moves

• **moves**: [*Move*](move.md)[]

An array containing all moves made in the game.

Defined in: [Game.ts:103](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L103)

___

### white

• **white**: [*Player*](player.md)

White player.

Defined in: [Game.ts:93](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L93)

## Accessors

### activePlayer

• get **activePlayer**(): [*Player*](player.md)

Returns whether it is black player's turn to move.

**Returns:** [*Player*](player.md)

Defined in: [Game.ts:132](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L132)

___

### isBlacksTurnToMove

• get **isBlacksTurnToMove**(): *boolean*

Returns whether it is black player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:125](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L125)

___

### isWhitesTurnToMove

• get **isWhitesTurnToMove**(): *boolean*

Returns whether it is white player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:118](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L118)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

Returns a deep clone of the game instance.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:302](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L302)

___

### ensurePiece

▸ `Private`**ensurePiece**(`from?`: *string* \| *Piece* \| [*Position*](position.md) \| *number*[]): *null* \| *Piece*

Get a Piece instance from the board by either Position, an A1 string or XY-coordinates

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`from?` | *string* \| *Piece* \| [*Position*](position.md) \| *number*[] | a Position instance, A1-notation string or XY-coordinate-array. If a Piece instance is passed, it is returned.    |

**Returns:** *null* \| *Piece*

Defined in: [Game.ts:220](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L220)

___

### ensurePosition

▸ `Private`**ensurePosition**(`from`: *string* \| [*Position*](position.md) \| *number*[]): [*Position*](position.md)

Ensures the argument is converted into a Position instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`from` | *string* \| [*Position*](position.md) \| *number*[] | a Position instance, A1-notation string or XY-coordinate-array.    |

**Returns:** [*Position*](position.md)

Defined in: [Game.ts:207](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L207)

___

### forEachActiveBlackPiece

▸ `Private`**forEachActiveBlackPiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each black piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:177](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L177)

___

### forEachActivePiece

▸ **forEachActivePiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:142](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L142)

___

### forEachActiveWhitePiece

▸ `Private`**forEachActiveWhitePiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each white piece on the board.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:160](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L160)

___

### forEachCurrentPlayerActivePiece

▸ **forEachCurrentPlayerActivePiece**(`f`: (`piece?`: *Piece*) => *boolean* \| *void*): *boolean* \| *void*

Iterate each piece on the board belonging to the player whose turn it is to move.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:194](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L194)

___

### forEachValidMove

▸ **forEachValidMove**(`f`: (`position?`: [*Position*](position.md), `piece?`: *Piece*) => *boolean* \| *void*, `pieceOrCoordinate?`: *string* \| *Piece* \| [*Position*](position.md) \| *number*[]): *boolean* \| *void*

Iterate each valid move position for either all active player pieces or a given piece.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | (`position?`: [*Position*](position.md), `piece?`: *Piece*) => *boolean* \| *void* | a callback function to invoke for each Piece. If it returns true, iteration ends.   |
`pieceOrCoordinate?` | *string* \| *Piece* \| [*Position*](position.md) \| *number*[] | only iterate a single piece's valid move positions. Can be the Piece to move, or where to find the piece which can be a Position instance, XY-array or A1-notation string.   |

**Returns:** *boolean* \| *void*

true if iteration was ended before completion.

Defined in: [Game.ts:238](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L238)

___

### move

▸ **move**(`pieceOrCoordinate`: *Piece* \| [*Position*](position.md), `to`: *string* \| [*Position*](position.md) \| *number*[], `skipValidation?`: *boolean*): [*Game*](game.md)

Moves a piece on the board.
If the target position already has a piece belonging to the opposing player, it is removed from the board.

**`throws`** {Error} on invalid move, unless `skipValidation` is true.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pieceOrCoordinate` | *Piece* \| [*Position*](position.md) | The Piece to move, or where to find the piece which can be a Position instance, XY-array or A1-notation string.   |
`to` | *string* \| [*Position*](position.md) \| *number*[] | Where to move to.   |
`skipValidation?` | *boolean* | skips validation of the move's legality according to the rules of the game. This is used internally for performance reasons when cloning a game, which repeats the moves that were previously validated.   |

**Returns:** [*Game*](game.md)

self - is chainable.

Defined in: [Game.ts:268](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L268)

___

### serialize

▸ **serialize**(): *Uint8Array*

Serializes the data necessary for completely reconstructing the Game instance to binary.

**`see`** Game.deserialize()

**Returns:** *Uint8Array*

Defined in: [Game.ts:341](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L341)

___

### toJSON

▸ **toJSON**(): *number*[]

Method used by JSON.stringify to return string-serialized data necessary for completely reconstructing the Game
instance.

**`see`** Game.fromJSON()

**Returns:** *number*[]

Defined in: [Game.ts:323](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L323)

___

### deserialze

▸ `Static`**deserialze**(`data`: *Uint8Array*, `skipValidation?`: *boolean*): [*Game*](game.md)

Recreates a Game instance from binary data.

**`see`** Game.prototype.serialize()

**`throws`** {Error} on invalid JSON data.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`data` | *Uint8Array* | - | A previously stringified Game instance.   |
`skipValidation` | *boolean* | false | skips validation of the move's legality according to the rules of the game as well as the data.   |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:81](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L81)

___

### fromArray

▸ `Static` `Private`**fromArray**(`data`: *number*[], `skipValidation`: *boolean*): [*Game*](game.md)

Recreates a Game instance from a previously parsed stringified or serialized Game instance converted to array.
Used internally by @see Game.fromJSON() and @see Game.deserialize()

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *number*[] | A previously stringified Game instance.   |
`skipValidation` | *boolean* | skips validation of the move's legality according to the rules of the game.    |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:49](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L49)

___

### fromJSON

▸ `Static`**fromJSON**(`data`: *string*, `skipValidation?`: *boolean*): [*Game*](game.md)

Recreates a Game instance from a previously stringified Game instance.

**`see`** Game.prototype.toJSON()

**`throws`** {Error} on invalid JSON data.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`data` | *string* | - | A previously stringified Game instance.   |
`skipValidation` | *boolean* | false | skips validation of the move's legality according to the rules of the game as well as the data.   |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:69](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L69)

___

### parseJSON

▸ `Static` `Private`**parseJSON**(`data`: *string*, `skipValidation`: *boolean*): *number*[]

Parse and optionally validate JSON data.

**`throws`** {TypeError} on invalid JSON data.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* | A previously stringified Game instance.   |
`skipValidation` | *boolean* | skips validation of the move's legality according to the rules of the game.   |

**Returns:** *number*[]

Defined in: [Game.ts:19](https://github.com/bemoje/chess/blob/3d08551/src/Game.ts#L19)
