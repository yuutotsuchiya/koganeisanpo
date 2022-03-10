import { createStore } from 'vuex'
import axiosBase from 'axios'
const axios = axiosBase.create({
  headers: {
    'X-MICROCMS-API-KEY': 'f36de6fd278c4376b2721584946623850462'
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
      const res = await axios.get('https://koganeisanpo.microcms.io/api/v1/entries')
      commit('GET_ENTRIES', res.data)
    },
    getEntry: async ({ commit }, id) => {
      const res = await axios.get(`https://koganeisanpo.microcms.io/api/v1/entries/${id}`)
      commit('GET_ENTRY', res.data)
    }
  },
  modules: {
  }
})
