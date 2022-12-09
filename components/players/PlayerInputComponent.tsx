import { View, TextInput, Button, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";
import * as React from "react";

import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import ButtonAdd from '../../assets/players/ButtonAddPlayer.svg';

const svg = resolveAssetSource(ButtonAdd);

function PlayerInputComponent(){
  const { addPlayer } = useContext(PlayerContext) as PlayerContextType;
  const [playerName, setPlayerName] = useState('');

  const enterNewPlayer = () => {
      addPlayer(playerName);
      setPlayerName('');
  }

  return (
    <View style={styles.component}>
      <TextInput
        style={styles.input}
        onChangeText={setPlayerName}
        value={playerName}
      />

      <SvgCssUri style={styles.back} uri={svg.uri} onPress={enterNewPlayer} width="10%" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    width: 290,
    height: 37,
    marginRight: 10,
    paddingLeft: 12
  },
  component: {
    flex: 1,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    zIndex: 2,
  }
});

export default PlayerInputComponent;
