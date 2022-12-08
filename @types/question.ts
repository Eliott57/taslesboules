// @types.question.ts
export interface IQuestion {
  createdAt: Date,
  description: string;
  options: string[];
  toDo: string;
  id: number;
}
