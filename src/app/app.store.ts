import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '宁浩网',
  },

  getters: {
    name(state) {
      return `🎈 ${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },
  },
});

export default store;
