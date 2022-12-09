import { Pressable, StyleSheet, Text, View } from "react-native";
import ToDoComponent from "./ToDoComponent";
import { SvgCssUri } from "react-native-svg";
import * as React from "react";
import { GameContextType, IGame } from "../../@types/game";
import moment from "moment";
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/gameContext";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import BackgroundNextTurn from "../../assets/nextTurn/BackgroundNextTurn.svg";
import TurnResultComponent from "./TurnResultComponent";

function GameTurnResultComponent(){
  const { game, updateGame, toggleLoading } = useContext(GameContext) as GameContextType;
  const svgNextTurn = resolveAssetSource(BackgroundNextTurn);

  if(!game)
    return null;

  useEffect(() => {
    toggleLoading();
  }, []);

  const nextTurn = () => {
    let updatedGame: IGame = { ...game };

    updatedGame.ended = game.currentTurnNumber === game.turns.length;
    updatedGame.currentTurnNumber = updatedGame.ended ? updatedGame.currentTurnNumber : updatedGame.currentTurnNumber + 1;
    updatedGame.currentPlayerId = 1;
    updatedGame.currentTime = moment();

    updateGame(updatedGame);
  }

  return(
    <View style={{opacity: game.loading ? 0 : 1, height: game.loading ? 0 : '100%'}}>
      <View>
        <TurnResultComponent/>
      </View>
      <View style={styles.todoComponent}>
        <ToDoComponent/>
      </View>

      <Pressable style={styles.nextTurnButton} onPress={() => nextTurn()}>
        <Text style={styles.nextTurnText}>Suivant</Text>
      </Pressable>
      <SvgCssUri style={styles.backNextTurn} uri={svgNextTurn.uri} width="110%" />
    </View>
  )
}

const styles = StyleSheet.create({
  todoComponent: {
    top: 20
  },
  backNextTurn: {
    position: 'absolute',
    top: -340,
    left: 0,
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
    top: 110,
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 2,
    left: -30
  },
  press: {
    width: 140,
    height: 150,
  },
  nextTurnButton: {
    position: 'absolute',
    width: 130,
    borderRadius: 25,
    top: 590,
    right: 42,
    backgroundColor: '#AFB7F7',
    elevation: 20,
    shadowColor: 'black',
    zIndex: 10
  },
  nextTurnText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
  }
});

export default GameTurnResultComponent;
