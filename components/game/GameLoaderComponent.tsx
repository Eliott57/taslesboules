import { LoadableStatus } from "../helpers/LoadableStatus";
import QuestionsStore from "../../store/QuestionsStore";
import { IQuestion } from "../../@types/question";
import GameComponent from "./GameComponent";

function GameLoaderComponent(){
  return(
    <LoadableStatus
      promise={QuestionsStore.fetchQuestions()}
      render={(state, questions: IQuestion[]) => {
        if(!questions)
          return null;

        return(
          <GameComponent questions={questions}/>
        )
      }}
    />
    )
}

export default GameLoaderComponent;
