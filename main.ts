/**
 * Removes elements of a given array if they do not evaluate to true.
 */
export function arrClean<T>(arr: Array<T>): Array<T> {
	const res = []
	const l = arr.length
	for (let i = 0; i < l; i++) {
		if (arr[i]) {
			res.push(arr[i])
		}
	}
	return res
}

/**
 * Returns the numeric difference between to numbers.
 */
export function numericDifference(n1: number, n2: number): number {
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
export function createAssertFunction(
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

	compare(position: Position): boolean {
		return this.x === position.x && this.y === position.y
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
		return arrClean([
			this.getUp(),
			this.getDown(),
			this.getLeft(),
			this.getRight(),
		])
	}

	getAllDiagonal(): Array<Position> {
		return arrClean([
			this.getUpLeft(),
			this.getUpRight(),
			this.getDownLeft(),
			this.getDownRight(),
		])
	}

	getAllStraightAndDiagonal(): Array<Position> {
		return [...this.getAllStraight(), ...this.getAllDiagonal()]
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
		return [
			this.getUpRecursive(),
			this.getDownRecursive(),
			this.getLeftRecursive(),
			this.getRightRecursive(),
		]
	}

	getAllDiagonalRecursive(): Array<Array<Position>> {
		return [
			this.getUpLeftRecursive(),
			this.getUpRightRecursive(),
			this.getDownLeftRecursive(),
			this.getDownRightRecursive(),
		]
	}

	getAllStraightAndDiagonalRecursive(): Array<Array<Position>> {
		return [
			...this.getAllStraightRecursive(),
			...this.getAllDiagonalRecursive(),
		]
	}

	getAllKnightMovePositions(): Array<Position> {
		return arrClean([
			this.getUpUpLeft(),
			this.getUpUpRight(),
			this.getDownDownLeft(),
			this.getDownDownRight(),
			this.getLeftLeftUp(),
			this.getLeftLeftDown(),
			this.getRightRightUp(),
			this.getRightRightDown(),
		])
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
		const currPos = move.from
		const newPos = move.to
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
	moves: Array<Move>

	constructor(player: Player, position: Position) {
		Object.defineProperty(this, 'player', {
			enumerable: false,
			value: player,
		})
		this.position = position
		this.moves = []
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

	get color(): string {
		return this.player.color
	}

	registerMove(move: Move): void {
		this.moves.push(move)
		this.position = move.to.clone()
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
	protected isValidMove(target: Position): boolean {
		return this.isMoveTargetOwnPiece(target)
	}

	/**
	 * Returns a Position array with all piece-specific move positions within bounds of the board.
	 */
	protected abstract getMovePositionsWithinBounds(): Array<
		Position | Array<Position>
	>

	/**
	 * Returns a Position array with all valid moves.
	 */
	getValidMovePositions(): Array<Position> {
		return this.getMovePositionsWithinBounds().reduce((res, item) => {
			if (Array.isArray(item)) {
				for (const subItem of item) {
					if (this.isValidMove(subItem)) res.push(subItem)
					else break
				}
			} else if (this.isValidMove(item)) {
				res.push(item)
			}
			return res
		}, [])
	}

	isValidMovePosition(target: Position): boolean {
		return !!this.getValidMovePositions().find((position: Position) => {
			return position.compare(target)
		})
	}
}

export class King extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		const res = this.position.getAllStraightAndDiagonal()
		if (this.color === 'white') {
			res.push(Position.fromA1Notation('A1'), Position.fromA1Notation('H1'))
		} else {
			res.push(Position.fromA1Notation('A7'), Position.fromA1Notation('H7'))
		}
		return res
	}

	protected isValidMove(target: Position): boolean {
		return this.isMoveTargetOwnPiece(target)
			? this.isValidCastleMove(target)
			: true
	}

	private isValidCastleMove(target: Position): boolean {
		const targetPiece = this.game.board.getPieceByPosition(target)
		return (
			targetPiece.type === 'Rook' && !targetPiece.hasMoved && !this.hasMoved
		)
	}
}

export class Rook extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		const res = this.position.getAllStraightRecursive()
		if (this.color === 'white') {
			res.push(Position.fromA1Notation('D1'))
		} else {
			res.push(Position.fromA1Notation('D7'))
		}
		return res
	}

	protected isValidMove(target: Position): boolean {
		return this.isMoveTargetOwnPiece(target)
			? this.isValidCastleMove(target)
			: true
	}

	private isValidCastleMove(target: Position): boolean {
		const targetPiece = this.game.board.getPieceByPosition(target)
		return (
			targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved
		)
	}
}

export class Queen extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		return this.position.getAllStraightAndDiagonalRecursive()
	}
}

export class Bishop extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		return this.position.getAllDiagonalRecursive()
	}
}

export class Knight extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		return this.position.getAllKnightMovePositions()
	}
}

export class Pawn extends Piece {
	protected getMovePositionsWithinBounds(): Array<Position | Array<Position>> {
		let diagLeftPiece: Piece, diagRightPiece: Piece

		const res = []

		if (this.color === 'white') {
			res.push(this.position.getUp())

			if (!this.hasMoved) {
				res.push(this.position.getUpUp())
			}

			diagLeftPiece = this.game.board.getPieceByPosition(
				this.position.getUpLeft()
			)
			if (diagLeftPiece && diagLeftPiece.color === 'black') {
				res.push(diagLeftPiece.position.clone())
			}

			diagRightPiece = this.game.board.getPieceByPosition(
				this.position.getUpRight()
			)
			if (diagRightPiece && diagRightPiece.color === 'black') {
				res.push(diagLeftPiece.position.clone())
			}
		} else {
			res.push(this.position.getDown())

			if (!this.hasMoved) {
				res.push(this.position.getDownDown())
			}

			diagLeftPiece = this.game.board.getPieceByPosition(
				this.position.getDownLeft()
			)
			if (diagLeftPiece && diagLeftPiece.color === 'white') {
				res.push(diagLeftPiece.position.clone())
			}

			diagRightPiece = this.game.board.getPieceByPosition(
				this.position.getDownRight()
			)
			if (diagRightPiece && diagRightPiece.color === 'white') {
				res.push(diagLeftPiece.position.clone())
			}
		}
		return res
	}
}

export class Move {
	piece: Piece
	from: Position
	to: Position

	constructor(piece: Piece, to: Position, _skipValidation: boolean = false) {
		this.piece = piece
		this.from = piece.position.clone()
		this.to = to.clone()

		if (_skipValidation || piece.isValidMovePosition(to)) {
			const targetPiece = piece.game.board.getPieceByPosition(to)
			if (targetPiece) targetPiece.remove()
			piece.registerMove(this)
			piece.game.board.registerMove(this)
		} else {
			throw new Error('Invalid move.')
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

	makeMove(piece: Piece, to: Position, _skipValidation?: boolean): Move {
		return new Move(piece, to, _skipValidation)
	}

	clone(): Game {
		const game = new Game()
		const moves = this.moves
		const l = moves.length
		for (let i = 0; i < l; i++) {
			game.makeMove(moves[i].piece, moves[i].to, true)
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
