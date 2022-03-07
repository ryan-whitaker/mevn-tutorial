export default {
    async getSurveys(context) {
        const body = { userId: context.rootGetters.userId };
        const response = await fetch(`${process.env.VUE_APP_EXPRESS_ROUTE}/surveys/all`, {
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
        
        const response = await fetch(`${process.env.VUE_APP_EXPRESS_ROUTE}/surveys/delete`, {
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
    clearSurveys(context) {
        context.commit('setSurveys', []);
    }
}