import type { Player } from './Player';
import type { Position } from './Position';
import type { Game } from './Game';
import type { Move } from './Move';
export declare abstract class Piece {
    player: Player;
    index: number;
    position: Position | null;
    moveCount: number;
    constructor(player: Player, index: number, position: Position);
    get game(): Game;
    get type(): string;
    get hasMoved(): boolean;
    get color(): string;
    get isTaken(): boolean;
    get moves(): Move[];
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