import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { IQuestion } from "../../@types/question";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect, useState } from "react";
import { IPlayer, PlayerContextType } from "../../@types/player";
import { GameContext } from "../../context/gameContext";
import { GameContextType, IGame } from "../../@types/game";
import { ITurn } from "../../@types/turn";
import * as React from "react";
import { IAnswer } from "../../@types/answer";
import GameResultComponent from "./GameResultComponent";
import OptionsComponent from '../questions/OptionsComponent.tsx';
import OptionButtonComponent from '../questions/OptionButtonComponent.tsx';
import ToDoComponent from './ToDoComponent.tsx';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { useNavigation } from '@react-navigation/native';
import BackgroundOption from '../../assets/questions/BackgroundOption.svg';
import BackgroundNextTurn from '../../assets/nextTurn/BackgroundNextTurn.svg';


const svgOption = resolveAssetSource(BackgroundOption);
const svgNextTurn = resolveAssetSource(BackgroundNextTurn);

type Props = {
  questions: IQuestion[]
}

function GameComponent(props: Props) {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { game, addGame, updateGame } = useContext(GameContext) as GameContextType;

  useEffect(() => {
    const turns: ITurn[] = props.questions.map(question => {
      return {
        id: question.id,
        question: question,
        answers: [],
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

  const nextTurn = () => {
    if(game){
      let updatedGame: IGame = { ...game };

      updatedGame.ended = gameEnded();
      updatedGame.currentTurnNumber = updatedGame.ended ? updatedGame.currentTurnNumber : updatedGame.currentTurnNumber + 1;
      updatedGame.currentPlayerId = 1;

      updateGame(updatedGame);
    }
  }

  const chooseOption = (optionNumber: number) => {
    if(game){
      let updatedGame: IGame = { ...game };

      const answer: IAnswer = {
        playerId: game.currentPlayerId,
        optionSelected: optionNumber
      }

      updatedGame.turns[updatedGame.currentTurnNumber - 1].answers.push(answer);
      updatedGame.currentPlayerId += 1;

      updateGame(updatedGame);
    }
  }

  if(!game)
    return null;

  if(endOfTurn()){
    return (
      <View>
        <View style={styles.todoComponent}>
            <ToDoComponent label="test de todo a faire"/>
        </View>

        <Pressable style={styles.nextTurnButton} onPress={() => nextTurn()}>
            <Text style={styles.nextTurnText}>Suivant</Text>
        </Pressable>
        <SvgCssUri style={styles.backNextTurn} uri={svgNextTurn.uri} width="110%" />
      </View>
    )
  }

  if(gameEnded())
    return <GameResultComponent/>

  const optionA = game.turns[game.currentTurnNumber - 1].question.options[0];
  const optionB = game.turns[game.currentTurnNumber - 1].question.options[1];
  const playerName = players.find(player => player.id === game.currentPlayerId)?.name

  return (
    <View>
{/*       <Text>{game.turns[game.currentTurnNumber - 1].question.description}</Text> */}
{/*       <Text>{game.turns[game.currentTurnNumber - 1].question.options[0]}</Text> */}
{/*       <Text>{game.turns[game.currentTurnNumber - 1].question.options[1]}</Text> */}
{/*       <Text>C'est à {players.find(player => player.id === game.currentPlayerId)?.name} de jouer</Text> */}
{/*       {game.turns[game.currentTurnNumber - 1].answers.map((answer, index) => <Text key={index}>{answer.optionSelected}</Text>)} */}

{/*       <Button */}
{/*         onPress={() => chooseOption(0)} */}
{/*         title="Option A" */}
{/*         color="#841584" */}
{/*       /> */}
{/*       <Button */}
{/*         onPress={() => chooseOption(1)} */}
{/*         title="Option B" */}
{/*         color="#841584" */}
{/*       /> */}

      <OptionsComponent optionA={optionA} optionB={optionB} />
      <Text style={styles.playerName}>C'est à {playerName} de jouer</Text>
      <View style={styles.optionsConponent}>
        <Pressable style={styles.press} onPress={() => chooseOption(0)}>
            <OptionButtonComponent label="A" />
        </Pressable>
        <Pressable style={styles.press} onPress={() => chooseOption(0)}>
            <OptionButtonComponent onPress={() => chooseOption(1)} label="B" />
        </Pressable>
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
  optionsConponent: {
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
