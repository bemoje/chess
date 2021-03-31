const A_CHAR_CODE = 65

function A1_to_XY(a1) {
	assertString(a1, 'a1')
	a1 = a1.toUpperCase()
	const x = a1.charCodeAt(0) - A_CHAR_CODE
	const y = Number(a1.charAt(1)) - 1
	return [x, y]
}

/**
 * Determines whether arg is a string
 * @param {*} arg
 * @returns {boolean}
 */
function isString(arg) {
	return typeof arg === 'string'
}

/**
 * Determines whether the argument is a positive integer [number] where 0 <= arg < 8
 * @param {*} arg
 * @returns {boolean}
 */
function isValidXYCoordinatePoint(arg) {
	return typeof arg === 'number' && arg >= 0 && arg < 8
}

/**
 * Determines whether both points in a coordinate is a positive integer [number] where 0 <= arg < 8
 * @param {Array<*>} coordinate
 * @returns {boolean}
 */
function isValidXYCoordinate(coordinate) {
	return (
		isValidXYCoordinatePoint(coordinate[0]) &&
		isValidXYCoordinatePoint(coordinate[1])
	)
}

/**
 * Determines whether the argument is a valid A1 notation chess board coordinate string
 * @param {*} arg
 * @returns {boolean}
 */
function isValidA1Coordinate(arg) {
	if (Array.isArray(arg) && arg.length === 2) {
		const [x, y] = A1_to_XY(arg)
		return isValidXYCoordinatePoint(x) && isValidXYCoordinatePoint(y)
	}
	return false
}

/**
 * Returns an assertion function that expects [string] 'expectation' evaluated by [Function] 'validate'
 * @param {string} expectation
 * @param {Function} validate
 * @returns {Function} function (arg, name = 'arg')
 */
function createAsserter(expectation, validate) {
	const f = function (arg, name = 'arg') {
		if (!validate(arg)) {
			throw new TypeError(
				`Expected ${name} to be ${expectation}. ${name}: ${arg}`
			)
		}
	}
	Object.defineProperty(f, 'name', {
		value: validate.name.replace(/^is/, 'assert'),
	})
	return f
}

/**
 * @function assertString
 * @param {string} arg
 * @throws {TypeError}
 */
const assertString = createAsserter('a string', isString)

/**
 * @function assertValidXYCoordinatePoint
 * @param {number} arg - a positive integer between 0 and 8 both inclusive.
 * @throws {TypeError}
 */
const assertValidXYCoordinatePoint = createAsserter(
	'a positive integer between 0 and 7',
	isValidXYCoordinatePoint
)

/**
 * @function assertValidXYCoordinate
 * @param {Array<number>} arg - an array of two positive integers between 0 and 8 both inclusive.
 * @throws {TypeError}
 */
const assertValidXYCoordinate = createAsserter(
	'two positive integers between 0 and 7',
	isValidXYCoordinate
)

/**
 * @function assertValidA1Coordinate
 * @param {number} arg - a positive integer between 0 and 8 both inclusive.
 * @throws {TypeError}
 */
const assertValidA1Coordinate = createAsserter(
	'a valid A1 notation chess board coordinate string',
	isValidA1Coordinate
)

export class Position extends Array {
	/**
	 * @param {string} a1
	 */
	static fromA1Notation(a1) {
		return new Position(...A1_to_XY(a1))
	}

	/**
	 * @param {number} x - a positive integer between 0 and 8 both inclusive.
	 */
	constructor(x, y) {
		assertValidXYCoordinate([x, y], 'x and y')
		super(2)
		this[0] = x
		this[1] = y
	}

	get x() {
		return this[0]
	}

	get y() {
		return this[1]
	}

	get letter() {
		return String.fromCharCode(A_CHAR_CODE + this.x)
	}

	get number() {
		return (this.y + 1).toString()
	}

	clone() {
		return new Position(this.x, this.y)
	}

	/**
	 * Returns the XY coordinate in A1 notation.
	 * @returns {string}
	 */
	toString() {
		return this.letter + this.number
	}
}

export class Player {
	/**
	 * @param {string} color
	 */
	constructor(game, color, pieces) {
		Object.defineProperty(this, 'game', {
			enumerable: false,
			value: game,
		})

		this.color = color

		let row1, row2

		if (color === 'white') {
			row1 = '1'
			row2 = '2'
		} else if (color === 'black') {
			row1 = '8'
			row2 = '7'
		} else {
			throw new Error('Invalid color')
		}

		const pos = Position.fromA1Notation

		this.pieces = [
			new King(this, pos('E' + row1)),
			new Queen(this, pos('D' + row1)),
			new Bishop(this, pos('C' + row1)),
			new Bishop(this, pos('F' + row1)),
			new Knight(this, pos('B' + row1)),
			new Knight(this, pos('G' + row1)),
			new Rook(this, pos('A' + row1)),
			new Rook(this, pos('H' + row1)),
			new Pawn(this, pos('A' + row2)),
			new Pawn(this, pos('B' + row2)),
			new Pawn(this, pos('C' + row2)),
			new Pawn(this, pos('D' + row2)),
			new Pawn(this, pos('E' + row2)),
			new Pawn(this, pos('F' + row2)),
			new Pawn(this, pos('G' + row2)),
			new Pawn(this, pos('H' + row2)),
		]
	}

	get king() {
		return this.pieces[0]
	}

	get queen() {
		return this.pieces[1]
	}
}

export class Board extends Array {
	constructor(game) {
		super(8)

		Object.defineProperty(this, 'game', {
			enumerable: false,
			value: game,
		})

		let i = 0
		while (i < 8) {
			this[i] = new Array(8)
			i++
		}
	}
}

export class Piece {
	taken = false
	moves = []

	/**
	 * @param {Player} player
	 * @param {Array<number>} player
	 */
	constructor(player, position) {
		Object.defineProperty(this, 'player', {
			enumerable: false,
			value: player,
		})

		this.color = player.color
		this.position = position
	}

	get position() {
		return this._position
	}

	set position(position) {
		this._position = position
		this.player.game.board[this._position.y][this._position.x] = this
	}

	get type() {
		return this.constructor.name
	}

	/**
	 * @param {Move} move
	 */
	_registerMove(move) {
		this.moves.push(move)
		this.position = move.toPosition
		// update board
	}
}

export class King extends Piece {}
export class Queen extends Piece {}
export class Bishop extends Piece {}
export class Knight extends Piece {}
export class Rook extends Piece {}
export class Pawn extends Piece {}

export class Move {
	/**
	 * @param {Piece} piece
	 * @param {Position} toPosition
	 */
	constructor(piece, toPosition) {
		this.piece = piece
		this.fromPosition = piece.position.clone()
		this.toPosition = toPosition
		piece._registerMove(this)
	}
}

export class Game {
	moves = []

	constructor() {
		this.board = new Board(this)
		this.white = new Player(this, 'white')
		this.black = new Player(this, 'black')
	}

	get players() {
		return [this.black, this.white]
	}

	get pieces() {
		return [...this.black.pieces, ...this.white.pieces]
	}

	/**
	 * @param {Piece} piece
	 * @param {Position} toPosition
	 */
	makeMove(piece, toPosition) {
		return new Move(piece, toPosition)
	}
}

const game = new Game()

console.log(game)

console.log(game.makeMove(game.white.king, Position.fromA1Notation('C3')))

console.log(game.pieces)
