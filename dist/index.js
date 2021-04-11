/*!
 * bemoje-chess-engine v0.0.0
 * (c) Benjamin Møller Jensen
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Piece {
    constructor(player, index, position) {
        this.player = player;
        this.index = index;
        this.position = position;
        this.moveCount = 0;
        this.player.game.board.setPiece(this);
    }
    get game() {
        return this.player.game;
    }
    get type() {
        return this.constructor.name;
    }
    get hasMoved() {
        return this.moveCount > 0;
    }
    get color() {
        return this.player.color;
    }
    get isTaken() {
        return this.position === null;
    }
    get moves() {
        return this.player.game.moves.filter((move) => {
            return move.piece === this;
        });
    }
    registerMove(move) {
        this.moveCount++;
        this.position = move.to.clone();
    }
    remove() {
        this.position = null;
    }
    isMoveTargetOwnPiece(target) {
        const targetPiece = this.game.board.getPieceByPosition(target);
        return targetPiece !== null && this.player === targetPiece.player;
    }
    /**
     * Returns whether a move to a position is a valid move.
     */
    isValidMove(target) {
        return this.isMoveTargetOwnPiece(target);
    }
    /**
     * Returns a Position array with all valid moves.
     */
    getValidMovePositions() {
        // return this.getMovePositionsWithinBounds().reduce((accum, item) => {
        //   if (Array.isArray(item)) {
        //     for (const pos of item) {
        //       if (pos && this.isValidMove(pos)) accum.push(pos);
        //       else break;
        //     }
        //   } else if (this.isValidMove(item)) {
        //     accum.push(item);
        //   }
        //   return accum;
        // }, []);
        return [];
    }
    isValidMovePosition(target) {
        return !!this.getValidMovePositions().find((position) => {
            return position.compare(target);
        });
    }
}

class Bishop extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        return pos ? pos.getAllDiagonalRecursive() : [];
    }
}

/**
 * Removes elements of a given array if they do not evaluate to true.
 */
function arrClean(arr) {
    const res = [];
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        const pos = arr[i];
        if (pos) {
            res.push(pos);
        }
    }
    return res;
}
/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 */
function createAssertFunction(expectedToBe, validate) {
    const f = function (arg, name = 'arg') {
        if (!validate(arg)) {
            throw new TypeError(`Expected ${name} to be ${expectedToBe}. ${name}: ${arg}`);
        }
    };
    Object.defineProperty(f, 'name', {
        value: validate.name.replace(/^is/, 'assert'),
    });
    return f;
}

const A_CHAR_CODE = 'A'.charCodeAt(0);
/**
 * Converts the first value of an XY-coordinate to A1-notation.
 */
function from_X_to_A(x) {
    return String.fromCharCode(x + A_CHAR_CODE);
}
/**
 * Converts the second value of an XY-coordinate to A1-notation.
 */
function from_Y_to_1(y) {
    return (y + 1).toString();
}
/**
 * Converts the first character of A1-notation to the first value of an XY-coordinate.
 */
function from_A_to_X(a) {
    return a.toUpperCase().charCodeAt(0) - A_CHAR_CODE;
}
/**
 * Converts the second character of A1-notation to the second value of an XY-coordinate.
 */
function from_1_to_Y(n) {
    return Number(n.charAt(0)) - 1;
}
/**
 * Converts a XY-coordinate-array to an A1-notation string.
 */
function from_XY_to_A1(pos) {
    return from_X_to_A(pos[0]) + from_Y_to_1(pos[1]);
}
/**
 * Converts an A1-notation string to a XY-coordinate-array.
 */
function from_A1_to_XY(a1) {
    return [from_A_to_X(a1.charAt(0)), from_1_to_Y(a1.charAt(1))];
}
/**
 * Returns whether the argument is a positive integer where 0 <= arg <= 7.
 */
function isValidXYPoint(n) {
    return n >= 0 && n <= 7;
}
/**
 * Returns whether both points in an XY-coordinate is a positive integer where 0 <= arg <= 7.
 */
function isValidXY(pos) {
    return isValidXYPoint(pos[0]) && isValidXYPoint(pos[1]);
}
/**
 * Returns whether a string is valid A1-notation.
 */
