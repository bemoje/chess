const A_CHAR_CODE = 65

function from_X_to_A(x: number): string {
	return (x + 1).toString()
}

function from_Y_to_1(y: number): string {
	return (y + A_CHAR_CODE).toString()
}

function from_A_to_X(a: string): number {
	return a.toUpperCase().charCodeAt(0) - A_CHAR_CODE
}

function from_1_to_Y(n: string): number {
	return Number(n.charAt(0)) - 1
}

function from_XY_to_A1(xy: Array<number> | Position): string {
	return from_X_to_A(xy[0]) + from_Y_to_1(xy[1])
}

function from_A1_to_XY(a1: string): Array<number> | Position {
	return [from_A_to_X(a1.charAt(0)), from_1_to_Y(a1.charAt(1))]
}

/**
 * Determines whether the argument is a positive integer [number] where 0 <= arg < 8
 * @param {*} n
 * @returns {boolean}
 */
function isValidXYCoordinatePoint(n: number): boolean {
	return n >= 0 && n < 8
}

/**
 * Determines whether both points in a coordinate is a positive integer [number] where 0 <= arg < 8
 */
function isValidXYCoordinate(coordinate: Array<number> | Position): boolean {
	return (
		isValidXYCoordinatePoint(coordinate[0]) &&
		isValidXYCoordinatePoint(coordinate[1])
	)
}

/**
 * Determines whether the argument is a valid A1 notation chess board coordinate string
 */
function isValidA1Coordinate(a1: string): boolean {
	return isValidXYCoordinate(from_A1_to_XY(a1))
}

/**
 * Returns an assertion function that expects [string] 'expectation' evaluated by [Function] 'validate'
 * @param {string} expectation
 * @param {Function} validate
 * @returns {Function} function (arg, name = 'arg')
 */
function createAsserter(expectation: string, validate: Function): Function {
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

const assertValidXYCoordinatePoint: Function = createAsserter(
	'a positive integer between 0 and 7',
	isValidXYCoordinatePoint
)

const assertValidXYCoordinate: Function = createAsserter(
	'two positive integers between 0 and 7',
	isValidXYCoordinate
)

const assertValidA1Coordinate: Function = createAsserter(
	'a valid A1 notation chess board coordinate string',
	isValidA1Coordinate
)

export class Position extends Array {
	static fromA1Notation(a1: string): Position {
		const xy = from_A1_to_XY(a1)
		return new Position(xy[0], xy[1])
	}

	/**
	 * @param x - a positive integer between 0 and 8 both inclusive.
	 * @param y - a positive integer between 0 and 8 both inclusive.
	 */
	constructor(x: number, y: number, _skipValidation: boolean = false) {
		if (!_skipValidation) {
			assertValidXYCoordinate([x, y], 'x and y')
		}
		super(2)
		this[0] = x
		this[1] = y
	}

	get x(): number {
		return this[0]
	}

	get y(): number {
		return this[1]
	}

	/**
	 * Returns the XY board position in A1 notation.
	 */
	get A1(): string {
		return from_XY_to_A1([this.x, this.y])
	}

	/**
	 * Returns the XY board position in A1 notation.
	 */
	toString(): string {
		return this.A1
	}

	clone(): Position {
		return new Position(this.x, this.y, true)
	}
}

export class Player {
	game: Game
	color: string
	pieces: Array<Piece>

	constructor(game: Game, color: string, pieces?: Array<Piece>) {
		Object.defineProperty(this, 'game', {
			enumerable: false,
			value: game,
		})

		this.color = color

		let row1: string, row2: string

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
}

export class Board extends Array {
	game: Game

	constructor(game: Game) {
		super(8)

		Object.defineProperty(this, 'game', {
			enumerable: false,
			value: game,
		})

		let i = 0
		while (i < 8) {
			this[i] = new Array(8).fill(null, 0, 7)
			i++
		}
	}

	_registerMove(move: Move): void {
		const currPos = move.fromPosition
		const newPos = move.toPosition
		const piece = this[currPos.y][currPos.x]
		this[newPos.y][newPos.x] = piece
		this[currPos.y][currPos.x] = null
	}

	getPieceByXY(x: number, y: number): Piece {
		return this[y][x]
	}

	getPieceByA1(a1: string): Piece {
		const [x, y] = from_A1_to_XY(a1)
		return this.getPieceByXY(x, y)
	}

	getPieceByPosition(position: Position): Piece {
		return this.getPieceByXY(position.x, position.y)
	}

	clone(game: Game = this.game): Board {
		const board = new Board(game)
		let i = 0
		while (i < 8) {
			let j = 0
			while (j < 8) {
				board[i][j] = this[i][j]
				j++
			}
			i++
		}
		return board
	}
}

abstract class Piece {
	protected _position: Position
	player: Player

	taken: boolean = false
	moves: Array<Move> = []

	constructor(player: Player, position: Position) {
		Object.defineProperty(this, 'player', {
			enumerable: false,
			value: player,
		})

		this.position = position
	}

	get position(): Position {
		return this._position.clone()
	}

	set position(position: Position) {
		this._position = position
		this.player.game.board[this._position.y][this._position.x] = this
	}

	get type(): string {
		return this.constructor.name
	}

	_registerMove(move: Move): void {
		this.moves.push(move)
		this.position = move.toPosition.clone()
		this.player.game.board._registerMove(move)
	}

	abstract isLegalMove(toPosition: Position): boolean
}

export class King extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}

export class Queen extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}

export class Bishop extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}

export class Knight extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}

export class Rook extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}
export class Pawn extends Piece {
	isLegalMove(toPosition: Position): boolean {
		// TODO: implementation
		const pos = this.position
		return true
	}
}

export class Move {
	piece: Piece
	fromPosition: Position
	toPosition: Position

	/**
	 * @param {Piece} piece
	 * @param {Position} toPosition
	 */
	constructor(piece: Piece, toPosition: Position) {
		this.piece = piece
		this.fromPosition = piece.position.clone()
		this.toPosition = toPosition.clone()
		piece._registerMove(this)
	}
}

export class Game {
	board: Board
	white: Player
	black: Player

	moves: Array<Move> = []

	constructor() {
		this.board = new Board(this)
		this.white = new Player(this, 'white')
		this.black = new Player(this, 'black')
	}

	get players(): Array<Player> {
		return [this.black, this.white]
	}

	get pieces(): Array<Piece> {
		return [...this.black.pieces, ...this.white.pieces]
	}

	makeMove(piece: Piece, toPosition: Position): Move {
		return new Move(piece, toPosition)
	}

	clone(): Game {
		const game = new Game()
		const moves = this.moves
		const l = moves.length
		for (let i = 0; i < l; i++) {
			game.makeMove(moves[i].piece, moves[i].toPosition)
		}
		return game
	}
}

const game = new Game()

console.log(game)

console.log(
	game.makeMove(game.board.getPieceByA1('E1'), Position.fromA1Notation('C3'))
)

console.log(game.pieces)
