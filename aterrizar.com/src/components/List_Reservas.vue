<template>
  <div>
    <b-alert show variant="primary">Listado de Reservas</b-alert>
    <b-table striped hover :items="reservas"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "List_Reservas",
      url: "http://127.0.0.1:8090/api/vuelos",
      reservas: []
    };
  },
  methods: {
    listarReservas() {
      axios
        .get(this.url + "/mostrarReservas/all")
        .then(response => {
          this.reservas = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.listarReservas();
  }
};
</script>
