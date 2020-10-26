<template>
  <button @click="desincrementar(20)">Disminuir</button>
</template>

<script>
import {mapState, mapMutations, mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['desincrementar']),
    }

}
</script>

<style>

</style>