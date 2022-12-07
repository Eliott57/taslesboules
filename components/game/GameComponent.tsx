import { View, Text } from "react-native";
import { LoadableStatus } from "../helpers/LoadableStatus";
import QuestionsStore from "../../store/QuestionsStore";

function GameComponent(){

  return(
    <LoadableStatus
      promise={QuestionsStore.fetchQuestions()}
      render={(state, value) => {
      if(!value)
        return null;
      return(
        <View>
        </View>
      )
      }}
      />
    )
}

export default GameComponent;
