export default {
    setSurveys(state, payload) {
        state.surveys = payload;
        console.log(state.surveys)
    },
    removeSurvey(state, payload) {
        state.surveys = state.surveys.filter(survey => survey._id !== payload.id)
    }
};