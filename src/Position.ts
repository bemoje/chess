import { from_A1_to_XY, from_XY_to_A1, assertValidXY } from './coordinates';
import { arrClean } from './util';

export class Position {
  x: number;
  y: number;
  /**
   * Returns a new Position instance based on A1-notation input.
   */
  static fromA1(a1: string): Position {
    const xy = from_A1_to_XY(a1);
    return new Position(xy[0], xy[1]);
  }

  /**
   * @param x - a positive integer between 0 and 7 both inclusive.
   * @param y - a positive integer between 0 and 7 both inclusive.
   */
  constructor(x: number, y: number, skipValidation = false) {
    if (!skipValidation) {
      assertValidXY([x, y], 'x and y');
    }
    this.x = x;
    this.y = y;
  }

  /**
   * Returns the board position in A1-notation.
   */
  get A1(): string {
    return from_XY_to_A1([this.x, this.y]);
  }

  /**
   * Deep-equality-compares the Position instance to another Position instance.
   */
  compare(position: Position): boolean {
    return this.x === position.x && this.y === position.y;
  }

  /**
   * Returns a clone of the instance.
   * Out of bounds -validation is skipped.
   */
  clone(): Position {
    return new Position(this.x, this.y, true);
  }

  /**
   * Returns the instance as a normal array.
   */
  toArray(): Array<number> {
    return [this.x, this.y];
  }

  /**
   * Modulates the XY-position coordinate and returns a new Position instance equivalent to it, or null if that position
   * is out of bounds of the board.
   */
  private getModulation(xBy: number, yBy: number): Position | null {
    try {
      return new Position(this.x + xBy, this.y + yBy);
    } catch (e) {
      return null;
    }
  }

  /**
   * Returns a new Position instance that is moved up by 1 from the position on the board that this instance describes.
   */
  getUp(): Position | null {
    return this.getModulation(0, 1);
  }

  /**
   * Returns a new Position instance that is moved down by 1 from the position on the board that this instance describes.
   */
  getDown(): Position | null {
    return this.getModulation(0, -1);
  }

  /**
   * Returns a new Position instance that is moved left by 1 from the position on the board that this instance describes.
   */
  getLeft(): Position | null {
    return this.getModulation(-1, 0);
  }

  /**
   * Returns a new Position instance that is moved right by 1 from the position on the board that this instance describes.
   */
  getRight(): Position | null {
    return this.getModulation(1, 0);
  }

  /**
   * Returns a new Position instance that is moved up by 1 and left by 1 from the position on the board that this instance describes.
   */
  getUpLeft(): Position | null {
    return this.getModulation(-1, 1);
  }

  /**
   * Returns a new Position instance that is moved up by 1 and right by 1 from the position on the board that this instance describes.
   */
  getUpRight(): Position | null {
    return this.getModulation(1, 1);
  }

  /**
   * Returns a new Position instance that is moved down by 1 and left by 1 from the position on the board that this instance describes.
   */
  getDownLeft(): Position | null {
    return this.getModulation(-1, -1);
  }

  /**
   * Returns a new Position instance that is moved down by 1 and right by 1 from the position on the board that this instance describes.
   */
  getDownRight(): Position | null {
    return this.getModulation(1, -1);
  }

  /**
   * Returns a new Position instance that is moved up by 2 from the position on the board that this instance describes.
   */
  getUpUp(): Position | null {
    return this.getModulation(0, 2);
  }

  /**
   * Returns a new Position instance that is moved down by 2 from the position on the board that this instance describes.
   */
  getDownDown(): Position | null {
    return this.getModulation(0, -2);
  }

  /**
   * Returns a new Position instance that is moved up by 2 and left by 1 from the position on the board that this instance describes.
   */
  getUpUpLeft(): Position | null {
    return this.getModulation(-1, 2);
  }

  /**
   * Returns a new Position instance that is moved up by 2 and right by 1 from the position on the board that this instance describes.
   */
  getUpUpRight(): Position | null {
    return this.getModulation(1, 2);
  }