function isValidA1(a1) {
    return a1.length === 2 && isValidXY(from_A1_to_XY(a1));
}
/**
 * Throws a TypeError if the argument is not a valid XY-coordinate point.
 * @see isValidXYPoint
 *
 * @function assertValidXYPoint
 * @throws {TypeError}
 */
const assertValidXYPoint = createAssertFunction('a positive integer between 0 and 7', isValidXYPoint);
/**
 * Throws a TypeError if the argument is not a valid XY-coordinate.
 * @see isValidXY
 *
 * @function assertValidXY
 * @throws {TypeError}
 */
const assertValidXY = createAssertFunction('an array containing two positive integers between 0 and 7', isValidXY);
/**
 * Throws a TypeError if the argument is not valid A1-notation.
 * @see isValidA1
 *
 * @function assertValidA1
 * @throws {TypeError}
 */
const assertValidA1 = createAssertFunction('a valid A1-notation string', isValidA1);

class Board {
    constructor(game) {
        this.game = game;
        this.grid = [];
        let i = 0;
        while (i < 8) {
            this.grid.push(new Array(8).fill(null, 0, 7));
            i++;
        }
    }
    /**
     * Returns the piece at the given XY-coordinates or null if no piece is found there.
     */
    getPieceByXY(x, y) {
        return this.grid[y][x];
    }
    /**
     * Returns the piece at the given Position or null if no piece is found there.
     */
    getPieceByPosition(position) {
        return this.getPieceByXY(position.x, position.y);
    }
    /**
     * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
     */
    getPieceByA1(a1) {
        const [x, y] = from_A1_to_XY(a1);
        return this.getPieceByXY(x, y);
    }
    /**
     * Sets a piece to the board.
     */
    setPiece(piece) {
        const pos = piece.position;
        if (pos)
            this.grid[pos.y][pos.x] = piece;
    }
    /**
     * Removes a piece from the board.
     * This method does not check legality or whether this action is part of a move in the game.
     */
    removePiece(piece) {
        if (piece) {
            const pos = piece.position;
            if (pos)
                this.grid[pos.y][pos.x] = null;
        }
    }
    /**
     * Updates the board instance based on the information contained within a provided Move instance.
     */
    registerMove(move) {
        const from = move.from;
        const to = move.to;
        const piece = this.grid[from.y][from.x];
        this.grid[to.y][to.x] = piece;
        this.grid[from.y][from.x] = null;
    }
}

