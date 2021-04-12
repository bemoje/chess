import type { Player } from '../Player';
import type { Position } from '../Position';
import type { Game } from '../Game';
import type { Move } from '../Move';
/**
 * Abstract piece class that each type of Piece (class) will extend.
 */
export declare abstract class Piece {
    /**
     * The Player who owns the Piece.
     */
    player: Player;
    /**
     * Manually set piece index value. Only unique per Player instance.
     */
    index: number;
    /**
     * The Position of the piece.
     */
    position: Position | null;
    /**
     * The number of times the piece has moved.
     */
    moveCount: number;
    /**
     * @param player - The Player who owns the Piece.
     * @param index - Manually set piece index value. Only unique per Player instance.
     * @param position - The Position of the piece.
     */
    constructor(player: Player, index: number, position: Position);
    /**
     * Returns the Game instance that this Piece is associated with.
     */
    get game(): Game;
    /**
     * Returns the class name of the Piece.
     */
    get type(): string;
    /**
     * Returns whether or not this Piece has made any moves yet.
     */
    get hasMoved(): boolean;
    /**
     * Returns the player color of the Player instance that this Piece belongs to.
     */
    get color(): string;
    /**
     * Returns whether this Piece is still on the board.
     */
    get isTaken(): boolean;
    /**
     * Returns an array of Move instances that represent moves made by this Piece.
     */
    get moves(): Move[];
    /**
     * Increments the moveCount number property and sets the position property.
     */
    registerMove(move: Move): void;
    /**
     * Sets the position property to null, which means that this Piece is no longer on the board.
     */
    remove(): void;
    /**
     * Returns whether there is a 'friendly' Piece at a given Position.
     */
    protected isMoveTargetOwnPiece(target: Position): boolean;
    /**
     * Returns whether it is this Piece's Player's turn to move.
     */
    protected get isOwnTurn(): boolean;
    /**
     * Returns a Position array with all piece-specific move positions within bounds of the board.
     */
    protected abstract getMovePositionsWithinBounds(): Array<Position | Array<Position>>;
    /**
     * Iterates all valid move Position instances for this Piece.
     *
     * @param f - a callback function to invoke for each valid move position. If it returns true, iteration ends.
     * @returns true if iteration was ended before completion.
     */
    forEachValidMovePosition(f: (position: Position) => boolean | void): boolean | void;
    /**
     * Returns whether a move to a target position is a castling move.
     * The King and Rook classes override this method.
     */
    isCastleMove(_target: Position): boolean;
    /**
     * Returns whether a move to a position is a valid move.
     */
    isValidMove(target: Position): boolean;
}
//# sourceMappingURL=AbstractPiece.d.ts.map