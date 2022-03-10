import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SAVE_USER(state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    saveUser(context, payload) {
      context.commit('SAVE_USER', payload)
    }
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  }
})
