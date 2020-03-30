import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    updateUsersArray(state, payload) {
      state.users.push(payload);
    },
    deleteUser(state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
  getters: {
    ready(state) {
      return !state.users.length > 0;
    },
  },
  actions: {
  },
  modules: {
  },
});
