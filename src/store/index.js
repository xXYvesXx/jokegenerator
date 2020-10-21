import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentJoke: '',
    allJokes: []
  },
  mutations: {
    setCurrentJoke(state,payload){
      state.currentJoke = payload
      state.allJokes.push(payload)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getcurrentJoke(state){
      return state.currentJoke
    }
  }
})
