import type { Player } from './Player';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';

export abstract class Piece {
  public player: Player;
  public index: number;
  public position: Position | null;
  public moveCount: number;

  public constructor(player: Player, index: number, position: Position) {
    this.player = player;
    this.index = index;
    this.position = position;
    this.moveCount = 0;
    this.player.game.board.setPiece(this);
  }

  /**
   * Returns the Game instance that this Piece is associated with.
   */
  public get game(): Game {
    return this.player.game;
  }

  /**
   * Returns the class name of the Piece.
   */
  public get type(): string {
    return this.constructor.name;
  }

  /**
   * Returns whether or not this Piece has made any moves yet.
   */
  public get hasMoved(): boolean {
    return this.moveCount > 0;
  }

  /**
   * Returns the player color of the Player instance that this Piece belongs to.
   */
  public get color(): string {
    return this.player.color;
  }

  /**
   * Returns whether this Piece is still on the board.
   */
  public get isTaken(): boolean {
    return this.position === null;
  }

  /**
   * Returns an array of Move instances that represent moves made by this Piece.
   */
  public get moves(): Move[] {
    return this.player.game.moves.filter((move) => {
      return move.piece === this;
    });
  }

  /**
   * Increments the moveCount number property and sets the position property.
   */
  public registerMove(move: Move): void {
    this.moveCount++;
    this.position = move.to.clone();
  }

  /**
   * Sets the position property to null, which means that this Piece is no longer on the board.
   */
  public remove(): void {
    this.position = null;
  }

  /**
   * Returns whether there is a 'friendly' Piece at a given Position.
   */
  protected isMoveTargetOwnPiece(target: Position): boolean {
    const targetPiece = this.game.board.getPieceByPosition(target);
    return targetPiece !== null && this.player === targetPiece.player;
  }

  /**
   * Returns whether it is this Piece's Player's turn to move.
   */
  protected get isOwnTurn(): boolean {
    return this.game.activePlayer === this.player;
  }

  /**
   * Returns a Position array with all piece-specific move positions within bounds of the board.
   */
  protected abstract getMovePositionsWithinBounds(): Array<
    Position | Array<Position>
  >;

  /**
   * Iterates all valid move Position instances for this Piece.
   *
   * @param f - a callback function to invoke for each valid move position. If it returns true, iteration ends.
   */
  public forEachValidMovePosition(
    f: (position: Position) => boolean | void,
  ): void {
    if (this.isOwnTurn) {
      const positions = this.getMovePositionsWithinBounds();
      for (let i = 0; i < positions.length; i++) {
        const item = positions[i];
        if (Array.isArray(item)) {
          for (let j = 0; j < item.length; j++) {
            if (item[j] && this.isMoveTargetOwnPiece(item[j])) {
              if (f(item[j])) {
                return;
              }
            } else {
              // an own piece is in the way, so all following positions will always be invalid.
              break;
            }
          }
        } else if (this.isMoveTargetOwnPiece(item)) {
          if (f(item)) {
            return;
          }
        }
      }
    }
  }

  /**
   * Returns whether a move to a target position is a castling move.
   */
  public isCastleMove(_target: Position): boolean {
    _target;
    return false;
  }

  /**
   * Returns whether a move to a position is a valid move.
   */
  public isValidMove(target: Position): boolean {
    if (this.isCastleMove(target)) return true;
    let res = false;
    this.forEachValidMovePosition((position) => {
      if (position.compare(target)) {
        res = true;
        // end iteration
        return true;
      } else return;
    });
    return res;
  }
}
