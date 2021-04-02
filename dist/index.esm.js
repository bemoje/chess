/*!
 * bemoje-chess-engine v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

class Piece {
    constructor(player, position) {
        this.player = player;
        this.position = position;
        this.moves = [];
    }
    get game() {
        return this.player.game;
    }
    get type() {
        return this.constructor.name;
    }
    get hasMoved() {
        return this.moves.length > 0;
    }
    get color() {
        return this.player.color;
    }
    registerMove(move) {
        this.moves.push(move);
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
        return this.getMovePositionsWithinBounds().reduce((res, item) => {
            if (Array.isArray(item)) {
                for (const subItem of item) {
                    if (this.isValidMove(subItem))
                        res.push(subItem);
                    else
                        break;
                }
            }
            else if (this.isValidMove(item)) {
                res.push(item);
            }
            return res;
        }, []);
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
        if (arr[i]) {
            res.push(arr[i]);
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
 * Converts a XY-coordinate-array or a Position type (extends Array) to an A1-notation string.
 */
function from_XY_to_A1(xy) {
    return from_X_to_A(xy[0]) + from_Y_to_1(xy[1]);
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
function isValidXY(coordinate) {
    return isValidXYPoint(coordinate[0]) && isValidXYPoint(coordinate[1]);
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

class Board extends Array {
    constructor(game) {
        super(8);
        this.game = game;
        let i = 0;
        while (i < 8) {
            this[i] = new Array(8).fill(null, 0, 7);
            i++;
        }
    }
    registerMove(move) {
        const currPos = move.from;
        const newPos = move.to;
        const piece = this[currPos.y][currPos.x];
        this[newPos.y][newPos.x] = piece;
        this[currPos.y][currPos.x] = null;
    }
    removePiece(piece) {
        const pos = piece.position;
        if (pos)
            this[pos.y][pos.x] = null;
    }
    getPieceByXY(x, y) {
        return this[y][x];
    }
    getPieceByA1(a1) {
        const [x, y] = from_A1_to_XY(a1);
        return this.getPieceByXY(x, y);
    }
    getPieceByPosition(position) {
        return this.getPieceByXY(position.x, position.y);
    }
    clone(game = this.game) {
        const board = new Board(game);
        let i = 0;
        while (i < 8) {
            let j = 0;
            while (j < 8) {
                board[i][j] = this[i][j];
                j++;
            }
            i++;
        }
        return board;
    }
}

class Position extends Array {
    /**
     * Returns a new Position instance based on A1-notation input.
     */
    static fromA1Notation(a1) {
        const xy = from_A1_to_XY(a1);
        return new Position(xy[0], xy[1]);
    }
    /**
     * @param x - a positive integer between 0 and 7 both inclusive.
     * @param y - a positive integer between 0 and 7 both inclusive.
     */
    constructor(x, y, _skipValidation = false) {
        if (!_skipValidation) {
            assertValidXY([x, y], 'x and y');
        }
        super(2);
        this[0] = x;
        this[1] = y;
    }
    /**
     * Returns the first value of the XY-point that the instance describes.
     */
    get x() {
        return this[0];
    }
    /**
     * Returns the second value of the XY-point that the instance describes.
     */
    get y() {
        return this[1];
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
     * Modulates the XY-position coordinate and returns a new Position instance equivalent to it.
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
        const res = pos.getAllStraightRecursive();
        if (this.color === 'white') {
            res.push(Position.fromA1Notation('D1'));
        }
        else {
            res.push(Position.fromA1Notation('D7'));
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
            res.push(Position.fromA1Notation('A1'), Position.fromA1Notation('H1'));
        }
        else {
            res.push(Position.fromA1Notation('A7'), Position.fromA1Notation('H7'));
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
        const pos = Position.fromA1Notation;
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
        ];
    }
}

class Move {
    constructor(piece, to, _skipValidation = false) {
        const pos = piece.position;
        if (!pos)
            throw new Error('Cannot move a piece that is not on the board.');
        this.piece = piece;
        this.from = pos.clone();
        this.to = to.clone();
        if (_skipValidation || piece.isValidMovePosition(to)) {
            const targetPiece = piece.game.board.getPieceByPosition(to);
            if (targetPiece)
                targetPiece.remove();
            piece.registerMove(this);
            piece.game.board.registerMove(this);
        }
        else {
            throw new Error('Invalid move.');
        }
    }
}

class Game {
    constructor() {
        this.board = new Board(this);
        this.white = new Player(this, 'white');
        this.black = new Player(this, 'black');
        this.moves = [];
    }
    get players() {
        return [this.black, this.white];
    }
    get pieces() {
        return [...this.black.pieces, ...this.white.pieces];
    }
    makeMove(piece, to, _skipValidation) {
        return new Move(piece, to, _skipValidation);
    }
    clone() {
        const game = new Game();
        const moves = this.moves;
        const l = moves.length;
        for (let i = 0; i < l; i++) {
            game.makeMove(moves[i].piece, moves[i].to, true);
        }
        return game;
    }
}

export { Bishop, Board, Game, King, Knight, Move, Pawn, Player, Position, Queen, Rook, assertValidA1, assertValidXY, assertValidXYPoint, from_1_to_Y, from_A1_to_XY, from_A_to_X, from_XY_to_A1, from_X_to_A, from_Y_to_1, isValidA1, isValidXY, isValidXYPoint };
//# sourceMappingURL=index.esm.js.map
