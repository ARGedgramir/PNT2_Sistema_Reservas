<template>
  <div>
    <b-alert show variant="primary">Búsqueda de Vuelos</b-alert>

    <b-form-input v-model="origen" placeholder="Ingresar Origen"></b-form-input>
    <br>
    <b-form-input v-model="destino" placeholder="Ingresar Destino"></b-form-input>
    <br>
    <b-form-input v-model="fecha" placeholder="Ingresar Fecha" type="date"></b-form-input>
    <br>
    <b-form-input v-model="cant_pax" placeholder="Ingresar Pasajeros"></b-form-input>
    <br>
    <b-button block variant="primary" @click="buscarVuelo()">Buscar Vuelo</b-button>
    <br>
        <b-table striped hover :items="vuelos"></b-table>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismiss-count-down="countDownChanged"
    ><b>Vuelo no encontrado!!</b> El mensaje desaparecerá en...{{ dismissCountDown }}</b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "busq_reservas",
      url: "http://127.0.0.1:8090/api/vuelos",
      vuelos: [],
      fecha: "",
      origen: "",
      destino: "",
      cant_pax: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    buscarVuelo() {
      axios

        .get(
          this.url +
            "/vuelos?fecha=" +
            this.fecha +
            "&destino=" +
            this.destino +
            "&origen=" +
            this.origen+
            "&cant_pax=" +
            this.cant_pax
        )
        .then(response => {
          this.vuelos = response.data
        })
        .catch(e => {
          this.showAlert()
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>


