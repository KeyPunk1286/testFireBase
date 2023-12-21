// import { isMatchFilter } from '../helpers/filter.js'
import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('laptopProduct')
export default {
    namespaced: true,
    state: () => ({
        laptopProductList: [],
        filteredProductList: {},
        filteredProductListInfo: null,

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        // getLaptopProductList: (state) =>
        //     state.laptopProductList.filter((laptop) =>
        //         isMatchFilter(laptop, state.filteredProductList, state.filteredProductListInfo)
        //     ),
        // getItemById: (state) => (itemId) => state.todoList.find((item) => item.id == itemId),

        getUniqueSellers: (state) => {
            const uniqueBrandsSet = new Set(state.laptopProductList.map((laptop) => laptop.sellers))
            return Array.from(uniqueBrandsSet)
        },
        getUniqueBrand: (state) => {
            const uniqueBrandsSet = new Set(state.laptopProductList.map((laptop) => laptop.brand))
            return Array.from(uniqueBrandsSet)
        },
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.laptopProductList = itemsList
        },
        deleteItem(state, itemId) {
            state.todoList = state.laptopProductList.filter((item) => item.id !== itemId)
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        setFilteredLaptodList(state, newValue) {
            state.filteredProductList = newValue
            console.log(newValue)
        },
        setFilteredInfo(state, newVal) {
            state.filteredProductListInfo = newVal
        },
    },
    actions: {
        loadList({ commit }) {
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
        addItem({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteItem({ commit }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    commit('deleteItem', itemId)
                    // dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateItem({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
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
        filteredLaptopList({ commit }, newValue) {
            commit('setFilteredLaptodList', newValue)
        },
        filteredInfo({ commit }, newVal) {
            commit('setFilteredInfo', newVal)
        },
    },
}
