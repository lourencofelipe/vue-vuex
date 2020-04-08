<template>
    <div>

        <h2 class="font-weight-light">Contador: {{ contador }}</h2>
        <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
        <button class="btn btn-lg btn-success" @click="incrementar">+</button>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    // computed: mapState(['contador']),
    computed: mapState({
        //contador: state => state.contador
        contador: 'contador'
    }),
    methods: {
        decrementar() {
            this.$store.state.contador--
        },
        incrementar() {
            this.$store.state.contador++
        }
    }
}
</script>