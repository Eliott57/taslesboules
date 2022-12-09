import { Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

import {PlayerListComponent} from "./PlayerListComponent";

export function PlayersListComponent(){
  const { players } = useContext(PlayerContext) as PlayerContextType;

  return(
    <View style={styles.contain}>
      <View style={styles.containPlayers}>
        { players.filter(player => player.id <= 4).map(player =>
          <Text key={player.id}>
            <PlayerListComponent id={player.id} name={player.name}/>
          </Text>
        )}
      </View>
      <View style={styles.containPlayers}>
        { players.filter(player => player.id > 4).map(player =>
          <Text key={player.id}>
            <PlayerListComponent id={player.id} name={player.name}/>
          </Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#6D81BD',
    flex: 1,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  containPlayers: {
    flex: 1,
    flexDirection: "column",
    height: 200,
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});
