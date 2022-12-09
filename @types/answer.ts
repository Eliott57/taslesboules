// @types.answer.ts
import { IPlayer } from "./player";

export interface IAnswer {
  playerId: number,
  optionSelected: number,
  responseTime: number
}
