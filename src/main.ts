/**
 * Returns the numeric difference between to numbers.
 */
function numericDifference(n1: number, n2: number): number {
	const dist = n1 - n2
	return dist < 0 ? dist * -1 : dist
}

const A_CHAR_CODE = 'A'.charCodeAt(0)

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
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 */
function createAssertFunction(
	expectedToBe: string,
	validate: (arg: any) => boolean
): (arg: any, name: string) => void {
	const f = function (arg: any, name = 'arg') {
		if (!validate(arg)) {
			throw new TypeError(
				`Expected ${name} to be ${expectedToBe}. ${name}: ${arg}`
			)
		}
	}
	Object.defineProperty(f, 'name', {
		value: validate.name.replace(/^is/, 'assert'),
	})
	return f
}

const assertValidXYCoordinatePoint: Function = createAssertFunction(
	'a positive integer between 0 and 7',
	isValidXYCoordinatePoint
)

const assertValidXYCoordinate: Function = createAssertFunction(
	'two positive integers between 0 and 7',
	isValidXYCoordinate
)

const assertValidA1Coordinate: Function = createAssertFunction(
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

	private getModulation(xBy: number, yBy: number): Position | null {
		try {
			return new Position(this.x + xBy, this.y + yBy)
		} catch (e) {
			return null
		}
	}

	getUp(): Position | null {
		return this.getModulation(0, 1)
	}

	getDown(): Position | null {
		return this.getModulation(0, -1)
	}

	getLeft(): Position | null {
		return this.getModulation(-1, 0)
	}

	getRight(): Position | null {
		return this.getModulation(1, 0)
	}

	getUpLeft(): Position | null {
		return this.getModulation(-1, 1)
	}

	getUpRight(): Position | null {
		return this.getModulation(1, 1)
	}

	getDownLeft(): Position | null {
		return this.getModulation(-1, -1)
	}

	getDownRight(): Position | null {
		return this.getModulation(1, -1)
	}

	getUpUp(): Position | null {
		return this.getModulation(0, 2)
	}

	getDownDown(): Position | null {
		return this.getModulation(0, -2)
	}

	getUpUpLeft(): Position | null {
		return this.getModulation(-1, 2)
	}

	getUpUpRight(): Position | null {
		return this.getModulation(1, 2)
	}

	getDownDownLeft(): Position | null {
		return this.getModulation(-1, -2)
	}

	getDownDownRight(): Position | null {
		return this.getModulation(1, -2)
	}

	getLeftLeftUp(): Position | null {
		return this.getModulation(-2, 1)
	}

	getLeftLeftDown(): Position | null {
		return this.getModulation(-2, -1)
	}

	getRightRightUp(): Position | null {
		return this.getModulation(2, 1)
	}

	getRightRightDown(): Position | null {
		return this.getModulation(2, -1)
	}

	getAllStraight(): Array<Position> {
		const res = []
		const up = this.getUp()
		if (up) res.push(up)
		const down = this.getDown()
		if (down) res.push(down)
		const left = this.getLeft()
		if (left) res.push(left)
		const right = this.getRight()
		if (right) res.push(right)
		return res
	}

	getAllDiagonal(): Array<Position> {
		const res = []
		const upLeft = this.getUpLeft()
		if (upLeft) res.push(upLeft)
		const upRight = this.getUpRight()
		if (upRight) res.push(upRight)
		const downLeft = this.getDownLeft()
		if (downLeft) res.push(downLeft)
		const downRight = this.getDownRight()
		if (downRight) res.push(downRight)
		return res
	}

	getAllStraightAndDiagonal(): Array<Position> {
		const res = []
		res.concat(...this.getAllStraight())
		res.concat(...this.getAllDiagonal())
		return res
	}

	private getRecursive(fn: Function): Array<Position> {
		const res = []
		let pos: Position | null = this
		while ((pos = fn.call(pos))) {
			res.push(pos)
		}
		return res
	}

	getUpRecursive(): Array<Position> {
		return this.getRecursive(this.getUp)
	}

	getDownRecursive(): Array<Position> {
		return this.getRecursive(this.getDown)
	}

	getLeftRecursive(): Array<Position> {
		return this.getRecursive(this.getLeft)
	}

	getRightRecursive(): Array<Position> {
		return this.getRecursive(this.getRight)
	}

	getUpLeftRecursive(): Array<Position> {
		return this.getRecursive(this.getUpLeft)
	}

	getUpRightRecursive(): Array<Position> {
		return this.getRecursive(this.getUpRight)
	}

	getDownLeftRecursive(): Array<Position> {
		return this.getRecursive(this.getDownLeft)
	}

	getDownRightRecursive(): Array<Position> {
		return this.getRecursive(this.getDownRight)
	}

	getAllStraightRecursive(): Array<Array<Position>> {
		const res = []
		res.push(this.getUpRecursive())
		res.push(this.getDownRecursive())
		res.push(this.getLeftRecursive())
		res.push(this.getRightRecursive())
		return res
	}

	getAllDiagonalRecursive(): Array<Array<Position>> {
		const res = []
		res.push(this.getUpLeftRecursive())
		res.push(this.getUpRightRecursive())
		res.push(this.getDownLeftRecursive())
		res.push(this.getDownRightRecursive())
		return res
	}

	getAllStraightAndDiagonalRecursive(): Array<Array<Position>> {
		const res = []
		res.concat(...this.getAllStraightRecursive())
		res.concat(...this.getAllDiagonalRecursive())
		return res
	}

	getAllKnightMovePositions(): Array<Position> {
		const res = []
		const upUpLeft = this.getUpUpLeft()
		if (upUpLeft) res.push(upUpLeft)
		const upUpRight = this.getUpUpRight()
		if (upUpRight) res.push(upUpRight)
		const downDownLeft = this.getDownDownLeft()
		if (downDownLeft) res.push(downDownLeft)
		const downDownRight = this.getDownDownRight()
		if (downDownRight) res.push(downDownRight)
		const leftLeftUp = this.getLeftLeftUp()
		if (leftLeftUp) res.push(leftLeftUp)
		const leftLeftDown = this.getLeftLeftDown()
		if (leftLeftDown) res.push(leftLeftDown)
		const rightRightUp = this.getRightRightUp()
		if (rightRightUp) res.push(rightRightUp)
		const rightRightDown = this.getRightRightDown()
		if (rightRightDown) res.push(rightRightDown)
		return res
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

	registerMove(move: Move): void {
		const currPos = move.fromPosition
		const newPos = move.toPosition
		const piece = this[currPos.y][currPos.x]
		this[newPos.y][newPos.x] = piece
		this[currPos.y][currPos.x] = null
	}

	removePiece(piece: Piece): void {
		const pos = piece.position
		this[pos.y][pos.x] = null
	}

	getPieceByXY(x: number, y: number): Piece | null {
		return this[y][x]
	}

	getPieceByA1(a1: string): Piece | null {
		const [x, y] = from_A1_to_XY(a1)
		return this.getPieceByXY(x, y)
	}

	getPieceByPosition(position: Position): Piece | null {
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
	player: Player
	position: Position | null
	moves: Array<Move> = []

	constructor(player: Player, position: Position) {
		Object.defineProperty(this, 'player', {
			enumerable: false,
			value: player,
		})
		this.position = position
	}

	get game(): Game {
		return this.player.game
	}

	get type(): string {
		return this.constructor.name
	}

	get hasMoved(): boolean {
		return this.moves.length > 0
	}

	registerMove(move: Move): void {
		this.moves.push(move)
		this.position = move.toPosition.clone()
	}

	remove(): void {
		this.position = null
	}

	protected isMoveTargetOwnPiece(target: Position): boolean {
		const targetPiece = this.game.board.getPieceByPosition(target)
		return targetPiece !== null && this.player === targetPiece.player
	}

	/**
	 * Returns whether a move to a position is a valid move.
	 */
	abstract isValidMove(toPosition: Position): boolean

	/**
	 * Returns a Position array with all valid moves.
	 */
	abstract getMovePositionsWithinBounds(): Array<Position>

	getValidMovePositions(): Array<Position> {
		return this.getMovePositionsWithinBounds().reduce((res, elem) => {
			if (Array.isArray(elem)) {
				for (const e of elem) {
					if (this.isValidMove(elem)) res.push(elem)
					else break
				}
			} else if (this.isValidMove(elem)) {
				res.push(elem)
			}
			return res
		}, [])
	}
}

export class King extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) {
			return this.isValidCastleMove(target)
		}
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		return this.position.getAllStraightAndDiagonal()
	}

	private isValidCastleMove(target: Position): boolean {
		const targetPiece = this.game.board.getPieceByPosition(target)
		return (
			targetPiece.type === 'Rook' && !targetPiece.hasMoved && !this.hasMoved
		)
	}
}

