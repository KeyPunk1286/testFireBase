import { createStore } from 'vuex'
import auth from './modules/auth.js'
import laptop from './modules/laptop.js'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        laptop,
    },
})
