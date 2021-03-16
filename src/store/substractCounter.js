export default {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    }
  },
  actions: {
    incrementResult(context) {
      context.commit('increment')
    }
  },
  modules: {
  }
}