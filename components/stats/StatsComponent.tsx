import { View, Text } from "react-native";
import { IQuestion } from "../../@types/question";
import questionsStore from "../../store/QuestionsStore";
import { useEffect } from "react";

type Props = {
  questions: IQuestion[]
}

function StatsComponent(props: Props){

  useEffect(() => {
    props.questions.map(async (question) => {
      const data = await questionsStore._retrieveData(question.id);

       if(data){
         console.log(JSON.parse(data).optionANumber)
         console.log(JSON.parse(data).optionBNumber)
       }
    });
  }, []);
  return (
    <View>
      <Text>
        Test Stats Component
      </Text>
    </View>
  )
}

export default StatsComponent;
