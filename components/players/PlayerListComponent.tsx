import { Text, View } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

export function PlayerListComponent(props){
  const { players } = useContext(PlayerContext) as PlayerContextType;

  return(
    <View>
        <Text>Test</Text>
    </View>
  )
}