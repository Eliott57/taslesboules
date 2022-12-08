// @types.player.ts
export interface IPlayer {
  id: number;
  name: string;
}

export type PlayerContextType = {
  players: IPlayer[];
  addPlayer: (playerName: string) => void;
};
