export default {
    async getSurveys(context) {
        const body = { userId: context.rootGetters.userId };
        const response = await fetch(`http://localhost:3000/surveys/all`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + context.rootGetters.token
            },
            body: JSON.stringify(body)
        });
        const responseData = await response.json();

        context.commit('setSurveys', responseData);
    },
    async deleteSurvey(context, payload) {
        context.commit('removeSurvey', payload);
        const body = {
            userId: context.rootGetters.userId,
            surveyId: payload.id
        };
        
        const response = await fetch(`http://localhost:3000/surveys/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': context.rootGetters.token
            },
            body: JSON.stringify(body)
        });
        const responseData = await response.json();
        console.log(responseData) 
    },
    async createSurvey(context, payload) {
        await fetch(`http://localhost:3000/surveys/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': context.rootGetters.token
            },
            body: JSON.stringify(payload)
        })
    },
    clearSurveys(context) {
        context.commit('setSurveys', []);
    }
}