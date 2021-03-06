import type { Player } from '../Player';
import type { Position } from '../Position';
import type { Game } from '../Game';
import type { Move } from '../Move';

/**
 * Abstract piece class that each type of Piece (class) will extend.
 */
export abstract class Piece {
  /**
   * The Player who owns the Piece.
   */
  public player: Player;

  /**
   * Manually set piece index value. Only unique per Player instance.
   */
  public index: number;

  /**
   * The Position of the piece.
   */
  public position: Position | null;

  /**
   * The number of times the piece has moved.
   */
  public moveCount: number;

  /**
   * @param player - The Player who owns the Piece.
   * @param index - Manually set piece index value. Only unique per Player instance.
   * @param position - The Position of the piece.
   */
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
   * @returns true if iteration was ended before completion.
   */
  public forEachValidMovePosition(
    f: (position: Position) => boolean | void,
  ): boolean | void {
    if (this.isOwnTurn) {
      const positions = this.getMovePositionsWithinBounds();
      for (let i = 0; i < positions.length; i++) {
        const item = positions[i];
        if (Array.isArray(item)) {
          // item is an array of positions where the array represents a move-direction. Used for pieces that can move
          // further than by one slot on the game board.
          for (let j = 0; j < item.length; j++) {
            if (item[j] && this.isMoveTargetOwnPiece(item[j])) {
              if (f(item[j])) {
                return true;
              }
            } else {
              // an own piece is in the way, so all following positions for the current direction will always be invalid.
              break;
            }
          }
        } else if (this.isMoveTargetOwnPiece(item)) {
          if (f(item)) {
            return true;
          }
        }
      }
    }
  }

  /**
   * Returns whether a move to a target position is a castling move.
   * The King and Rook classes override this method.
   */
  public isCastleMove(_target: Position): boolean {
    return false;
  }

  /**
   * Returns whether a move to a position is a valid move.
   */
  public isValidMove(target: Position): boolean {
    return (
      this.isCastleMove(target) ||
      !!this.forEachValidMovePosition((position) => {
        return position.compare(target);
      })
    );
  }
}
