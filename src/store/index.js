import { createStore } from 'vuex'
import axiosBase from 'axios'
const axios = axiosBase.create({
  headers: {
    'X-API-KEY': 'b6a279b3-69db-45fc-8ac4-9fc647e3c73b'
  },
  responseType: 'json'
});
export default createStore({
  state: {
    entry: undefined,
    entries: []
  },
  mutations: {
    GET_ENTRIES(state, data) {
      state.entries = data.contents
    },
    GET_ENTRY(state, data) {
      state.entry = data
    }
  },
  actions: {
    getEntries: async ({ commit }) => {
      const res = await axios.get('https://tsuchiyaportfolio.microcms.io/api/v1/entries')
      commit('GET_ENTRIES', res.data)
    },
    getEntry: async ({ commit }, id) => {
      const res = await axios.get(`https://tsuchiyaportfolio.microcms.io/api/v1/entries/${id}`)
      commit('GET_ENTRY', res.data)
    }
  },
  modules: {
  }
})
