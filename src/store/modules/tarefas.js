const state = {
    tarefas: []
}

const getters = {
    tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefasPorId: state => id => state.tarefas.find(t => t.id === id),
    boasVindas: (state, getters, rootState, rootGetters) =>  rootGetters.mensagemBoasVindas
}


const actions = {
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
    listarTarefas: async ({ commit, dispatch }) => {
        const tarefas = await dispatch('buscarTarefas')
        commit('listarTarefas', { tarefas })

        dispatch('logar', 'Bruce Dickinson', { root: true })
        // dispatch('logar', null, {root: true})
    }
}

const mutations = {
    listarTarefas: (state, { tarefas }) => {
        state.tarefas = tarefas
    }
    // after state snapshot
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}