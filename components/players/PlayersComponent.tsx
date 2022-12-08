import { Button, View } from "react-native";
import PlayerInputComponent from "./PlayerInputComponent";
import * as React from "react";
import { PlayersListComponent } from "./PlayersListComponent";
import { useNavigation } from "@react-navigation/native";

function PlayersComponent(){
  const navigation = useNavigation();

  return (
    <View>
      <PlayerInputComponent/>
      <PlayersListComponent/>
      <Button
        onPress={() => navigation.navigate('GameLoader')}
        title="Suivant"
        color="#841584"
      />
    </View>
  )
}

export default PlayersComponent;
