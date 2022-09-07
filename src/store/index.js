import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    miceinfo: []
  },
  mutations: {
    savemiceinfo(state, miceinfo){
      state.miceinfo = []
      state.miceinfo = miceinfo
    }
  },
  actions: {

  },
  modules: {}
});