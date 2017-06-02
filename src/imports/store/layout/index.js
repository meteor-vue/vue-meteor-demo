export default {
  namespaced: true,

  state: () => ({
    showCart: false,
  }),

  getters: {
    showCart: state => state.showCart,
  },

  mutations: {
    showCart: (state, value) => {
      state.showCart = value
    },
  },

  actions: {
    showCart({ commit }, value) {
      commit('showCart', value)
    }
  },
}
