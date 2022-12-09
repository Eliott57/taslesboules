import { View, Text, StyleSheet } from "react-native";
import TodoNextTurn from '../../assets/nextTurn/TodoNextTurn.svg';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/gameContext";
import { GameContextType, IGame } from "../../@types/game";
import { IPlayer } from "../../@types/player";
import { IAnswer } from "../../@types/answer";
import { PlayerContext } from "../../context/playerContext";
import { PlayerContextType } from "../../@types/player";

const svgTodoNextTurn = resolveAssetSource(TodoNextTurn);

function ToDoComponent(){
  const { game, updateGame } = useContext(GameContext) as GameContextType;
  const { players } = useContext(PlayerContext) as PlayerContextType;

  if(!game)
    return null;

  const getAnswers = () : IAnswer[] => {
    return game.turns[game.currentTurnNumber - 1].answers;
  }

  const getLoseAnswers = () : IAnswer[] => {
    const answers = getAnswers();
    const optionAAnswers = answers?.filter(answer => answer.optionSelected === 0);
    const optionBAnswers = answers?.filter(answer => answer.optionSelected === 1);

    return optionAAnswers.length < optionBAnswers.length ? optionAAnswers : optionAAnswers.length > optionBAnswers.length ? optionBAnswers : answers;
  }

  const getSlowestAnswer = () : IAnswer => {
    const loseAnswers = getLoseAnswers();
    return loseAnswers.reduce((a: IAnswer, b: IAnswer) => a.responseTime > b.responseTime ? a : b);
  }

  const getLoserId = () : number => {
    const slowestAnswer = getSlowestAnswer();
    return slowestAnswer.playerId;
  }

  const getLoser = () : IPlayer | undefined => {
    const loserId = getLoserId();
    return players.find(player => player.id === loserId);
  }

  useEffect(() => {
    if(game){
      let updatedGame: IGame = { ...game };

      updatedGame.turns[game.currentTurnNumber - 1].loser = getLoser();

      updateGame(updatedGame);
    }
  }, []);

  return (
    <View style={styles.contain}>
      <View style={styles.containText}>
        <Text style={styles.title}>{game.turns[game.currentTurnNumber - 1].loser?.name} t'as les boules... voici ton gage : </Text>
        <Text style={styles.txt}>{game.turns[game.currentTurnNumber - 1].question.toDo}</Text>
      </View>
      <SvgCssUri style={styles.back} uri={svgTodoNextTurn.uri} width="100%" height="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    top: 0,
    left: 5,
    zIndex: 10,
  },
  contain: {
    height: 300
  },
  containText: {
    position: 'absolute',
    top: 125,
    left: 64,
    height: 100,
    zIndex: 15,
    width: 300
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: '900',
  },
  txt: {
    color: "white",
    fontSize: 15,
    fontWeight: '400',
  }
});

export default ToDoComponent;
