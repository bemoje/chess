import type { Player } from './Player';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
export declare abstract class Piece {
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
//# sourceMappingURL=AbstractPiece.d.ts.map