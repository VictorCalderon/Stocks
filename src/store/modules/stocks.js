import dummyStocks from '../../../data/dummyStocks'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    // 'RND_STOCKS'(state) {
    // }
};

const actions = {
    // buyStock: ({ commit }, order) => {
    //     commit();
    // },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', dummyStocks)
    },
    // randomizeStocks: ({ commit }) => {
    //     commit('RND_STOCKS')
    // }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}