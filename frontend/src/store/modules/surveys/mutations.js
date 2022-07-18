export default {
    setSurveys(state, payload) {
        state.surveys = payload;
    },
    removeSurvey(state, payload) {
        state.surveys = state.surveys.filter(survey => survey._id !== payload.id)
    }
};