/**
 * A class that represents a XY-coordinate position on the Board of a chess Game.
 */
export declare class Position {
    /**
     * The X coordinate.
     */
    x: number;
    /**
     * The Y coordinate.
     */
    y: number;
    /**
     * Modulates the Position and returns a new Position instance based on A1-notation input.
     */
    static fromA1(a1: string): Position;
    /**
     * Modulates the Position and returns a new Position instance based on XY-coordinate array.
     */
    static fromXY(xy: Array<number>): Position;
    /**
     * @param x - a positive integer between 0 and 7 both inclusive.
     * @param y - a positive integer between 0 and 7 both inclusive.
     */
    constructor(x: number, y: number, skipValidation?: boolean);
    /**
     * Returns the board position in A1-notation.
     */
    get A1(): string;
    /**
     * Returns the board position as an XY-coordinate array.
     */
    get XY(): Array<number>;
    /**
     * Deep-equality-compares the Position instance to another Position instance.
     *
     * @param position - The Position instance to compare.
     */
    compare(position: Position): boolean;
    /**
     * Returns a clone of the instance.
     */
    clone(): Position;
    /**
     * Returns the instance as a normal array.
     */
    toArray(): Array<number>;
    /**
     * Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
     * is out of bounds of the board.
     *
     * @param xBy - The number of chess grid units to module by on the x-axis.
     * @param yBy - The number of chess grid units to module by on the y-axis.
     * @returns `null` if the resulting position is out of bounds.
     */
    private getModulation;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 1 from the position on the board
     * that this instance describes.
     */
    getUp(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 1 from the position on the board
     * that this instance describes.
     */
    getDown(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved left by 1 from the position on the board
     * that this instance describes.
     */
    getLeft(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved right by 1 from the position on the board
     * that this instance describes.
     */
    getRight(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 1 and left by 1 from the position on
     * the board that this instance describes.
     */
    getUpLeft(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 1 and right by 1 from the position
     * on the board that this instance describes.
     */
    getUpRight(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 1 and left by 1 from the position
     * on the board that this instance describes.
     */
    getDownLeft(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 1 and right by 1 from the position
     * on the board that this instance describes.
     */
    getDownRight(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 2 from the position on the board
     * that this instance describes.
     */
    getUpUp(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 2 from the position on the board
     * that this instance describes.
     */
    getDownDown(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 2 and left by 1 from the position on
     * the board that this instance describes.
     */
    getUpUpLeft(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved up by 2 and right by 1 from the position
     * on the board that this instance describes.
     */
    getUpUpRight(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 2 and left by 1 from the position
     * on the board that this instance describes.
     */
    getDownDownLeft(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved down by 2 and right by 1 from the position
     * on the board that this instance describes.
     */
    getDownDownRight(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved left by 2 and up by 1 from the position on
     * the board that this instance describes.
     */
    getLeftLeftUp(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved left by 2 and up by 1 from the position on
     * the board that this instance describes.
     */
    getLeftLeftDown(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved right by 2 and up by 1 from the position
     * on the board that this instance describes.
     */
    getRightRightUp(): Position | null;
    /**
     * Modulates the Position and returns a new Position instance that is moved right by 2 and down by 1 from the position
     * on the board that this instance describes.
     */
    getRightRightDown(): Position | null;
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.
     */
    getAllStraight(): Array<Position>;
    /**
     * Returns an array of new Position instances that are moved by 1 in all diagonal directions.
     */
    getAllDiagonal(): Array<Position>;
    /**
     * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) and
     * diagonal directions.
     */
    getAllStraightAndDiagonal(): Array<Position>;
    /**
     * Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.
     */
    getAllKnightMovePositions(): Array<Position>;
    /**
     * Returns an array of new Position instances that are moved by a provided modulator function recursively until the
     * modulator's returned Position instance becomes out of bounds of the board.
     *
     * @param modulator - The modulator method to use for recursion.
     */
    private getRecursive;
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getUpRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getDownRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getLeftRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
     * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
     */
    getRightRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getUpLeftRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getUpRightRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getDownLeftRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
     * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
     * the board.
     */
    getDownRightRecursive(): Array<Position>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) directions from the position on the board that this instance describes until the
     * resulting Position instance becomes out of bounds of the board.
     */
    getAllStraightRecursive(): Array<Array<Position>>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all diagonal
     * directions from the position on the board that this instance describes until the resulting Position instance
     * becomes out of bounds of the board.
     */
    getAllDiagonalRecursive(): Array<Array<Position>>;
    /**
     * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
     * (horizontal and vertical) and diagonal directions from the position on the board that this instance describes until
     * the resulting Position instance becomes out of bounds of the board.
     */
    getAllStraightAndDiagonalRecursive(): Array<Array<Position>>;
}
//# sourceMappingURL=Position.d.ts.map