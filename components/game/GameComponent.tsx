import { View, Text, Button } from "react-native";
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
        <Text>
          Fin tu tour
        </Text>
        <Button
          onPress={() => nextTurn()}
          title="Tour suivant"
          color="#841584"
        />
      </View>
    )
  }

  if(gameEnded())
    return <GameResultComponent/>

  return (
    <View>
      <Text>{game.turns[game.currentTurnNumber - 1].question.description}</Text>
      <Text>{game.turns[game.currentTurnNumber - 1].question.options[0]}</Text>
      <Text>{game.turns[game.currentTurnNumber - 1].question.options[1]}</Text>
      <Text>C'est à {players.find(player => player.id === game.currentPlayerId)?.name} de jouer</Text>
      {game.turns[game.currentTurnNumber - 1].answers.map((answer, index) => <Text key={index}>{answer.optionSelected}</Text>)}
      <Button
        onPress={() => chooseOption(0)}
        title="Option A"
        color="#841584"
      />
      <Button
        onPress={() => chooseOption(1)}
        title="Option B"
        color="#841584"
      />
    </View>
  )
}

export default GameComponent;
