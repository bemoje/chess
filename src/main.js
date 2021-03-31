/**
 * @type Position {Array<[number, number]>}
 */

export class Player {
	/**
	 * @param {string} color
	 */
	constructor(color, pieces) {
		this.color = color

		if (color === 'black') {
			this.pieces = [new King(this, [6, 0]), new Queen(this, [5, 0])]
		} else if (color === 'white') {
			this.pieces = [new King(this, [5, 7]), new Queen(this, [6, 7])]
		} else {
			throw new Error('Invalid color')
		}
	}

	get king() {
		return this.pieces[0]
	}

	get queen() {
		return this.pieces[1]
	}
}

export class Board {
	pieces = []
	constructor() {}
}

export class Piece {
	taken = false
	moves = []

	/**
	 * @param {Player} player
	 * @param {Array<number>} player
	 */
	constructor(player, position) {
		this.player = player
		this.position = position
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

export class Move {
	/**
	 * @param {Piece} piece
	 * @param {Position} toPosition
	 */
	constructor(piece, toPosition) {
		this.piece = piece
		this.fromPosition = piece.position.slice()
		this.toPosition = toPosition
		piece._registerMove(this)
	}
}

export class Game {
	moves = []

	constructor () {
		this.black = new Player('black')
		this.white = new Player('white')
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

console.log(game.pieces)

console.log(game.makeMove(game.black.king, [6, 1]))

console.log(game.pieces)
