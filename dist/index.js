/*!
 * bemoje-chess-engine v0.0.0
 * (c) Benjamin Møller Jensen
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var Piece = /** @class */ (function () {
    function Piece(player, index, position) {
        this.player = player;
        this.index = index;
        this.position = position;
        this.moveCount = 0;
        this.player.game.board.setPiece(this);
    }
    Object.defineProperty(Piece.prototype, "game", {
        /**
         * Returns the Game instance that this Piece is associated with.
         */
        get: function () {
            return this.player.game;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "type", {
        /**
         * Returns the class name of the Piece.
         */
        get: function () {
            return this.constructor.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "hasMoved", {
        /**
         * Returns whether or not this Piece has made any moves yet.
         */
        get: function () {
            return this.moveCount > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "color", {
        /**
         * Returns the player color of the Player instance that this Piece belongs to.
         */
        get: function () {
            return this.player.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "isTaken", {
        /**
         * Returns whether this Piece is still on the board.
         */
        get: function () {
            return this.position === null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "moves", {
        /**
         * Returns an array of Move instances that represent moves made by this Piece.
         */
        get: function () {
            var _this = this;
            return this.player.game.moves.filter(function (move) {
                return move.piece === _this;
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Increments the moveCount number property and sets the position property.
     */
    Piece.prototype.registerMove = function (move) {
        this.moveCount++;
        this.position = move.to.clone();
    };
    /**
     * Sets the position property to null, which means that this Piece is no longer on the board.
     */
    Piece.prototype.remove = function () {
        this.position = null;
    };
    /**
     * Returns whether there is a 'friendly' Piece at a given Position.
     */
    Piece.prototype.isMoveTargetOwnPiece = function (target) {
        var targetPiece = this.game.board.getPieceByPosition(target);
        return targetPiece !== null && this.player === targetPiece.player;
    };
    Object.defineProperty(Piece.prototype, "isOwnTurn", {
        /**
         * Returns whether it is this Piece's Player's turn to move.
         */
        get: function () {
            return this.game.activePlayer === this.player;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Iterates all valid move Position instances for this Piece.
     *
     * @param f - a callback function to invoke for each valid move position. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    Piece.prototype.forEachValidMovePosition = function (f) {
        if (this.isOwnTurn) {
            var positions = this.getMovePositionsWithinBounds();
            for (var i = 0; i < positions.length; i++) {
                var item = positions[i];
                if (Array.isArray(item)) {
                    // item is an array of positions where the array represents a move-direction. Used for pieces that can move
                    // further than by one slot on the game board.
                    for (var j = 0; j < item.length; j++) {
                        if (item[j] && this.isMoveTargetOwnPiece(item[j])) {
                            if (f(item[j])) {
                                return true;
                            }
                        }
                        else {
                            // an own piece is in the way, so all following positions for the current direction will always be invalid.
                            break;
                        }
                    }
                }
                else if (this.isMoveTargetOwnPiece(item)) {
                    if (f(item)) {
                        return true;
                    }
                }
            }
        }
    };
    /**
     * Returns whether a move to a target position is a castling move.
     */
    Piece.prototype.isCastleMove = function (_target) {
        return false;
    };
    /**
     * Returns whether a move to a position is a valid move.
     */
    Piece.prototype.isValidMove = function (target) {
        if (this.isCastleMove(target))
            return true;
        var res = false;
        this.forEachValidMovePosition(function (position) {
            if (position.compare(target)) {
                res = true;
                // end iteration
                return true;
            }
            else
                return;
        });
        return res;
    };
    return Piece;
}());

var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    Bishop.prototype.getMovePositionsWithinBounds = function () {
        var pos = this.position;
        return pos ? pos.getAllDiagonalRecursive() : [];
    };
    return Bishop;
}(Piece));

/**
 * Removes elements of a given array if they do not evaluate to true.
 */
function arrClean(arr) {
    var res = [];
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        var pos = arr[i];
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
    var f = function (arg, name) {
        if (name === void 0) { name = 'arg'; }
        if (!validate(arg)) {
            throw new TypeError("Expected " + name + " to be " + expectedToBe + ". " + name + ": " + arg);
        }
    };
    Object.defineProperty(f, 'name', {
        value: validate.name.replace(/^is/, 'assert'),
    });
    return f;
}
/**
 * Returns whether a number is an even number.
 */
function isEven(n) {
    return n % 2 == 0;
}

var Position = /** @class */ (function () {
    /**
     * @param x - a positive integer between 0 and 7 both inclusive.
     * @param y - a positive integer between 0 and 7 both inclusive.
     */
    function Position(x, y, skipValidation) {
        if (skipValidation === void 0) { skipValidation = false; }
        if (!skipValidation) {
            assertValidXY([x, y], 'x and y');
        }
        this.x = x;
        this.y = y;
    }
    /**
     * Returns a new Position instance based on A1-notation input.
     */
    Position.fromA1 = function (a1) {
        var xy = from_A1_to_XY(a1);
        return new Position(xy[0], xy[1]);
    };
    Object.defineProperty(Position.prototype, "A1", {
        /**
         * Returns the board position in A1-notation.
         */
        get: function () {
            return from_XY_to_A1([this.x, this.y]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deep-equality-compares the Position instance to another Position instance.
     */
    Position.prototype.compare = function (position) {
        return this.x === position.x && this.y === position.y;
    };
    /**
     * Returns a clone of the instance.
     * Out of bounds -validation is skipped.
     */
    Position.prototype.clone = function () {
        return new Position(this.x, this.y, true);
    };
    /**
     * Returns the instance as a normal array.
     */
    Position.prototype.toArray = function () {
        return [this.x, this.y];
    };
    /**
     * Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
     * is out of bounds of the board.
     */
    Position.prototype.getModulation = function (xBy, yBy) {
        try {
            return new Position(this.x + xBy, this.y + yBy);
        }
        catch (e) {
            return null;
        }
    };
    /**
     * Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getUp = function () {
        return this.getModulation(0, 1);
    };
    /**
     * Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getDown = function () {
        return this.getModulation(0, -1);
    };
    /**
     * Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getLeft = function () {
        return this.getModulation(-1, 0);
    };
    /**
     * Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getRight = function () {
        return this.getModulation(1, 0);
    };
    /**
     * Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getUpLeft = function () {
        return this.getModulation(-1, 1);
    };
    /**
     * Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getUpRight = function () {
        return this.getModulation(1, 1);
    };
    /**
     * Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getDownLeft = function () {
        return this.getModulation(-1, -1);
    };
    /**
     * Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getDownRight = function () {
        return this.getModulation(1, -1);
    };
    /**
     * Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.
     */
    Position.prototype.getUpUp = function () {
        return this.getModulation(0, 2);
    };
    /**
     * Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.
     */
    Position.prototype.getDownDown = function () {
        return this.getModulation(0, -2);
    };
    /**
     * Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getUpUpLeft = function () {
        return this.getModulation(-1, 2);
    };
    /**
     * Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getUpUpRight = function () {
        return this.getModulation(1, 2);
    };
    /**
     * Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getDownDownLeft = function () {
        return this.getModulation(-1, -2);
    };
    /**
     * Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getDownDownRight = function () {
        return this.getModulation(1, -2);
    };
    /**
     * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getLeftLeftUp = function () {
        return this.getModulation(-2, 1);
    };
    /**
     * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getLeftLeftDown = function () {
        return this.getModulation(-2, -1);
    };
    /**
     * Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getRightRightUp = function () {
        return this.getModulation(2, 1);
    };
    /**
     * Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.
     */
    Position.prototype.getRightRightDown = function () {
        return this.getModulation(2, -1);
    };
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.
     */
    Position.prototype.getAllStraight = function () {
        return arrClean([
            this.getUp(),
            this.getDown(),
            this.getLeft(),
            this.getRight(),
        ]);
    };
    /**
     * Returns an array of new Position instances that are moved by 1 in all diagonal directions.
     */
    Position.prototype.getAllDiagonal = function () {
        return arrClean([
            this.getUpLeft(),
            this.getUpRight(),
            this.getDownLeft(),
            this.getDownRight(),
        ]);
    };
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and diagonal directions.
     */
    Position.prototype.getAllStraightAndDiagonal = function () {
        return __spreadArrays(this.getAllStraight(), this.getAllDiagonal());
    };
    /**
     * Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.
     */
    Position.prototype.getAllKnightMovePositions = function () {
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
    };
    /**
     * Returns an array of new Position instances that are moved by a provided modulator function recursively until the
     * modulator's returned Position instance becomes out of bounds of the board.
     */
    Position.prototype.getRecursive = function (modulator) {
        var res = [];
        var pos;
        pos = this;
        while ((pos = modulator.call(pos))) {
            res.push(pos);
        }
        return res;
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getUpRecursive = function () {
        return this.getRecursive(this.getUp);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getDownRecursive = function () {
        return this.getRecursive(this.getDown);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getLeftRecursive = function () {
        return this.getRecursive(this.getLeft);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getRightRecursive = function () {
        return this.getRecursive(this.getRight);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    Position.prototype.getUpLeftRecursive = function () {
        return this.getRecursive(this.getUpLeft);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    Position.prototype.getUpRightRecursive = function () {
        return this.getRecursive(this.getUpRight);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    Position.prototype.getDownLeftRecursive = function () {
        return this.getRecursive(this.getDownLeft);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    Position.prototype.getDownRightRecursive = function () {
        return this.getRecursive(this.getDownRight);
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) directions from the position on the board that this instance describes until the
     * resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getAllStraightRecursive = function () {
        return [
            this.getUpRecursive(),
            this.getDownRecursive(),
            this.getLeftRecursive(),
            this.getRightRecursive(),
        ];
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
     * directions from the position on the board that this instance describes until the resulting Position instance
     * becomes out of bounds of the board.
     */
    Position.prototype.getAllDiagonalRecursive = function () {
        return [
            this.getUpLeftRecursive(),
            this.getUpRightRecursive(),
            this.getDownLeftRecursive(),
            this.getDownRightRecursive(),
        ];
    };
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
     * the resulting Position instance becomes out of bounds of the board.
     */
    Position.prototype.getAllStraightAndDiagonalRecursive = function () {
        return __spreadArrays(this.getAllStraightRecursive(), this.getAllDiagonalRecursive());
    };
    return Position;
}());

var A_CHAR_CODE = 'A'.charCodeAt(0);
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
 * Converts an A1-notation string to a Position instance.
 */
function from_A1_to_Position(a1) {
    return new Position(from_A_to_X(a1.charAt(0)), from_1_to_Y(a1.charAt(1)));
}
/**
 * Converts an A1-notation string to a Position instance.
 */
function from_XY_to_Position(xy) {
    return new Position(xy[0], xy[1]);
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
var assertValidXYPoint = createAssertFunction('a positive integer between 0 and 7', isValidXYPoint);
/**
 * Throws a TypeError if the argument is not a valid XY-coordinate.
 * @see isValidXY
 *
 * @function assertValidXY
 * @throws {TypeError}
 */
var assertValidXY = createAssertFunction('an array containing two positive integers between 0 and 7', isValidXY);
/**
 * Throws a TypeError if the argument is not valid A1-notation.
 * @see isValidA1
 *
 * @function assertValidA1
 * @throws {TypeError}
 */
var assertValidA1 = createAssertFunction('a valid A1-notation string', isValidA1);

var Board = /** @class */ (function () {
    function Board(game) {
        this.game = game;
        this.grid = [];
        var i = 0;
        while (i < 8) {
            this.grid.push(new Array(8).fill(null, 0, 7));
            i++;
        }
    }
    /**
     * Returns the piece at the given XY-coordinates or null if no piece is found there.
     */
    Board.prototype.getPieceByXY = function (x, y) {
        return this.grid[y][x];
    };
    /**
     * Returns the piece at the given Position or null if no piece is found there.
     */
    Board.prototype.getPieceByPosition = function (position) {
        return this.getPieceByXY(position.x, position.y);
    };
    /**
     * Returns the piece at the given A1-notation-coordinates or null if no piece is found there.
     */
    Board.prototype.getPieceByA1 = function (a1) {
        var _a = from_A1_to_XY(a1), x = _a[0], y = _a[1];
        return this.getPieceByXY(x, y);
    };
    /**
     * Sets a piece to the board.
     */
    Board.prototype.setPiece = function (piece) {
        var pos = piece.position;
        if (pos)
            this.grid[pos.y][pos.x] = piece;
    };
    /**
     * Removes a piece from the board.
     * This method does not check legality or whether this action is part of a move in the game.
     */
    Board.prototype.removePiece = function (piece) {
        if (piece) {
            var pos = piece.position;
            if (pos)
                this.grid[pos.y][pos.x] = null;
        }
    };
    /**
     * Updates the board instance based on the information contained within a provided Move instance.
     */
    Board.prototype.registerMove = function (move) {
        var from = move.from;
        var to = move.to;
        var piece = this.grid[from.y][from.x];
        this.grid[to.y][to.x] = piece;
        this.grid[from.y][from.x] = null;
    };
    /**
     * Updates the board instance based on the information contained within a provided Move instance that is known to make
     * out a swap (used for castling moves).
     */
    Board.prototype.registerSwap = function (move) {
        var from = move.from;
        var to = move.to;
        var pieceFrom = this.grid[from.y][from.x];
        var pieceTo = this.grid[to.y][to.x];
        this.grid[to.y][to.x] = pieceFrom;
        this.grid[from.y][from.x] = pieceTo;
    };
    return Board;
}());

var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    King.prototype.getMovePositionsWithinBounds = function () {
        var pos = this.position;
        if (!pos)
            return [];
        return pos.getAllStraightAndDiagonal();
    };
    /**
     * Returns whether a move to a target position is a castling move.
     */
    King.prototype.isCastleMove = function (target) {
        var targetPiece = this.game.board.getPieceByPosition(target);
        if (!targetPiece)
            return false;
        // it is not necessary to check whether the taget piece is an own piece since an enemy piece will never be in the
        // designated position without having moved, which gets checked.
        return (targetPiece.type === 'Rook' && !targetPiece.hasMoved && !this.hasMoved);
    };
    return King;
}(Piece));

var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    Knight.prototype.getMovePositionsWithinBounds = function () {
        var pos = this.position;
        return pos ? pos.getAllKnightMovePositions() : [];
    };
    return Knight;
}(Piece));

var Move = /** @class */ (function () {
    function Move(piece, to, takes) {
        if (takes === void 0) { takes = null; }
        var pos = piece.position;
        if (!pos) {
            throw new Error('Cannot move a piece that is not on the board.');
        }
        this.piece = piece;
        this.takes = takes;
        this.from = pos.clone();
        this.to = to.clone();
    }
    Move.prototype.toJSON = function () {
        return [
            [this.from.x, this.from.y],
            [this.to.x, this.to.y],
        ];
    };
    return Move;
}());

var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    Pawn.prototype.getMovePositionsWithinBounds = function () {
        var board = this.game.board;
        var pos = this.position;
        var res = [];
        if (!pos) {
            return [];
        }
        if (this.color === 'white') {
            var upPos = pos.getUp();
            if (upPos) {
                res.push(upPos);
            }
            var upUpPos = pos.getUpUp();
            if (upUpPos && !this.hasMoved) {
                res.push(upUpPos);
            }
            var upLeftPos = pos.getUpLeft();
            if (upLeftPos) {
                var diagLeftPiece = board.getPieceByPosition(upLeftPos);
                if (diagLeftPiece) {
                    var diagLeftPos = diagLeftPiece.position;
                    if (diagLeftPos && diagLeftPiece.color === 'black') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
            var upRightPos = pos.getUpRight();
            if (upRightPos) {
                var diagRightPiece = board.getPieceByPosition(upRightPos);
                if (diagRightPiece) {
                    var diagLeftPos = diagRightPiece.position;
                    if (diagLeftPos && diagRightPiece.color === 'black') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
        }
        else {
            var downPos = pos.getDown();
            if (downPos) {
                res.push(downPos);
            }
            var downDownPos = pos.getDownDown();
            if (downDownPos && !this.hasMoved) {
                res.push(downDownPos);
            }
            var downLeftPos = pos.getDownLeft();
            if (downLeftPos) {
                var diagLeftPiece = board.getPieceByPosition(downLeftPos);
                if (diagLeftPiece) {
                    var diagLeftPos = diagLeftPiece.position;
                    if (diagLeftPos && diagLeftPiece.color === 'white') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
            var downRightPos = pos.getDownRight();
            if (downRightPos) {
                var diagRightPiece = board.getPieceByPosition(downRightPos);
                if (diagRightPiece) {
                    var diagLeftPos = diagRightPiece.position;
                    if (diagLeftPos && diagRightPiece.color === 'white') {
                        res.push(diagLeftPos.clone());
                    }
                }
            }
        }
        return res;
    };
    return Pawn;
}(Piece));

var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    Queen.prototype.getMovePositionsWithinBounds = function () {
        var pos = this.position;
        return pos ? pos.getAllStraightAndDiagonalRecursive() : [];
    };
    return Queen;
}(Piece));

var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    Rook.prototype.getMovePositionsWithinBounds = function () {
        var pos = this.position;
        if (!pos)
            return [];
        return pos.getAllStraightRecursive();
    };
    /**
     * Returns whether a move to a target position is a castling move.
     */
    Rook.prototype.isCastleMove = function (target) {
        var targetPiece = this.game.board.getPieceByPosition(target);
        if (!targetPiece)
            return false;
        // it is not necessary to check whether the taget piece is an own piece since an enemy piece will never be in the
        // designated position without having moved, which gets checked.
        return (targetPiece.type === 'King' && !targetPiece.hasMoved && !this.hasMoved);
    };
    return Rook;
}(Piece));

var Player = /** @class */ (function () {
    function Player(game, color) {
        this.game = game;
        this.color = color;
        var row1, row2;
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
    Object.defineProperty(Player.prototype, "moves", {
        /**
         * Returns an array of Move instances that describe moves of this Piece.
         */
        get: function () {
            var _this = this;
            return this.game.moves.filter(function (move) {
                return move.piece.player === _this;
            });
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());

var Game = /** @class */ (function () {
    /**
     * Returns an instance of Game
     */
    function Game() {
        this.board = new Board(this);
        this.white = new Player(this, 'white');
        this.black = new Player(this, 'black');
        this.moves = [];
    }
    /**
     * Recreates a Game instance from a previously stringified Game instance.
     * @throws {Error} on invalid JSON data
     */
    Game.fromJSON = function (data) {
        try {
            var game = new Game();
            var moves = JSON.parse(data);
            for (var i = 0; i < moves.length; i++) {
                game.makeMove(moves[i][0], moves[i][1]);
            }
            return game;
        }
        catch (e) {
            throw new Error('Invalid JSON data');
        }
    };
    Object.defineProperty(Game.prototype, "isWhitesTurnToMove", {
        /**
         * Returns whether it is white player's turn to move.
         */
        get: function () {
            return isEven(this.moves.length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isBlacksTurnToMove", {
        /**
         * Returns whether it is black player's turn to move.
         */
        get: function () {
            return !isEven(this.moves.length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "activePlayer", {
        /**
         * Returns whether it is black player's turn to move.
         */
        get: function () {
            return this.isWhitesTurnToMove ? this.white : this.black;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Iterate each piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    Game.prototype.forEachPiece = function (f) {
        var w = this.white.pieces;
        var b = this.black.pieces;
        for (var i = 0; i < 16; i++) {
            if (f(w[i]) || f(b[i])) {
                return true;
            }
        }
    };
    /**
     * Iterate each white piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    Game.prototype.forEachWhitePiece = function (f) {
        var w = this.white.pieces;
        for (var i = 0; i < 16; i++) {
            if (f(w[i])) {
                return true;
            }
        }
    };
    /**
     * Iterate each black piece on the board.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    Game.prototype.forEachBlackPiece = function (f) {
        var b = this.black.pieces;
        for (var i = 0; i < 16; i++) {
            if (f(b[i])) {
                return true;
            }
        }
    };
    /**
     * Iterate each piece on the board belonging to the player whose turn it is to move.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    Game.prototype.forEachActivePlayerPiece = function (f) {
        return this.isWhitesTurnToMove
            ? this.forEachWhitePiece(f)
            : this.forEachBlackPiece(f);
    };
    /**
     * Ensures the argument is converted into a Position instance.
     */
    Game.prototype.ensurePosition = function (from) {
        return from instanceof Position
            ? from
            : typeof from === 'string'
                ? from_A1_to_Position(from)
                : from_XY_to_Position(from);
    };
    /**
     * Get a Piece instance from the board by either Position, an A1 string or XY-coordinates
     */
    Game.prototype.getPiece = function (from) {
        return !from
            ? null
            : from instanceof Piece
                ? from
                : this.board.getPieceByPosition(this.ensurePosition(from));
    };
    /**
     * Iterate each valid move position for either all active player pieces or a given piece.
     *
     * @param f - a callback function to invoke for each Piece. If it returns true, iteration ends.
     * @param pieceOrCoordinate - only iterate a single piece's valid move positions. Can be the Piece to move, or where
     * to find the piece which can be a Position instance, XY-array or A1-notation string.
     * @returns true if iteration was ended before completion.
     */
    Game.prototype.forEachValidMove = function (f, pieceOrCoordinate) {
        var piece = this.getPiece(pieceOrCoordinate);
        return piece
            ? piece.forEachValidMovePosition(function (pos) {
                return f(pos, piece);
            })
            : this.forEachActivePlayerPiece(function (piece) {
                if (piece) {
                    return piece.forEachValidMovePosition(function (pos) {
                        return f(pos, piece);
                    });
                }
                else
                    return;
            });
    };
    /**
     * Moves a piece on the board.
     * If the target position already has a piece belonging to the opposing player, it is removed from the board.
     *
     * @param pieceOrCoordinate - The Piece to move, or where to find the piece which can be a Position instance, XY-array
     * or A1-notation string.
     * @param to - The Position to move to.
     * @param skipValidation - skips validation of the move's legality according to the rules of the game. This is used
     * internally for performance reasons when cloning a game, which repeats the moves that were previously validated.
     *
     * @throws {Error} on invalid move, unless `skipValidation` is true.
     */
    Game.prototype.makeMove = function (pieceOrCoordinate, to, skipValidation) {
        to = this.ensurePosition(to);
        var piece = this.getPiece(pieceOrCoordinate);
        if (piece && (skipValidation || piece.isValidMove(to))) {
            var targetPiece = piece.game.board.getPieceByPosition(to);
            var move = void 0;
            if (piece.isCastleMove(to)) {
                move = new Move(piece, to);
                this.board.registerSwap(move);
                if (targetPiece) {
                    targetPiece.registerMove(new Move(targetPiece, move.from));
                }
            }
            else {
                move = new Move(piece, to, targetPiece);
                this.board.registerMove(move);
                if (targetPiece) {
                    targetPiece.remove();
                }
            }
            piece.registerMove(move);
            this.moves.push(move);
        }
        else {
            throw new Error('Invalid move.');
        }
    };
    /**
     * Returns a deep clone of the game instance.
     */
    Game.prototype.clone = function () {
        var game = new Game();
        var w = game.white.pieces;
        var b = game.black.pieces;
        var moves = this.moves;
        for (var i = 0; i < moves.length; i++) {
            var piece = moves[i].piece;
            game.makeMove((piece.color === 'white' ? w : b)[piece.index], moves[i].to.clone(), true);
        }
        return game;
    };
    /**
     * Stringifies the necessary data for reconstructing the game.
     */
    Game.prototype.toJSON = function () {
        return JSON.stringify(this.moves);
    };
    return Game;
}());

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
exports.default = Game;
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
