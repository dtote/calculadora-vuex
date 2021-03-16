import Vue from 'vue';
import Vuex from 'vuex';
import substractCounter from './substractCounter';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: 0,
  },
  mutations: {
    mutateResult(state, newResult) {
      state.result = newResult;
    },
    restar(state) {
      state.result -= 1;
    },
    sumar(state) {
      state.result += 1;
    }
  },
  actions: {
    updateResult(context, newResult) {
      context.commit('mutateResult', newResult)
    },
    substractResult(context) {
      context.commit('restar')
    },
    addResult(context) {
      context.commit('sumar')
    }
  },
  getters: {
    isPositive(state) {
      return (state.result >= 0) ? true : false;
    }
  },
  modules: {
    substractCounter
  }
})
