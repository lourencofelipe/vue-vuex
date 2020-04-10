import Vue from 'vue'
import Vuex from 'vuex'
import contador from '@/store/modules/contador'
import tarefas from '@/store/modules/tarefas'

Vue.use(Vuex)

const state = {
  usuario: 'Bruce'
}

const getters = {
  mensagemBoasVindas: state => `Olá ${state.usuario}`
}

const actions = {
  logar: ({ commit }, usuario) => {
    commit('logar', usuario)
  }
}

const mutations = {
  logar: (state, usuario) => {
    state.usuario = usuario
  }
}

const modules = {
  contador,
  tarefas
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
