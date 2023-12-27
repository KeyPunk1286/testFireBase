import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('sellers')
export default {
    namespaced: true,
    state: () => ({
        sellersList: [],

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getSellersList: (state) => state.sellersList,
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.sellersList = itemsList
        },
        // deleteItem(state, itemId) {
        //     state.sellersList = state.sellersList.filter((item) => item.id !== itemId)
        // },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadSellersList({ commit }) {
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

        // loadFilteredNotebooksList({ commit, dispatch }, filterObj) {
        //     const sellersFilterArr = filterObj.sellersList
        //     const brandsFilterArr = filterObj.brandList
        //     if (sellersFilterArr.length && brandsFilterArr.length) {
        //         console.log('Sellers', sellersFilterArr)
        //         console.log('Brands', brandsFilterArr)
        //         commit('setError', null)
        //         commit('setLoading', true)
        //         collectionDB
        //             .loadFilteredDataWithTwoFields('sellers', 'in', sellersFilterArr, 'brand', 'in', brandsFilterArr)
        //             .then((list) => {
        //                 commit('setItemsList', list)
        //             })
        //             .catch((error) => {
        //                 commit('setError', error)
        //             })
        //             .finally(() => {
        //                 commit('setLoading', false)
        //             })
        //     } else if (sellersFilterArr.length && !brandsFilterArr.length) {
        //         commit('setError', null)
        //         commit('setLoading', true)
        //         collectionDB
        //             .loadFilteredData('sellers', 'in', sellersFilterArr)
        //             .then((list) => {
        //                 commit('setItemsList', list)
        //             })
        //             .catch((error) => {
        //                 commit('setError', error)
        //             })
        //             .finally(() => {
        //                 commit('setLoading', false)
        //             })
        //     } else if (!sellersFilterArr.length && brandsFilterArr.length) {
        //         commit('setError', null)
        //         commit('setLoading', true)
        //         collectionDB
        //             .loadFilteredData('brand', 'in', brandsFilterArr)
        //             .then((list) => {
        //                 commit('setItemsList', list)
        //             })
        //             .catch((error) => {
        //                 commit('setError', error)
        //             })
        //             .finally(() => {
        //                 commit('setLoading', false)
        //             })
        //     } else {
        //         dispatch('loadList')
        //     }
        // },
    },
}
