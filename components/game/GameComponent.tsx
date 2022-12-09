import { View, Text, StyleSheet } from "react-native";
import { IQuestion } from "../../@types/question";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect } from "react";
import { PlayerContextType } from "../../@types/player";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";
import { ITurn } from "../../@types/turn";
import * as React from "react";
import GameResultComponent from "./GameResultComponent";
import OptionsComponent from '../questions/OptionsComponent';
import OptionButtonComponent from '../questions/OptionButtonComponent';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import BackgroundOption from '../../assets/questions/BackgroundOption.svg';
import GameTurnResultComponent from "./GameTurnResultComponent";

type Props = {
  questions: IQuestion[]
}

function GameComponent(props: Props) {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { game, addGame } = useContext(GameContext) as GameContextType;
  const svgOption = resolveAssetSource(BackgroundOption);

  useEffect(() => {
    const turns: ITurn[] = props.questions.map(question => {
      return {
        id: question.id,
        question: question,
        answers: [],
        loser: undefined
      }
    });

    addGame(turns);
  }, []);

  const gameEnded = () => {
    return game?.currentTurnNumber === game?.turns.length;
  }

  const endOfTurn = () => {
    if(game){
      return game.currentPlayerId > players.length;
    }

    return false;
  }

  if(!game)
    return null;

  if(endOfTurn())
    return <GameTurnResultComponent/>

  if(gameEnded())
    return <GameResultComponent/>

  const playerName = players.find(player => player.id === game.currentPlayerId)?.name

  return (
    <View>
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

export default GameComponent;
