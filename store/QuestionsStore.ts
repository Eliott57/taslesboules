class QuestionsStore {
    static fetchQuestions = () => {
        return fetch('https://63908d640bf398c73a8b6855.mockapi.io/api/v1/questions');
    }
}

export default QuestionsStore;
