import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
  state: {
    contador : 0
  }
}

const tarefasModule = {
  state: {
    tarefas: []
  },
  getters: {
    tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: (state) => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefasPorId: state => id => state.tarefas.find(t => t.id === id)
  },
  mutations: {
    listarTarefas:(state, { tarefas }) => {
      state.tarefas = tarefas
    }
    // after state snapshot
  },
  actions: {
    buscarTarefas: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
                    { id: 1, titulo: 'Aprender Vue', concluido: true },
                    { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                    { id: 3, titulo: 'Aprender Vuex', concluido: false }
                ])
        }, 2000)
      })
    },
    listarTarefas: async({commit, dispatch }) => {
      const tarefas = await dispatch('buscarTarefas')
      commit('listarTarefas', { tarefas })
    }
  },
  modules: {
  }
}

const store =  new Vuex.Store({
  modules: {
    contador: contadorModule,
    tarefas: tarefasModule
  }
})

export default store