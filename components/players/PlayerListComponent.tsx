import { Text, View, Pressable, StyleSheet } from "react-native";
import * as React from "react";

type Props = {
  id: number,
  name: string
}

export function PlayerListComponent(props: Props){
  return(
    <View style={styles.label}>
        <Text style={styles.text}>{props.id} {props.name}</Text>
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
