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

Defined in: [Game.ts:106](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L106)

## Properties

### black

• **black**: [*Player*](player.md)

Black player.

Defined in: [Game.ts:101](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L101)

___

### board

• **board**: [*Board*](board.md)

The game board.

Defined in: [Game.ts:91](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L91)

___

### moves

• **moves**: [*Move*](move.md)[]

An array containing all moves made in the game.

Defined in: [Game.ts:106](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L106)

___

### white

• **white**: [*Player*](player.md)

White player.

Defined in: [Game.ts:96](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L96)

## Accessors

### activePlayer

• get **activePlayer**(): [*Player*](player.md)

Returns whether it is black player's turn to move.

**Returns:** [*Player*](player.md)

Defined in: [Game.ts:135](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L135)

___

### isBlacksTurnToMove

• get **isBlacksTurnToMove**(): *boolean*

Returns whether it is black player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:128](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L128)

___

### isWhitesTurnToMove

• get **isWhitesTurnToMove**(): *boolean*

Returns whether it is white player's turn to move.

**Returns:** *boolean*

Defined in: [Game.ts:121](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L121)

## Methods

### clone

▸ **clone**(): [*Game*](game.md)

Returns a deep clone of the game instance.

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:306](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L306)

___

### ensurePiece

▸ `Private`**ensurePiece**(`from?`: *string* \| *Piece* \| [*Position*](position.md) \| *number*[]): *null* \| *Piece*

Get a Piece instance from the board by either Position, an A1 string or XY-coordinates

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`from?` | *string* \| *Piece* \| [*Position*](position.md) \| *number*[] | a Position instance, A1-notation string or XY-coordinate-array. If a Piece instance is passed, it is returned.    |

**Returns:** *null* \| *Piece*

Defined in: [Game.ts:223](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L223)

___

### ensurePosition

▸ `Private`**ensurePosition**(`from`: *string* \| [*Position*](position.md) \| *number*[]): [*Position*](position.md)

Ensures the argument is converted into a Position instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`from` | *string* \| [*Position*](position.md) \| *number*[] | a Position instance, A1-notation string or XY-coordinate-array.    |

**Returns:** [*Position*](position.md)

Defined in: [Game.ts:210](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L210)

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

Defined in: [Game.ts:180](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L180)

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

Defined in: [Game.ts:145](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L145)

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

Defined in: [Game.ts:163](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L163)

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

Defined in: [Game.ts:197](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L197)

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

Defined in: [Game.ts:241](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L241)

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
`skipValidation?` | *boolean* | skips validation of the move's legality according to the rules of the game. This is used internally for performance reasons when cloning a game, which repeats the moves that were previously validated.    |

**Returns:** [*Game*](game.md)

self - is chainable.

Defined in: [Game.ts:272](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L272)

___

### serialize

▸ **serialize**(): *Uint8Array*

Serializes the data necessary for completely reconstructing the Game instance to binary.

**`see`** Game.deserialize()

**Returns:** *Uint8Array*

Defined in: [Game.ts:345](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L345)

___

### toJSON

▸ **toJSON**(): *number*[]

Method used by JSON.stringify to return string-serialized data necessary for completely reconstructing the Game
instance.

**`see`** Game.fromJSON()

**Returns:** *number*[]

Defined in: [Game.ts:327](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L327)

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
`skipValidation` | *boolean* | false | skips validation of the move's legality according to the rules of the game as well as the data.    |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:84](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L84)

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

Defined in: [Game.ts:50](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L50)

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
`skipValidation` | *boolean* | false | skips validation of the move's legality according to the rules of the game as well as the data.    |

**Returns:** [*Game*](game.md)

Defined in: [Game.ts:71](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L71)

___

### parseJSON

▸ `Static` `Private`**parseJSON**(`data`: *string*, `skipValidation`: *boolean*): *number*[]

Parse and optionally validate JSON data.

**`throws`** {TypeError} on invalid JSON data.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* | A previously stringified Game instance.   |
`skipValidation` | *boolean* | skips validation of the move's legality according to the rules of the game.    |

**Returns:** *number*[]

Defined in: [Game.ts:20](https://github.com/bemoje/chess/blob/7af4530/src/Game.ts#L20)
