import { Button, View, StyleSheet, Pressable, Text, Alert } from "react-native";
import PlayerInputComponent from "./PlayerInputComponent";
import * as React from "react";
import { PlayersListComponent } from "./PlayersListComponent";
import { useNavigation } from "@react-navigation/native";
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import Background from '../../assets/players/BackgroundPlayer.svg';
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";

const svg = resolveAssetSource(Background);

function PlayersComponent(){
  const navigation = useNavigation();
  const { players } = useContext(PlayerContext);

  const goToGame = () => {
    if(players.length < 3){
      Alert.alert(
        "Il faut être plus de 3 !",
        "Moins de 3 à table à Noël ? Vous en avez de la chance...",
        [
          {
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      )
    }else{
      navigation.navigate('GameLoader');
    }
  }

  return (
    <View>
      <View style={styles.input}>
        <PlayerInputComponent />
      </View>
      <View style={styles.listPlayers}>
        <PlayersListComponent/>
      </View>
      <Pressable style={styles.submit} onPress={() => goToGame()}>
        <Text style={styles.text}>Valider</Text>
      </Pressable>
      <SvgCssUri style={styles.back} uri={svg.uri} width="110%" />
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: -280,
    left: -20,
    zIndex: -1,
  },
  listPlayers: {
    position: 'absolute',
    top: 230,
    width: 332,
    height: 210,
    left: 35,
    zIndex: 1,
  },
  submit: {
    position: 'absolute',
    width: 150,
    borderRadius: 25,
    top: 463,
    right: 25,
    backgroundColor: '#AFB7F7',
    elevation: 20,
    shadowColor: 'black',
  },
  input: {
    position: 'absolute',
    top: 140,
    left: 33
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
  }
});

export default PlayersComponent;
