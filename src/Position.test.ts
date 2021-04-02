import { Position } from './Position';

describe('Position (class)', () => {
  describe('constructor', () => {
    it('creates a new Position instance', () => {
      expect(new Position(0, 0).constructor).toBe(Position);
    });

    it('throws if an out of bounds board position is attemped created.', () => {
      expect(() => {
        new Position(0, 8);
      }).toThrow(Error);
    });

    it('is able to bypass out-of-bounds-validation check.', () => {
      expect(() => {
        new Position(0, 8, true);
      }).not.toThrow(Error);
    });
  });

  describe('(static) fromA1Notation', () => {
    it('Returns a new Position instance based on A1-notation input.', () => {
      expect(Position.fromA1Notation('A1').constructor).toBe(Position);
    });

    it('throws if an out of bounds board position is attemped created.', () => {
      expect(() => {
        Position.fromA1Notation('A0');
      }).toThrow(Error);
    });
  });

  describe('(getter) x', () => {
    it('Returns the first value of the XY-point that the instance describes.', () => {
      expect(new Position(2, 5).x).toBe(2);
    });
  });

  describe('(getter) y', () => {
    it('Returns the second value of the XY-point that the instance describes.', () => {
      expect(new Position(2, 5).y).toBe(5);
    });
  });

  describe('(getter) A1', () => {
    it('Returns the board position in A1-notation.', () => {
      expect(new Position(2, 5).A1).toBe('C6');
    });
  });

  describe('(method) compare', () => {
    it('Deep-equality-compares the Position instance to another Position instance.', () => {
      expect(new Position(2, 5).compare(new Position(2, 5))).toBe(true);
      expect(new Position(2, 5).compare(new Position(2, 6))).toBe(false);
    });
  });

  describe('(method) clone', () => {
    it('Returns a clone of the instance.', () => {
      const pos = new Position(2, 5);
      expect(pos.compare(pos.clone())).toBe(true);
    });
  });

  describe('(method) toArray', () => {
    it('Returns the instance as a normal array.', () => {
      expect(new Position(2, 5).toArray()).toStrictEqual([2, 5]);
    });
  });

  describe('single position-modulation methods', () => {
    it('(method) getUp', () => {
      const pos = new Position(3, 3).getUp();
      const res = new Position(3, 4);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getDown', () => {
      const pos = new Position(3, 3).getDown();
      const res = new Position(3, 2);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getLeft', () => {
      const pos = new Position(3, 3).getLeft();
      const res = new Position(2, 3);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getRight', () => {
      const pos = new Position(3, 3).getRight();
      const res = new Position(4, 3);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getUpLeft', () => {
      const pos = new Position(3, 3).getUpLeft();
      const res = new Position(2, 4);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getUpRight', () => {
      const pos = new Position(3, 3).getUpRight();
      const res = new Position(4, 4);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getDownLeft', () => {
      const pos = new Position(3, 3).getDownLeft();
      const res = new Position(2, 2);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    it('(method) getDownRight', () => {
      const pos = new Position(3, 3).getDownRight();
      const res = new Position(4, 2);
      if (pos) expect(pos.compare(res)).toBe(true);
      else throw new Error('pos is null');
    });

    describe('double position-modulation methods', () => {
      it('(method) getUpUp', () => {
        const pos = new Position(3, 3).getUpUp();
        const res = new Position(3, 5);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getDownDown', () => {
        const pos = new Position(3, 3).getDownDown();
        const res = new Position(3, 1);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });
    });

    describe('single knight position-modulation methods', () => {
      it('(method) getUpUpLeft', () => {
        const pos = new Position(3, 3).getUpUpLeft();
        const res = new Position(2, 5);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getUpUpRight', () => {
        const pos = new Position(3, 3).getUpUpRight();
        const res = new Position(4, 5);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getDownDownLeft', () => {
        const pos = new Position(3, 3).getDownDownLeft();
        const res = new Position(2, 1);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getDownDownRight', () => {
        const pos = new Position(3, 3).getDownDownRight();
        const res = new Position(4, 1);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getLeftLeftUp', () => {
        const pos = new Position(3, 3).getLeftLeftUp();
        const res = new Position(1, 4);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getLeftLeftDown', () => {
        const pos = new Position(3, 3).getLeftLeftDown();
        const res = new Position(1, 2);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getRightRightUp', () => {
        const pos = new Position(3, 3).getRightRightUp();
        const res = new Position(5, 4);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });

      it('(method) getRightRightDown', () => {
        const pos = new Position(3, 3).getRightRightDown();
        const res = new Position(5, 2);
        if (pos) expect(pos.compare(res)).toBe(true);
        else throw new Error('pos is null');
      });
    });
  });

  describe('multiple position-modulation methods', () => {
    it('(method) getAllStraight', () => {
      expect(
        new Position(3, 3).getAllStraight().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(3, 4).toArray(),
        new Position(3, 2).toArray(),
        new Position(2, 3).toArray(),
        new Position(4, 3).toArray(),
      ]);
    });

    it('(method) getAllDiagonal', () => {
      expect(
        new Position(3, 3).getAllDiagonal().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(2, 4).toArray(),
        new Position(4, 4).toArray(),
        new Position(2, 2).toArray(),
        new Position(4, 2).toArray(),
      ]);
    });

    it('(method) getAllStraightAndDiagonal', () => {
      expect(
        new Position(3, 3).getAllStraightAndDiagonal().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(3, 4).toArray(),
        new Position(3, 2).toArray(),
        new Position(2, 3).toArray(),
        new Position(4, 3).toArray(),
        new Position(2, 4).toArray(),
        new Position(4, 4).toArray(),
        new Position(2, 2).toArray(),
        new Position(4, 2).toArray(),
      ]);
    });

    it('(method) getAllKnightMovePositions', () => {
      expect(
        new Position(3, 3).getAllKnightMovePositions().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(2, 5).toArray(),
        new Position(4, 5).toArray(),
        new Position(2, 1).toArray(),
        new Position(4, 1).toArray(),
        new Position(1, 4).toArray(),
        new Position(1, 2).toArray(),
        new Position(5, 4).toArray(),
        new Position(5, 2).toArray(),
      ]);
    });
  });

  describe('recursive position-modulation methods', () => {
    it('(method) getUpRecursive', () => {
      expect(
        new Position(3, 3).getUpRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(3, 4).toArray(),
        new Position(3, 5).toArray(),
        new Position(3, 6).toArray(),
        new Position(3, 7).toArray(),
      ]);
    });

    it('(method) getDownRecursive', () => {
      expect(
        new Position(3, 3).getDownRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(3, 2).toArray(),
        new Position(3, 1).toArray(),
        new Position(3, 0).toArray(),
      ]);
    });

    it('(method) getLeftRecursive', () => {
      expect(
        new Position(3, 3).getLeftRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(2, 3).toArray(),
        new Position(1, 3).toArray(),
        new Position(0, 3).toArray(),
      ]);
    });

    it('(method) getRightRecursive', () => {
      expect(
        new Position(3, 3).getRightRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(4, 3).toArray(),
        new Position(5, 3).toArray(),
        new Position(6, 3).toArray(),
        new Position(7, 3).toArray(),
      ]);
    });

    it('(method) getUpLeftRecursive', () => {
      expect(
        new Position(3, 3).getUpLeftRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(2, 4).toArray(),
        new Position(1, 5).toArray(),
        new Position(0, 6).toArray(),
      ]);
    });

    it('(method) getUpRightRecursive', () => {
      expect(
        new Position(3, 3).getUpRightRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(4, 4).toArray(),
        new Position(5, 5).toArray(),
        new Position(6, 6).toArray(),
        new Position(7, 7).toArray(),
      ]);
    });

    it('(method) getDownLeftRecursive', () => {
      expect(
        new Position(3, 3).getDownLeftRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(2, 2).toArray(),
        new Position(1, 1).toArray(),
        new Position(0, 0).toArray(),
      ]);
    });

    it('(method) getDownRightRecursive', () => {
      expect(
        new Position(3, 3).getDownRightRecursive().map((pos) => {
          return pos.toArray();
        }),
      ).toStrictEqual([
        new Position(4, 2).toArray(),
        new Position(5, 1).toArray(),
        new Position(6, 0).toArray(),
      ]);
    });
  });

  describe('multiple recursive position-modulation methods', () => {
    it('(method) getAllStraightRecursive', () => {
      const pos = new Position(3, 3);
      expect(
        pos.getAllStraightRecursive().map((arr) => {
          return arr.map((p) => {
            return p.toArray();
          });
        }),
      ).toStrictEqual([
        pos.getUpRecursive().map((p) => p.toArray()),
        pos.getDownRecursive().map((p) => p.toArray()),
        pos.getLeftRecursive().map((p) => p.toArray()),
        pos.getRightRecursive().map((p) => p.toArray()),
      ]);
    });

    it('(method) getAllDiagonalRecursive', () => {
      const pos = new Position(3, 3);
      expect(
        pos.getAllDiagonalRecursive().map((arr) => {
          return arr.map((p) => {
            return p.toArray();
          });
        }),
      ).toStrictEqual([
        pos.getUpLeftRecursive().map((p) => p.toArray()),
        pos.getUpRightRecursive().map((p) => p.toArray()),
        pos.getDownLeftRecursive().map((p) => p.toArray()),
        pos.getDownRightRecursive().map((p) => p.toArray()),
      ]);
    });

    it('(method) getAllStraightAndDiagonalRecursive', () => {
      const pos = new Position(3, 3);
      expect(
        pos.getAllStraightAndDiagonalRecursive().map((arr) => {
          return arr.map((p) => {
            return p.toArray();
          });
        }),
      ).toStrictEqual([
        pos.getUpRecursive().map((p) => p.toArray()),
        pos.getDownRecursive().map((p) => p.toArray()),
        pos.getLeftRecursive().map((p) => p.toArray()),
        pos.getRightRecursive().map((p) => p.toArray()),
        pos.getUpLeftRecursive().map((p) => p.toArray()),
        pos.getUpRightRecursive().map((p) => p.toArray()),
        pos.getDownLeftRecursive().map((p) => p.toArray()),
        pos.getDownRightRecursive().map((p) => p.toArray()),
      ]);
    });
  });
});