export class Queen extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) return false
		// TODO: finish implementation
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		// TODO: finish implementation
		return []
	}
}

export class Bishop extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) return false
		// TODO: finish implementation
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		// TODO: finish implementation
		return []
	}
}

export class Knight extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) return false
		// TODO: finish implementation
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		// TODO: finish implementation
		return []
	}
}

export class Rook extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) return false
		// TODO: finish implementation
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		// TODO: finish implementation
		return []
	}

	private isValidCastleMove(target: Position): boolean {
		const targetPiece = this.game.board.getPieceByPosition(target)
		return (
			targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved
		)
	}
}
export class Pawn extends Piece {
	isValidMove(target: Position): boolean {
		if (this.isMoveTargetOwnPiece(target)) return false
		// TODO: finish implementation
		return true
	}

	getMovePositionsWithinBounds(): Array<Position> {
		// TODO: finish implementation
		return []
	}
}

export class Move {
	piece: Piece
	fromPosition: Position
	toPosition: Position

	constructor(
		piece: Piece,
		toPosition: Position,
		_skipValidation: boolean = false
	) {
		this.piece = piece
		this.fromPosition = piece.position.clone()
		this.toPosition = toPosition.clone()

		if (_skipValidation || piece.isValidMove(toPosition)) {
			const targetPiece = piece.game.board.getPieceByPosition(toPosition)
			if (targetPiece) targetPiece.remove()
			piece.registerMove(this)
			piece.game.board.registerMove(this)
		} else {
			// TODO: invalid move
		}
	}
}

export class Game {
	board: Board
	white: Player
	black: Player
	moves: Array<Move>

	constructor() {
		this.board = new Board(this)
		this.white = new Player(this, 'white')
		this.black = new Player(this, 'black')
		this.moves = []
	}

	get players(): Array<Player> {
		return [this.black, this.white]
	}

	get pieces(): Array<Piece> {
		return [...this.black.pieces, ...this.white.pieces]
	}

	makeMove(
		piece: Piece,
		toPosition: Position,
		_skipValidation?: boolean
	): Move {
		return new Move(piece, toPosition, _skipValidation)
	}

	clone(): Game {
		const game = new Game()
		const moves = this.moves
		const l = moves.length
		for (let i = 0; i < l; i++) {
			game.makeMove(moves[i].piece, moves[i].toPosition, true)
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
