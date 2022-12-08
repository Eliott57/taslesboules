// @types.turn.ts
import { IPlayer } from "./player";
import { IAnswer } from "./answer";
import { IQuestion } from "./question";

export interface ITurn {
  id: number
  question: IQuestion,
  answers: IAnswer[],
}