class Position {
    /**
     * @param x - a positive integer between 0 and 7 both inclusive.
     * @param y - a positive integer between 0 and 7 both inclusive.
     */
    constructor(x, y, skipValidation = false) {
        if (!skipValidation) {
            assertValidXY([x, y], 'x and y');
        }
        this.x = x;
        this.y = y;
    }
    /**
     * Returns a new Position instance based on A1-notation input.
     */
    static fromA1(a1) {
        const xy = from_A1_to_XY(a1);
        return new Position(xy[0], xy[1]);
    }
    /**
     * Returns the board position in A1-notation.
     */
    get A1() {
        return from_XY_to_A1([this.x, this.y]);
    }
    /**
     * Deep-equality-compares the Position instance to another Position instance.
     */
    compare(position) {
        return this.x === position.x && this.y === position.y;
    }
    /**
     * Returns a clone of the instance.
     * Out of bounds -validation is skipped.
     */
    clone() {
        return new Position(this.x, this.y, true);
    }
    /**
     * Returns the instance as a normal array.
     */
    toArray() {
        return [this.x, this.y];
    }
    /**
     * Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
     * is out of bounds of the board.
     */
    getModulation(xBy, yBy) {
        try {
            return new Position(this.x + xBy, this.y + yBy);
        }
        catch (e) {
            return null;
        }
    }
    /**
     * Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.
     */
    getUp() {
        return this.getModulation(0, 1);
    }
    /**
     * Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.
     */
    getDown() {
        return this.getModulation(0, -1);
    }
    /**
     * Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.
     */
    getLeft() {
        return this.getModulation(-1, 0);
    }
    /**
     * Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.
     */
    getRight() {
        return this.getModulation(1, 0);
    }
    /**
     * Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.
     */
    getUpLeft() {
        return this.getModulation(-1, 1);
    }
    /**
     * Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.
     */
    getUpRight() {
        return this.getModulation(1, 1);
    }
    /**
     * Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.
     */
    getDownLeft() {
        return this.getModulation(-1, -1);
    }
    /**
     * Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.
     */
    getDownRight() {
        return this.getModulation(1, -1);
    }
    /**
     * Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.
     */
    getUpUp() {
        return this.getModulation(0, 2);
    }
    /**
     * Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.
     */
    getDownDown() {
        return this.getModulation(0, -2);
    }
    /**
     * Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.
     */
    getUpUpLeft() {
        return this.getModulation(-1, 2);
    }
    /**
     * Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.
     */
    getUpUpRight() {
        return this.getModulation(1, 2);
    }
    /**
     * Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.
     */
    getDownDownLeft() {
        return this.getModulation(-1, -2);
    }
    /**
     * Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.
     */
    getDownDownRight() {
        return this.getModulation(1, -2);
    }
    /**
     * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
     */
    getLeftLeftUp() {
        return this.getModulation(-2, 1);
    }
    /**
     * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
     */
    getLeftLeftDown() {
        return this.getModulation(-2, -1);
    }
    /**
     * Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.
     */
    getRightRightUp() {
        return this.getModulation(2, 1);
    }
    /**
     * Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.
     */
    getRightRightDown() {
        return this.getModulation(2, -1);
    }
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.
     */
    getAllStraight() {
        return arrClean([
            this.getUp(),
            this.getDown(),
            this.getLeft(),
            this.getRight(),
        ]);
    }
    /**
     * Returns an array of new Position instances that are moved by 1 in all diagonal directions.
     */
    getAllDiagonal() {
        return arrClean([
            this.getUpLeft(),
            this.getUpRight(),
            this.getDownLeft(),
            this.getDownRight(),
        ]);
    }
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and diagonal directions.
     */
    getAllStraightAndDiagonal() {
        return [...this.getAllStraight(), ...this.getAllDiagonal()];
    }
    /**
     * Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.
     */
    getAllKnightMovePositions() {
        return arrClean([
            this.getUpUpLeft(),
            this.getUpUpRight(),
            this.getDownDownLeft(),
            this.getDownDownRight(),
            this.getLeftLeftUp(),
            this.getLeftLeftDown(),
            this.getRightRightUp(),
            this.getRightRightDown(),
        ]);
    }
    /**
     * Returns an array of new Position instances that are moved by a provided modulator function recursively until the
     * modulator's returned Position instance becomes out of bounds of the board.
     */
    getRecursive(modulator) {
        const res = [];
        let pos;
        pos = this;
        while ((pos = modulator.call(pos))) {
            res.push(pos);
        }
        return res;
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getUpRecursive() {
        return this.getRecursive(this.getUp);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getDownRecursive() {
        return this.getRecursive(this.getDown);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getLeftRecursive() {
        return this.getRecursive(this.getLeft);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getRightRecursive() {
        return this.getRecursive(this.getRight);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getUpLeftRecursive() {
        return this.getRecursive(this.getUpLeft);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getUpRightRecursive() {
        return this.getRecursive(this.getUpRight);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getDownLeftRecursive() {
        return this.getRecursive(this.getDownLeft);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getDownRightRecursive() {
        return this.getRecursive(this.getDownRight);
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) directions from the position on the board that this instance describes until the
     * resulting Position instance becomes out of bounds of the board.
     */
    getAllStraightRecursive() {
        return [
            this.getUpRecursive(),
            this.getDownRecursive(),
            this.getLeftRecursive(),
            this.getRightRecursive(),
        ];
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
     * directions. from the position on the board that this instance describes until the resulting Position instance
     * becomes out of bounds of the board.
     */
    getAllDiagonalRecursive() {
        return [
            this.getUpLeftRecursive(),
            this.getUpRightRecursive(),
            this.getDownLeftRecursive(),
            this.getDownRightRecursive(),
        ];
    }
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
     * the resulting Position instance becomes out of bounds of the board.
     */
    getAllStraightAndDiagonalRecursive() {
        return [
            ...this.getAllStraightRecursive(),
            ...this.getAllDiagonalRecursive(),
        ];
    }
}

class Pawn extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        if (!pos)
            return [];
        const res = [];
        if (this.color === 'white') {
            const upPos = pos.getUp();
            if (upPos) {
                res.push(upPos);
            }
            const upUpPos = pos.getUpUp();
            if (upUpPos && !this.hasMoved) {
                res.push(upUpPos);
            }
            const upLeftPos = pos.getUpLeft();
            if (upLeftPos) {
                const diagLeftPiece = this.game.board.getPieceByPosition(upLeftPos);
                if (diagLeftPiece) {
                    const diagLeftPos = diagLeftPiece.position;
                    if (diagLeftPos && diagLeftPiece.color === 'black') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
            const upRightPos = pos.getUpRight();
            if (upRightPos) {
                const diagRightPiece = this.game.board.getPieceByPosition(upRightPos);
                if (diagRightPiece) {
                    const diagLeftPos = diagRightPiece.position;
                    if (diagLeftPos && diagRightPiece.color === 'black') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
        }
        else {
            const downPos = pos.getDown();
            if (downPos) {
                res.push(downPos);
            }
            const downDownPos = pos.getDownDown();
            if (downDownPos && !this.hasMoved) {
                res.push(downDownPos);
            }
            const downLeftPos = pos.getDownLeft();
            if (downLeftPos) {
                const diagLeftPiece = this.game.board.getPieceByPosition(downLeftPos);
                if (diagLeftPiece) {
                    const diagLeftPos = diagLeftPiece.position;
                    if (diagLeftPos && diagLeftPiece.color === 'white') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
            const downRightPos = pos.getDownRight();
            if (downRightPos) {
                const diagRightPiece = this.game.board.getPieceByPosition(downRightPos);
                if (diagRightPiece) {
                    const diagLeftPos = diagRightPiece.position;
                    if (diagLeftPos && diagRightPiece.color === 'white') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
        }
        return res;
    }
}

class Knight extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        return pos ? pos.getAllKnightMovePositions() : [];
    }
}

class Queen extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        return pos ? pos.getAllStraightAndDiagonalRecursive() : [];
    }
}

class Rook extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        if (!pos)
            return [];
        const res = [];
        res.push(...pos.getAllStraightRecursive());
        if (this.color === 'white') {
            res.push(Position.fromA1('D1'));
        }
        else {
            res.push(Position.fromA1('D7'));
        }
        return res;
    }
    isValidMove(target) {
        return this.isMoveTargetOwnPiece(target)
            ? this.isValidCastleMove(target)
            : true;
    }
    isValidCastleMove(target) {
        const targetPiece = this.game.board.getPieceByPosition(target);
        return targetPiece
            ? targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved
            : false;
    }
}

class King extends Piece {
    getMovePositionsWithinBounds() {
        const pos = this.position;
        if (!pos)
            return [];
        const res = pos.getAllStraightAndDiagonal();
        if (this.color === 'white') {
            res.push(Position.fromA1('A1'), Position.fromA1('H1'));
        }
        else {
            res.push(Position.fromA1('A7'), Position.fromA1('H7'));
        }
        return res;
    }
    isValidMove(target) {
        return this.isMoveTargetOwnPiece(target)
            ? this.isValidCastleMove(target)
            : true;
    }
    isValidCastleMove(target) {
        const targetPiece = this.game.board.getPieceByPosition(target);
        return targetPiece
            ? targetPiece.type === 'Rook' && !targetPiece.hasMoved && !this.hasMoved
            : false;
    }
}

class Player {
    constructor(game, color) {
        this.game = game;
        this.color = color;
        let row1, row2;
        if (color === 'white') {
            row1 = '1';
            row2 = '2';
        }
        else if (color === 'black') {
            row1 = '8';
            row2 = '7';
        }
        else {
            throw new Error('Invalid color');
        }
        this.pieces = [
            new King(this, 0, Position.fromA1('E' + row1)),
            new Queen(this, 1, Position.fromA1('D' + row1)),
            new Bishop(this, 2, Position.fromA1('C' + row1)),
            new Bishop(this, 3, Position.fromA1('F' + row1)),
            new Knight(this, 4, Position.fromA1('B' + row1)),
            new Knight(this, 5, Position.fromA1('G' + row1)),
            new Rook(this, 6, Position.fromA1('A' + row1)),
            new Rook(this, 7, Position.fromA1('H' + row1)),
            new Pawn(this, 8, Position.fromA1('A' + row2)),
            new Pawn(this, 9, Position.fromA1('B' + row2)),
            new Pawn(this, 10, Position.fromA1('C' + row2)),
            new Pawn(this, 11, Position.fromA1('D' + row2)),
            new Pawn(this, 12, Position.fromA1('E' + row2)),
            new Pawn(this, 13, Position.fromA1('F' + row2)),
            new Pawn(this, 14, Position.fromA1('G' + row2)),
            new Pawn(this, 15, Position.fromA1('H' + row2)),
        ];
    }
    /**
     * Returns an array of Move instances that describe moves of this Piece.
     */
    get moves() {
        return this.game.moves.filter((move) => {
            return move.piece.player === this;
        });
    }
}

class Move {
    constructor(piece, to, takes = null) {
        const pos = piece.position;
        if (!pos) {
            throw new Error('Cannot move a piece that is not on the board.');
        }
        this.piece = piece;
        this.takes = takes;
        this.from = pos.clone();
        this.to = to.clone();
    }
}

class Game {
    constructor() {
        this.board = new Board(this);
        this.white = new Player(this, 'white');
        this.black = new Player(this, 'black');
        this.moves = [];
    }
    /**
     * Iterate each piece on the board.
     * If the callback function returns true, iteration ends.
     */
    forEachPiece(f) {
        const w = this.white.pieces;
        const b = this.black.pieces;
        for (let i = 0; i < 16; i++) {
            if (f(w[i]) === true || f(b[i]) === true) {
                return;
            }
        }
    }
    /**
     * Moves a piece on the board.
     * If the target position already has a piece belonging to the opposing player, it is removed from the board.
     * Allows for skipping validation of the move's legality according to the rules of the game. This is used internally
     * for performance reasons when cloning the game, repeating the moves that were previously checked.
     */
    makeMove(piece, to, skipValidation) {
        if (skipValidation || piece.isValidMovePosition(to)) {
            const targetPiece = piece.game.board.getPieceByPosition(to);
            const move = new Move(piece, to, targetPiece);
            this.moves.push(move);
            this.board.registerMove(move);
            piece.registerMove(move);
            if (targetPiece)
                targetPiece.remove();
        }
        else {
            throw new Error('Invalid move.');
        }
    }
    /**
     * Returns a deep clone of the game instance.
     */
    clone() {
        const game = new Game();
        const w = game.white.pieces;
        const b = game.black.pieces;
        const moves = this.moves;
        const l = moves.length;
        for (let piece, i = 0; i < l; i++) {
            piece = moves[i].piece;
            game.makeMove((piece.color === 'white' ? w : b)[piece.index], moves[i].to.clone(), true);
        }
        return game;
    }
}

exports.Bishop = Bishop;
exports.Board = Board;
exports.Game = Game;
exports.King = King;
exports.Knight = Knight;
exports.Move = Move;
exports.Pawn = Pawn;
exports.Player = Player;
exports.Position = Position;
exports.Queen = Queen;
exports.Rook = Rook;
exports.assertValidA1 = assertValidA1;
exports.assertValidXY = assertValidXY;
exports.assertValidXYPoint = assertValidXYPoint;
exports.from_1_to_Y = from_1_to_Y;
exports.from_A1_to_XY = from_A1_to_XY;
exports.from_A_to_X = from_A_to_X;
exports.from_XY_to_A1 = from_XY_to_A1;
exports.from_X_to_A = from_X_to_A;
exports.from_Y_to_1 = from_Y_to_1;
exports.isValidA1 = isValidA1;
exports.isValidXY = isValidXY;
exports.isValidXYPoint = isValidXYPoint;
//# sourceMappingURL=index.js.map
