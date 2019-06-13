<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <img src="https://i.ibb.co/kQSjPjg/logoo2.png" class="d-inline-block align-top" alt="Kitten">
          <ul>Aterrizar.com</ul>  
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home  </router-link>
            <router-link to="/Busq_Vuelos">Busqueda Vuelos </router-link>
            <router-link to="/Busq_Reservas">Busqueda Reservas </router-link>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    <br>
    <router-view/>
  </div>
</template>

<script>
import home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style>
body {
  text-align: center;
}
</style>
