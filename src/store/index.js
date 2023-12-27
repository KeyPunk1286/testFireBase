import { createStore } from 'vuex'
import auth from './modules/auth.js'
import laptop from './modules/laptop.js'
import sellers from './modules/sellers.js'
import brand from './modules/brand.js'
import basket from './modules/basket.js'
import users from './modules/users.js'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        laptop,
        sellers,
        brand,
        basket,
        users,
    },
})
