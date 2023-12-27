import { isMatchFilter } from '../helpers/filter.js'
import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('brand')
export default {
    namespaced: true,
    state: () => ({
        barndList: [],
        filterBrandName: null,

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getBrandList: (state) => state.barndList.filter((brand) => isMatchFilter(brand, state.filterBrandName)),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.barndList = itemsList
        },
        // deleteItem(state, itemId) {
        //     state.barndList = state.barndList.filter((item) => item.id !== itemId)
        // },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        setFilteredBrandName(state, newVal) {
            state.filterBrandName = newVal
        },
    },
    actions: {
        loadBrandList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        // addItem({ commit, dispatch }, item) {
        //     commit('setError', null)
        //     commit('setLoading', true)
        //     collectionDB
        //         .addItem(item)
        //         .then(() => {
        //             dispatch('loadList')
        //         })
        //         .catch((error) => {
        //             commit('setError', error)
        //         })
        //         .finally(() => {
        //             commit('setLoading', false)
        //         })
        // },
        // deleteItem({ commit }, itemId) {
        //     commit('setError', null)
        //     commit('setLoading', true)

        //     collectionDB
        //         .deleteItem(itemId)
        //         .then(() => {
        //             commit('deleteItem', itemId)
        //             // dispatch('loadList')
        //         })
        //         .catch((error) => {
        //             commit('setError', error)
        //         })
        //         .finally(() => {
        //             commit('setLoading', false)
        //         })
        // },
        // updateItem({ commit, dispatch }, { itemId, data }) {
        //     commit('setError', null)
        //     commit('setLoading', true)

        //     collectionDB
        //         .updateItem(itemId, data)
        //         .then(() => {
        //             dispatch('loadList')
        //         })
        //         .catch((error) => {
        //             commit('setError', error)
        //         })
        //         .finally(() => {
        //             commit('setLoading', false)
        //         })
        // },
        filteredBrandName({ commit }, newVal) {
            commit('setFilteredBrandName', newVal)
        },
    },
}
