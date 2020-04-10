import tarefasModule from './index'

const MODULE_NAME = 'tarefas'

export default (rootStore) => {
    // Verifica se há alguma propriedade dentro do objeto.
    if(!(MODULE_NAME in rootStore._modules.root._children)){
        rootStore.registerModule(MODULE_NAME, tarefasModule)
    }
}