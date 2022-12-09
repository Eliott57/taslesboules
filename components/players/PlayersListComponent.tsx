import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

import {PlayerListComponent} from "./PlayerListComponent";

export function PlayersListComponent(){
  const { players } = useContext(PlayerContext) as PlayerContextType;

  return(
    <View style={styles.inputsComponent}>
      {players.map(player =>
        <Text key={player.id}>
          <PlayerListComponent index={player.id} txt={player.name}/>
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  inputsComponent: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#6D81BD',
    borderColor: 'green',

    flex: 1,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  }
});