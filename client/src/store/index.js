import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:4000'
const enhanceAccessToken = () => {
  const {accessToken} = localStorage
  if(!accessToken) 
    return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}
enhanceAccessToken()

export default new Vuex.Store({
  state: {
    serverURL : resourceHost,
    accessToken: null
  },
  getters : {
    isAuthenticated(state) {
      state.accessToken = state.accessToken || localStorage.accessToken
      console.log(state.accessToken)
      return state.accessToken
    }
  },
  mutations: {
    login(state, {accessToken}) {
      state.accessToken = accessToken
      localStorage.setItem("accessToken", accessToken)
      // localStorage.accessToken = accessToken
    },
    logout(state) {
      state.accessToken = null
      delete localStorage.accessToken
    },
  },
  actions: {
    login({commit}, {email, password}) {
      axios.post(`${resourceHost}/login`, {
        user_id: email, 
        user_pw: password
      }) //수정!
        .then(({data}) => {
          console.log(data)
          commit('login', data)
        })
    },
    logout({commit}) {
      axios.defaults.headers.common['Authorization'] = undefined
      commit('logout');
    }
  },
  modules: {
  }
})
