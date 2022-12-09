// @types.game.ts
import { ITurn } from "./turn";
import { Moment } from "moment";

export interface IGame {
  turns: ITurn[];
  ended: boolean;
  currentTurnNumber: number;
  currentPlayerId: number;
  currentTime: Moment;
}

export type GameContextType = {
  game: IGame | null,
  addGame: (turns: ITurn[]) => void;
  updateGame: (game: IGame) => void;
};
