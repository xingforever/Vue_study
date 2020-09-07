import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addcrement(state, count) {
      state.counter += count
    }
  },
  getters: {
    powercounter(state) {
      return state.counter * state.counter
    }

  },

  actions: {
    //异步方法
  },
  modules: {

    a:{
      state:{

      },
      mutations:{

      },
      getters:{

      },
      actions:{
        
      }
    }
  }
})