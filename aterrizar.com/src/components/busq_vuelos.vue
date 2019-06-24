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

      <table v-if="vuelosEncontrados==true">
          <thead>
            <th>ID</th>
            <th>Aerolinea</th>
            <th>Origen</th>
            <th>Aeropuerto Origen</th>
            <th>Destino</th>
            <th>Aeropuerto Destino</th>
            <th>Fecha de salida</th>
            <th>Duracion</th>
            <th>Hora de salida</th>
            <th>Hora de llegada</th>
            <th>Precio</th>
            <th>Cantidad de Lugares</th>
            <th></th>
          </thead>
          <tbody >
            <tr v-for="vuelo in vuelos" :key="vuelo.id_vue">
              <td>{{vuelo.id_vue}}</td>
              <td>{{vuelo.aerolinea}}</td>
              <td>{{vuelo.orig}}</td>
              <td>{{vuelo.orig_aeropuerto}}</td>
              <td>{{vuelo.dest}}</td>
              <td>{{vuelo.dest_aeropuerto}}</td>
              <td>{{vuelo.fecha}}</td>
              <td>{{vuelo.duracion}}</td>
              <td>{{vuelo.hora_partida}}</td>
              <td>{{vuelo.hora_llegada}}</td>
              <td>{{vuelo.precio}}</td>
              <td>{{vuelo.PaxDisp}}</td>
              <td><button
                  type="button"
                  @click="reservar(vuelo.id_vue)
                  formReserva=true"
                  class="btn btn-block btn-outline-primary waves-effect"
                  >Reservar
                  </button>
              </td>
            </tr>
          </tbody>
        </table>

      <!--formulario datos de reserva -->
     <span v-if="formReserva==true">
        <b-form-input v-model="reserva.nombreReserva"   placeholder="Ingresar Nombre"></b-form-input>
        <br>
        <b-form-input v-model="reserva.apellidoReserva" placeholder="Ingresar Apellido"></b-form-input>
        <br>
        <b-form-input v-model="reserva.telefonoReserva" placeholder="Ingresar Telefono"></b-form-input>
        <br>
        <b-form-input v-model="reserva.dniReserva"      placeholder= "Ingresar DNI" ></b-form-input>
        <br>
        <b-form-input v-model="reserva.mailReserva"     placeholder="Ingresar Mail"></b-form-input>
        <br>
        <b-form-input v-model="reserva.tarjReserva"     placeholder="Ingresar Tarjeta"></b-form-input>
        <br>
        <button type="button"
                  @click="enviarReserva()"
                  class="btn btn-block btn-outline-primary waves-effect">Reservar
                  </button>
      </span>
      <span v-if="reservaExitosa==true && formReserva==true"><b-alert show variant="primary">SU RESERVA HA SIDO REALIZADA</b-alert></span>
        <!-- <b-table :fields="id_vue" striped hover :items="vuelos"></b-table> -->

      <span v-if="reservaExitosa==false && formReserva==true && reservavacia==false"><b-alert show variant="primary">SU RESERVA NO HA SIDO REALIZADA</b-alert></span>
        <!-- <b-table :fields="id_vue" striped hover :items="vuelos"></b-table> -->

    <b-alert
      :show="dismissCountDown" dismissible fade
      variant="danger"
      @dismiss-count-down="countDownChanged"
    ><b>Vuelo no encontrado!!</b> El mensaje desaparecerá en...{{ dismissCountDown }}</b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "busq_vuelos",
      url: "http://localhost:8090/api/vuelos",
      url_reserv: "http://localhost:8090/api/reservas",
      vuelos: [],
      fecha: "",
      origen: "",
      destino: "",
      cant_pax: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      formReserva: false,
      reservaExitosa: false,
      vuelosEncontrados:false,

      reserva: {
        id_vue: '',
        nombreReserva: '',
        apellidoReserva:'',
        dniReserva:'',
        telefonoReserva:'',
        dniReserva:'',
        mailReserva:'',
        tarjReserva:'',
      }
      
      
    };
  },
  methods: {
    reservar(id_vue){
      this.reserva.id_vue = id_vue
      this.reservaExitosa=false
        this.formReserva = false
      this.vuelosEncontrados=false
    },
    enviarReserva(){
      axios.post(
      this.url_reserv +
            "/nuevaReserva?id_reserva=" +
            this.reserva.id_vue+this.reserva.dniReserva+
            "&id_vue="+this.reserva.id_vue+
            "&fecha="+this.fecha+
            "&DNI_pax="+this.reserva.dniReserva+
            "&cant_pax="+this.cant_pax+
            "&telefono_pax="+this.reserva.telefonoReserva+
            "&mail_pax="+this.reserva.mailReserva+
            "&nombre_pax="+this.reserva.nombreReserva+
            "&apellido_pax="+this.reserva.apellidoReserva
          )
        
        .then(response => {
          this.reservaExitosa=true
        })
        .catch(e => {
          this.reservaExitosa=false
          this.formReserva=false
          this.vuelosEncontrados=false
          this.reservavacia=false
        })
    },

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
          this.vuelosEncontrados=true
          this.formReserva=false
          this.reservaExitosa=false
          this.reservavacia=true
        })
            .catch(e => {
          this.vuelosEncontrados=false
          this.reservaExitosa=false
          this.formReserva=false
          this.reservavacia=true
            })
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


