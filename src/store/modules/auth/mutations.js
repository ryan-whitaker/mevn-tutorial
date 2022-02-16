export default {
    setUser(state, payload) {
        state.userName = payload.userName;
        state.token = payload.token;
        state.userId = payload.userId;
    }
};