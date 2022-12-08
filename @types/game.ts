// @types.game.ts
import { ITurn } from "./turn";

export interface IGame {
  turns: ITurn[];
  ended: boolean;
  currentTurnNumber: number;
  currentPlayerId: number;
}

export type GameContextType = {
  game: IGame | null,
  addGame: (turns: ITurn[]) => void;
  updateGame: (game: IGame) => void;
};
