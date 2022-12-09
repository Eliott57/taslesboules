import React, { FC, useState } from "react";
import { IPlayer, PlayerContextType } from "../@types/player";

interface Props {
  children?: React.ReactNode;
}

export const PlayerContext = React.createContext<PlayerContextType>({players: [], addPlayer: () => {}});

const PlayerProvider: FC<Props> = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const addPlayer = (playerName: string) => {
    const newPlayer: IPlayer = {
      id: players.length + 1,
      name: playerName
    }

    console.log(newPlayer)

    setPlayers([...players, newPlayer]);
  }

  return (
    <PlayerContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayerContext.Provider>
  );

}

export default PlayerProvider;
