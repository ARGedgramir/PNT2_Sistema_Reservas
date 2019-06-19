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

      <table class="table table-hover table-sm">
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
          <tbody>
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
                  @click="reservar(vuelo.id_vue)"
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
        <button 
                  type="button"
                  @click="enviarReserva(), formReserva=false, reservaExitosa=true"
                  class="btn btn-block btn-outline-primary waves-effect"
                  >Reservar
                  </button>
      </span>
      <span v-if="reservaExitosa==true">
    <b-alert show variant="primary">SU RESERVA HA SIDO REALIZADA</b-alert>
      </span>
        <!-- <b-table :fields="id_vue" striped hover :items="vuelos"></b-table> -->

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
      url: "http://localhost:8090/api/vuelos",
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

      reserva: {
        id_vue: '',
        nombreReserva: '',
        apellidoReserva:'',
        telefonoReserva:'',
        dniReserva:'',
        mailReserva:'',
        tarjReserva:'',
      }
      
      
    };
  },
  methods: {
    reservar(id_vue){
      this.formReserva = true
      this.reserva.id_vue = id_vue
    },
    enviarReserva(){
      axios.post(
        this.url +
            "/nuevaReserva?id_reserva=" +
            this.reserva.id_vue+this.reserva.dniReserva+
            "&id_vue="+this.reserva.id_vue+
            "&fecha="+this.reserva.fecha+
            "&dni_pax="+this.reserva.dniReserva+
            "&cant_pax="+this.reserva.cant_pax+
            "&telefono_pax="+this.reserva.telefonoReserva+
            "&mail_pax="+this.reserva.mailReserva+
            "&nombre_pax="+this.reserva.nombreReserva
        )
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        });
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
          console.log('then')
          this.vuelos = response.data
          console.log('then')
          
        })
        .catch(e => {
          console.log('catch')
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


