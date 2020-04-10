
import * as types from './mutation-types'
import TarefasService from './../_services/tarefasService'

export default {
    criarTarefa: ({ commit }, { tarefa }) => {
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
        const response = await TarefasService.deleteTarefa(tarfa.id)
        commit(types.DELETAR_TAREFA, { tarefa })
    },
    listarTarefas: async ({ commit }) => {
        const response = await TarefasService.getTarefas()
        commit(types.LISTAR_TAREFAS, { tarefas: response.data })
    }
}