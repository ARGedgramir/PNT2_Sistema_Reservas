<template>
  <div>
    <b-alert show variant="primary">Búsqueda de Reservas</b-alert>

    <b-form-input v-model="id_reserva" placeholder="Ingresar Reserva"></b-form-input>
    <br>
<b-button block variant="primary" @click="buscarReserva()">Buscar Reserva</b-button>
    <br>
    <b-table v-if="reservaNoEncontrada==false" striped hover :items="reservas"></b-table>
  
  <span v-if="reservaNoEncontrada==true">
    <b-alert show variant="primary">Reserva No Encontrada</b-alert>
      </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "busq_reservas",
      url: "http://localhost:8090/api/reservas",
      reservas: [],
      id_reserva: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      reservaNoEncontrada: false,
      
    };
  },
  methods: {

    buscarReserva(){
      axios.get(
        this.url +
            "/Mostrarreservas/" +
            this.id_reserva
        )        
          .then(response => {
          this.reservaNoEncontrada=false
          this.reservas = response.data
        })
        .catch(e => {
            this.reservaNoEncontrada=true
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


