export default {
    namespaced: true,
    state: () => ({
        basketProductList: [],
    }),
    getters: {
        getBasketProductList: (state) => state.basketProductList,
        getSumBasketProductList: (state) =>
            state.basketProductList.reduce((prevSum, currentValue) => prevSum + currentValue.price, 0),
    },
    mutations: {
        setAddNewLaptop(state, laptopObj) {
            state.basketProductList.push(laptopObj)
        },
        deleteLaptopObj(state, laptopId) {
            state.basketProductList = state.basketProductList.filter((item) => item.id !== laptopId)
        },
    },
    actions: {
        addNewLaptop({ commit }, laptopObj) {
            commit('setAddNewLaptop', laptopObj)
        },
        deleteLaptopObj({ commit }, laptopId) {
            commit('deleteLaptopObj', laptopId)
        },
    },
}
