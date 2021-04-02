/**
 * Removes elements of a given array if they do not evaluate to true.
 */
export declare function arrClean<T>(arr: Array<T>): Array<T>;
/**
 * Returns the numeric difference between to numbers.
 */
export declare function numericDifference(n1: number, n2: number): number;
/**
 * Returns an assertion function that expects [string] 'expectedToBe' evaluated by [Function] 'validate'
 */
export declare function createAssertFunction(expectedToBe: string, validate: (arg: any) => boolean): (arg: any, name: string) => void;
export declare class Position extends Array {
    static fromA1Notation(a1: string): Position;
    /**
     * @param x - a positive integer between 0 and 8 both inclusive.
     * @param y - a positive integer between 0 and 8 both inclusive.
     */
    constructor(x: number, y: number, _skipValidation?: boolean);
    get x(): number;
    get y(): number;
    /**
     * Returns the XY board position in A1 notation.
     */
    get A1(): string;
    /**
     * Returns the XY board position in A1 notation.
     */
    toString(): string;
    compare(position: Position): boolean;
    private getModulation;
    getUp(): Position | null;
    getDown(): Position | null;
    getLeft(): Position | null;
    getRight(): Position | null;
    getUpLeft(): Position | null;
    getUpRight(): Position | null;
    getDownLeft(): Position | null;
    getDownRight(): Position | null;
    getUpUp(): Position | null;
    getDownDown(): Position | null;
    getUpUpLeft(): Position | null;
    getUpUpRight(): Position | null;
    getDownDownLeft(): Position | null;
    getDownDownRight(): Position | null;
    getLeftLeftUp(): Position | null;
    getLeftLeftDown(): Position | null;
    getRightRightUp(): Position | null;
    getRightRightDown(): Position | null;
    getAllStraight(): Array<Position>;
    getAllDiagonal(): Array<Position>;
    getAllStraightAndDiagonal(): Array<Position>;
    private getRecursive;
    getUpRecursive(): Array<Position>;
    getDownRecursive(): Array<Position>;
    getLeftRecursive(): Array<Position>;
    getRightRecursive(): Array<Position>;
    getUpLeftRecursive(): Array<Position>;
    getUpRightRecursive(): Array<Position>;
    getDownLeftRecursive(): Array<Position>;
    getDownRightRecursive(): Array<Position>;
    getAllStraightRecursive(): Array<Array<Position>>;
    getAllDiagonalRecursive(): Array<Array<Position>>;
    getAllStraightAndDiagonalRecursive(): Array<Array<Position>>;
    getAllKnightMovePositions(): Array<Position>;
    clone(): Position;
}
export declare class Player {
    game: Game;
    color: string;
    pieces: Array<Piece>;
    constructor(game: Game, color: string, pieces?: Array<Piece>);
}
export declare class Board extends Array {
    game: Game;
    constructor(game: Game);
    registerMove(move: Move): void;
    removePiece(piece: Piece): void;
    getPieceByXY(x: number, y: number): Piece | null;
    getPieceByA1(a1: string): Piece | null;
    getPieceByPosition(position: Position): Piece | null;
    clone(game?: Game): Board;
}
declare abstract class Piece {
    player: Player;
    position: Position | null;
    moves: Array<Move>;
    constructor(player: Player, position: Position);
    get game(): Game;
    get type(): string;
    get hasMoved(): boolean;
    get color(): string;
    registerMove(move: Move): void;
    remove(): void;
    protected isMoveTargetOwnPiece(target: Position): boolean;
    /**
     * Returns whether a move to a position is a valid move.
     */
    protected isValidMove(target: Position): boolean;
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected abstract getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    /**
     * Returns a Position array with all valid moves.
     */
    getValidMovePositions(): Array<Position>;
    isValidMovePosition(target: Position): boolean;
}
export declare class King extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    protected isValidMove(target: Position): boolean;
    private isValidCastleMove;
}
export declare class Rook extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    protected isValidMove(target: Position): boolean;
    private isValidCastleMove;
}
export declare class Queen extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
export declare class Bishop extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
export declare class Knight extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
export declare class Pawn extends Piece {
    protected getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
}
export declare class Move {
    piece: Piece;
    from: Position;
    to: Position;
    constructor(piece: Piece, to: Position, _skipValidation?: boolean);
}
export declare class Game {
    board: Board;
    white: Player;
    black: Player;
    moves: Array<Move>;
    constructor();
    get players(): Array<Player>;
    get pieces(): Array<Piece>;
    makeMove(piece: Piece, to: Position, _skipValidation?: boolean): Move;
    clone(): Game;
}
export {};
//# sourceMappingURL=main.d.ts.map