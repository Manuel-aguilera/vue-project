<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <h1
        :style="colorContador"
      >{{title}} {{contador}}</h1>
      <button @click="incrementar">Aumentar</button>
      <BotonDisminuir/>
      <hr>
      <BotonAccion :estado="true"/>
      <BotonAccion :estado="false"/>
  </div>
</template>

<script>

import BotonDisminuir from '../components/BotonDisminuir';
import BotonAccion from '../components/BotonAccion';
import {mapState, mapMutations, mapActions} from 'vuex'; 

export default {
  name: 'Home',
  data() {
    return {
      title: "Mi contador es: "
    }
  },
  components: {
    BotonDisminuir,
    BotonAccion,
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'red'}: {'color': 'blue'}]
    }
  },
  methods: {
    // ...mapMutations(['incrementar']),
    ...mapActions(['incrementar']),
  }
}
</script>
