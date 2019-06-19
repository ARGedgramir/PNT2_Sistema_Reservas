<template>
  <div>
    <b-alert show variant="primary">Listado de Vuelos</b-alert>
    <b-table striped hover :items="vuelos"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "ListarVuelos",
      url: "http://127.0.0.1:8090/api/vuelos",
      vuelos: []
    };
  },
  methods: {
    listarVuelos() {
      axios
        .get(this.url + "/all")
        .then(response => {
          this.vuelos = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.listarVuelos();
  }
};
</script>
