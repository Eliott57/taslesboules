import { IQuestion } from "../../@types/question";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect } from "react";
import { PlayerContextType } from "../../@types/player";
import { GameContext } from "../../context/gameContext";
import { GameContextType } from "../../@types/game";
import { ITurn } from "../../@types/turn";
import * as React from "react";
import GameResultComponent from "./GameResultComponent";
import GameTurnResultComponent from "./GameTurnResultComponent";
import LoaderComponent from "../helpers/LoaderComponent";
import GameViewComponent from "./GameViewComponent";

type Props = {
  questions: IQuestion[]
}

function GameComponent(props: Props) {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { game, addGame } = useContext(GameContext) as GameContextType;

  useEffect(() => {
    const turns: ITurn[] = shuffleQuestions(props.questions).map(question => {
      return {
        id: question.id,
        question: question,
        answers: [],
        loser: undefined
      }
    });

    addGame(turns);
  }, []);

  const shuffleQuestions = (questions: IQuestion[]) : IQuestion[] => {
    return questions.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

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

  if(endOfTurn()){
    return (
      <>
        {game.loading ? <LoaderComponent/> : null}
        <GameTurnResultComponent/>
      </>
    )
  }

  if(gameEnded())
    return <GameResultComponent/>

  return (
    <>
      {game.loading ? <LoaderComponent/> : null}
      <GameViewComponent/>
    </>
  )
}

export default GameComponent;
