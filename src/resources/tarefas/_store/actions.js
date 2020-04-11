
import * as types from './mutation-types'
import TarefasService from './../_services/tarefasService'

export default {
    concluirTarefa: async ({dispatch}, payload) => {
        const tarefa = Object.assign({}, payload.tarefa)
        tarefa.concluido = !tarefa.concluido
        dispatch('editarTarefa', { tarefa })
    },
    criarTarefa: async ({ commit }, { tarefa }) => {
        return TarefasService.postTarefa(tarefa)
            .then(response => {
                commit(types.CRIAR_TAREFA, { tarefa: response.data })
            })
    },
    editarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasService.putTarefa(tarefa)
        commit(types.EDITAR_TAREFA, { tarefa: response.data })
    },
    deletarTarefa: async ({ commit }, { tarefa }) => {
        const response = await TarefasService.deleteTarefa(tarefa.id)
        commit(types.DELETAR_TAREFA, { response })
    },
    listarTarefas: async ({ commit }) => {
        const response = await TarefasService.getTarefas()
        commit(types.LISTAR_TAREFAS, { tarefas: response.data })
    }
}