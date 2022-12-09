import AsyncStorage from '@react-native-async-storage/async-storage';

class QuestionsStore {
    static fetchQuestions = () => {
        return fetch('https://63908d640bf398c73a8b6855.mockapi.io/api/v1/questions');
    }

    static _storeData = async (questionId: number, option: number) => {
        try {
          const data = await this._retrieveData(questionId);
          let optionANumber = 0;
          let optionBNumber = 0;

          if(data){
            const parsedData = JSON.parse(data);

            optionANumber = parsedData.optionANumber;
            optionBNumber = parsedData.optionBNumber;
          }

          option === 0 ? optionANumber += 1 : optionBNumber += 1;

          const updatedData = {
            optionANumber: optionANumber,
            optionBNumber: optionBNumber
          };

          await AsyncStorage.setItem(
              questionId.toString(),
              JSON.stringify(updatedData)
          );
        } catch (error) {
            console.log(error)
        }
    }

  static _retrieveData = async (questionId: number) => {
    try {
      const value = await AsyncStorage.getItem(questionId.toString());
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error)
    }
  };
}

export default QuestionsStore;
