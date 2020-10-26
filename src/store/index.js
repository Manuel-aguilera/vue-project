import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100,
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload;
    },
    desincrementar(state, payload) {
      state.contador = state.contador - payload;
    }
  },
  actions: {
    incrementar({commit}) {
      commit('incrementar', 10);
    },
    desincrementar({commit}, numero) {
      commit('desincrementar', numero);
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero);
      } else {
        commit('desincrementar', objeto.numero);
      }
    }
  },
  modules: {
  }
})
