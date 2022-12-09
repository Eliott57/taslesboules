import { Pressable, StyleSheet, Text, View } from "react-native";
import ToDoComponent from "./ToDoComponent";
import { SvgCssUri } from "react-native-svg";
import * as React from "react";
import { GameContextType, IGame } from "../../@types/game";
import moment from "moment";
import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import BackgroundNextTurn from "../../assets/nextTurn/BackgroundNextTurn.svg";

function GameTurnResultComponent(){
  const { game, updateGame } = useContext(GameContext) as GameContextType;
  const svgNextTurn = resolveAssetSource(BackgroundNextTurn);

  const nextTurn = () => {
    if(game){
      let updatedGame: IGame = { ...game };

      updatedGame.ended = game?.currentTurnNumber === game?.turns.length;
      updatedGame.currentTurnNumber = updatedGame.ended ? updatedGame.currentTurnNumber : updatedGame.currentTurnNumber + 1;
      updatedGame.currentPlayerId = 1;
      updatedGame.currentTime = moment();

      updateGame(updatedGame);
    }
  }

  return(
    <View>
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
  back: {
    position: 'absolute',
    top: 0,
    left: -30,
    zIndex: -1,
  },
  todoComponent: {
    top: 250
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
    width: 150,
    borderRadius: 25,
    top: 550,
    right: 25,
    backgroundColor: '#AFB7F7',
    elevation: 20,
    shadowColor: 'black',
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
