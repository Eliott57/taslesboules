import React, { FC, useState } from "react";
import { GameContextType, IGame } from "../@types/game";
import { ITurn } from "../@types/turn";
import moment from "moment";

interface Props {
  children?: React.ReactNode;
}

export const GameContext = React.createContext<GameContextType>({game: null, addGame: () => {}, updateGame: () => {}, toggleLoading: () => {}});

const GameProvider: FC<Props> = ({ children }) => {
  const [game, setGame] = useState<IGame | null>(null);

  const addGame = (turns: ITurn[]) => {
    const game: IGame = {
      turns: turns,
      currentTurnNumber: 1,
      ended: false,
      currentPlayerId: 1,
      currentTime: moment(),
      loading: false
    }

    setGame(game);
  }

  const updateGame = (updatedGame: IGame) => {
    setGame(updatedGame);
  }

  const toggleLoading = () => {
    if(game){
      let updatedGame: IGame = { ...game };
      updatedGame.loading = true;
      updateGame(updatedGame);

      setTimeout(() => {
        updatedGame = { ...updatedGame };
        updatedGame.loading = false;
        updateGame(updatedGame);
      }, 1000);
    }
  }

  return (
    <GameContext.Provider value={{ game, addGame, updateGame, toggleLoading }}>
      {children}
    </GameContext.Provider>
  );

}

export default GameProvider;
