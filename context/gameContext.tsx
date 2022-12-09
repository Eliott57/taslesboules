import React, { FC, useState } from "react";
import { GameContextType, IGame } from "../@types/game";
import { ITurn } from "../@types/turn";
import moment from "moment";

interface Props {
  children?: React.ReactNode;
}

export const GameContext = React.createContext<GameContextType>({game: null, addGame: () => {}, updateGame: () => {}});

const GameProvider: FC<Props> = ({ children }) => {
  const [game, setGame] = useState<IGame | null>(null);

  const addGame = (turns: ITurn[]) => {
    const game: IGame = {
      turns: turns,
      currentTurnNumber: 1,
      ended: false,
      currentPlayerId: 1,
      currentTime: moment()
    }

    setGame(game);
  }

  const updateGame = (updatedGame: IGame) => {
    setGame(updatedGame);
  }

  return (
    <GameContext.Provider value={{ game, addGame, updateGame }}>
      {children}
    </GameContext.Provider>
  );

}

export default GameProvider;
