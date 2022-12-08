import { View, TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";
import * as React from "react";

function PlayerInputComponent(){
  const { players, addPlayer } = useContext(PlayerContext) as PlayerContextType;
  const [playerName, setPlayerName] = useState('');

  const enterNewPlayer = () => {
      addPlayer(playerName);
      setPlayerName('');
  }

  return (
    <View>
      <TextInput
        onChangeText={setPlayerName}
        value={playerName}
      />
      <Button
        onPress={enterNewPlayer}
        title="Ajouter"
        color="#841584"
        disabled={playerName.trim() === '' || players.length === 8}
      />
    </View>
  )
}

export default PlayerInputComponent;
