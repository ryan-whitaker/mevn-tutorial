import { createStore } from 'vuex';

import authModule from './modules/auth/index.js'
import surveysModule from './modules/surveys/index.js'

const store = createStore({
    modules: {
        auth: authModule,
        surveys: surveysModule
    }
});

export default store;