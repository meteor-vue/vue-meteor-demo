export default {
  namespaced: true,

  supply: {
    use: ['Items'],
    inject: ({ Items }) => ({
      getters: {
        'all-items': () => Items.items,
      },
    }),
  },

  getters: {
    'count': (state, getters) => getters['all-items'].length,
  },
}
