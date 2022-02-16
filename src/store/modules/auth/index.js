import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
    state() {
        return {
            userName: null,
            userId: null,
            token: null,
        }
    },
    actions,
    getters, 
    mutations
};