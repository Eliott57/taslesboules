import { Text, View } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

export function PlayersListComponent(){
  const { players } = useContext(PlayerContext) as PlayerContextType;

  return(
    <View>
      {players.map(player =>
        <Text key={player.id}>
          {player.name}
        </Text>
      )}
    </View>
  )
}
