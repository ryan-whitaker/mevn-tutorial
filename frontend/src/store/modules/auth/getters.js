export default {
    isAuthenticated(state) {
        if (state.userName || state.userId || state.token) {
            return true;
        } else {
            return false;
        }        
    },
    userName(state) {
        return state.userName;
    },
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    }
};