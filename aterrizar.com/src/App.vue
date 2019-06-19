<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">ATERRIZAR.COM</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">&nbsp;|&nbsp;Home | </router-link>
            <router-link to="/ListarVuelos"> &nbsp; Listado de Vuelos |</router-link>
            <router-link to="/Busq_Vuelos"> &nbsp; Busqueda de Vuelos |</router-link>
            <router-link to="/Busq_Reservas">&nbsp; Busqueda de Reservas|</router-link>
            <router-link to="/List_Reservas">&nbsp; Listado de Reservas</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import home from "./components/Home.vue";

export default {
  name: "app",
  components: {
  }
};
</script>

<style>
body {
  text-align: center;
}
body a {
  text-align: center;
  color: #fff;
}
</style>
