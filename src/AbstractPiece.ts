import type { Player } from './Player';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';

export abstract class Piece {
  player: Player;
  index: number;
  position: Position | null;
  moves: Array<Move>;

  constructor(player: Player, index: number, position: Position) {
    this.player = player;
    this.index = index;
    this.position = position;
    this.moves = [];

    this.player.game.board.setPiece(this);
  }

  get game(): Game {
    return this.player.game;
  }

  get type(): string {
    return this.constructor.name;
  }

  get hasMoved(): boolean {
    return this.moves.length > 0;
  }

  get color(): string {
    return this.player.color;
  }

  registerMove(move: Move): void {
    this.moves.push(move);
    this.position = move.to.clone();
  }

  remove(): void {
    this.position = null;
  }

  protected isMoveTargetOwnPiece(target: Position): boolean {
    const targetPiece = this.game.board.getPieceByPosition(target);
    return targetPiece !== null && this.player === targetPiece.player;
  }

  /**
   * Returns whether a move to a position is a valid move.
   */
  protected isValidMove(target: Position): boolean {
    return this.isMoveTargetOwnPiece(target);
  }

  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected abstract getMovePositionsWithinBounds(): Array<
    Position | Array<Position>
  >;

  /**
   * Returns a Position array with all valid moves.
   */
  getValidMovePositions(): Array<Position> {
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

  isValidMovePosition(target: Position): boolean {
    return !!this.getValidMovePositions().find((position: Position) => {
      return position.compare(target);
    });
  }
}
