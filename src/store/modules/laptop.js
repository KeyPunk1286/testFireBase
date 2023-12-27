// import { isMatchFilter } from '../helpers/filter.js'
import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('laptopProduct')
export default {
    namespaced: true,
    state: () => ({
        laptopProductList: [],
        // filteredProductList: {},
        // filteredProductListInfo: null,

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getLaptopProductList: (state) => state.laptopProductList,
        getItemById: (state) => (itemId) => state.laptopProductList.find((item) => item.id == itemId),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.laptopProductList = itemsList
        },
        // deleteItem(state, itemId) {
        //     state.todoList = state.laptopProductList.filter((item) => item.id !== itemId)
        // },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        // setFilteredLaptodList(state, newValue) {
        //     state.filteredProductList = newValue
        //     console.log(newValue)
        // },
        // setFilteredInfo(state, newVal) {
        //     state.filteredProductListInfo = newVal
        // },
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
        deleteItem({ commit, dispatch }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    // commit('deleteItem', itemId)
                    dispatch('loadList')
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

        loadFilteredNotebooksList({ commit, dispatch }, filterObj) {
            const sellersFilterArr = filterObj.sellersList
            const brandsFilterArr = filterObj.brandList
            if (sellersFilterArr.length && brandsFilterArr.length) {
                console.log('Sellers', sellersFilterArr)
                console.log('Brands', brandsFilterArr)
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadFilteredDataWithTwoFields('sellers', 'in', sellersFilterArr, 'brand', 'in', brandsFilterArr)
                    .then((list) => {
                        commit('setItemsList', list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            } else if (sellersFilterArr.length && !brandsFilterArr.length) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadFilteredData('sellers', 'in', sellersFilterArr)
                    .then((list) => {
                        commit('setItemsList', list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            } else if (!sellersFilterArr.length && brandsFilterArr.length) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadFilteredData('brand', 'in', brandsFilterArr)
                    .then((list) => {
                        commit('setItemsList', list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            } else {
                dispatch('loadList')
            }
        },
    },
}