  /**
   * Returns a new Position instance that is moved down by 2 and left by 1 from the position on the board that this instance describes.
   */
  getDownDownLeft(): Position | null {
    return this.getModulation(-1, -2);
  }

  /**
   * Returns a new Position instance that is moved down by 2 and right by 1 from the position on the board that this instance describes.
   */
  getDownDownRight(): Position | null {
    return this.getModulation(1, -2);
  }

  /**
   * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
   */
  getLeftLeftUp(): Position | null {
    return this.getModulation(-2, 1);
  }

  /**
   * Returns a new Position instance that is moved left by 2 and up by 1 from the position on the board that this instance describes.
   */
  getLeftLeftDown(): Position | null {
    return this.getModulation(-2, -1);
  }

  /**
   * Returns a new Position instance that is moved right by 2 and up by 1 from the position on the board that this instance describes.
   */
  getRightRightUp(): Position | null {
    return this.getModulation(2, 1);
  }

  /**
   * Returns a new Position instance that is moved right by 2 and down by 1 from the position on the board that this instance describes.
   */
  getRightRightDown(): Position | null {
    return this.getModulation(2, -1);
  }

  /**
   * Returns an array of new Position instances that are moved by 1 in all straight (horizontal and vertical) directions.
   */
  getAllStraight(): Array<Position> {
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
  getAllDiagonal(): Array<Position> {
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
  getAllStraightAndDiagonal(): Array<Position> {
    return [...this.getAllStraight(), ...this.getAllDiagonal()];
  }

  /**
   * Returns an array of new Position instances that are moved one time equivalent of all legal knight-piece moves.
   */
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
    ]);
  }

  /**
   * Returns an array of new Position instances that are moved by a provided modulator function recursively until the
   * modulator's returned Position instance becomes out of bounds of the board.
   */
  private getRecursive(modulator: () => Position | null): Array<Position> {
    const res = [];
    let pos: Position | null;
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
  getUpRecursive(): Array<Position> {
    return this.getRecursive(this.getUp);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving down by 1 from the position on
   * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
   */
  getDownRecursive(): Array<Position> {
    return this.getRecursive(this.getDown);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving left by 1 from the position on
   * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
   */
  getLeftRecursive(): Array<Position> {
    return this.getRecursive(this.getLeft);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving right by 1 from the position on
   * the board that this instance describes until the resulting Position instance becomes out of bounds of the board.
   */
  getRightRecursive(): Array<Position> {
    return this.getRecursive(this.getRight);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving up by 1 and left by 1 from the
   * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
   * the board.
   */
  getUpLeftRecursive(): Array<Position> {
    return this.getRecursive(this.getUpLeft);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving up by 1 and right by 1 from the
   * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
   * the board.
   */
  getUpRightRecursive(): Array<Position> {
    return this.getRecursive(this.getUpRight);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving down by 1 and left by 1 from the
   * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
   * the board.
   */
  getDownLeftRecursive(): Array<Position> {
    return this.getRecursive(this.getDownLeft);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving down by 1 and right by 1 from the
   * position on the board that this instance describes until the resulting Position instance becomes out of bounds of
   * the board.
   */
  getDownRightRecursive(): Array<Position> {
    return this.getRecursive(this.getDownRight);
  }

  /**
   * Returns an array of new Position instances that are the result of recursively moving by 1 in all straight
   * (horizontal and vertical) directions from the position on the board that this instance describes until the
   * resulting Position instance becomes out of bounds of the board.
   */
  getAllStraightRecursive(): Array<Array<Position>> {
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
  getAllDiagonalRecursive(): Array<Array<Position>> {
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
  getAllStraightAndDiagonalRecursive(): Array<Array<Position>> {
    return [
      ...this.getAllStraightRecursive(),
      ...this.getAllDiagonalRecursive(),
    ];
  }
}
