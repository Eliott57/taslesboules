import { StyleSheet, Text, View } from "react-native";
import OptionsComponent from "../questions/OptionsComponent";
import OptionButtonComponent from "../questions/OptionButtonComponent";
import { SvgCssUri } from "react-native-svg";
import * as React from "react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import BackgroundOption from "../../assets/questions/BackgroundOption.svg";
import { useContext, useEffect } from "react";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";
import { ITurn } from "../../@types/turn";

function GameViewComponent(){
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { game, toggleLoading } = useContext(GameContext) as GameContextType;

  if(!game)
    return null;

  useEffect(() => {
    toggleLoading();
  }, []);

  const playerName = players.find(player => player.id === game.currentPlayerId)?.name
  const svgOption = resolveAssetSource(BackgroundOption);

  return(
    <View style={{opacity: game.loading ? 0 : 1, height: game.loading ? 0 : '100%'}}>
      <OptionsComponent />
      <Text style={styles.playerName}>C'est à {playerName} de jouer</Text>
      <View style={styles.optionsComponent}>
        <OptionButtonComponent optionNumber={0} />
        <OptionButtonComponent optionNumber={1} />
      </View>

      <SvgCssUri style={styles.back} uri={svgOption.uri} width="120%" />
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 0,
    left: -30,
    zIndex: -1,
  },
  playerName: {
    position: 'absolute',
    top: 350,
    left: 103,
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    width: 190,
    zIndex: 1,
  },
  optionsComponent: {
    flex: 1,
    bottom: 75,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 2
  },
});

export default GameViewComponent;
