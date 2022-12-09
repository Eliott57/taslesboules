import { LoadableStatus } from "../helpers/LoadableStatus";
import QuestionsStore from "../../store/QuestionsStore";
import { IQuestion } from "../../@types/question";
import StatsComponent from "./StatsComponent";

function StatsLoaderComponent(){
  return(
    <LoadableStatus
      promise={QuestionsStore.fetchQuestions()}
      render={(state, questions: IQuestion[]) => {
        if(!questions)
          return null;

        return(
          <StatsComponent questions={questions}/>
        )
      }}
    />
  )
}

export default StatsLoaderComponent;
