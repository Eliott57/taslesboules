import { Text, View, Pressable, StyleSheet } from "react-native";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

export function PlayerListComponent(props){
  const { players } = useContext(PlayerContext) as PlayerContextType;

  return(
    <View style={styles.label}>
        <Text style={styles.text}>{props.index} {props.txt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    width: 150,
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#6D81BD',
    borderColor: '#B8B8B8'
  },
  text: {
    color: '#B8B8B8'
  }
});