import { View, Text, StyleSheet, Pressable } from "react-native";
import BackGroundSVG from '../../assets/endGame/BackgroundEndGame.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';
import LoaderComponent from "../helpers/LoaderComponent";;
import * as React from "react";
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";

function GameResultComponent(){
  const { game, toggleLoading } = useContext(GameContext) as GameContextType;
  const svgBackGround = resolveAssetSource(BackGroundSVG);
  const navigation = useNavigation();

  if(!game)
    return null;

  useEffect(() => {
    toggleLoading();
  }, []);

  return (
    <>
      {game.loading ? <LoaderComponent/> : null}
      <View>
        <Pressable style={styles.HomeButton} onPress={() => navigation.navigate('Home') }>
          <Text style={styles.HomeText}>Accueil</Text>
        </Pressable>
        <SvgCssUri style={styles.back} uri={svgBackGround.uri} width="120%" height="120%" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  back: {
    top: -100,
    left: 0,
    zIndex: -1,
  },
  HomeButton: {
    position: 'absolute',
    width: 130,
    borderRadius: 25,
    top: 250,
    left: 140,
    backgroundColor: '#AFB7F7',
    elevation: 20,
    shadowColor: 'black',
  },
  HomeText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
  }
});

export default GameResultComponent;
