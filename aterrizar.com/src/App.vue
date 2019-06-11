<template>
  <div id="home">
    <img alt="Vue logo" >
    <home  msg="Aterrizar.com"/>
      <div class="nav">
        <h1>{{ msg }}</h1>
        <p>
        ¿Quien dijo que lo sencillo no seria bueno? 
        :)
        </p>
        <router-link to="/">Home  </router-link>
        <router-link to="/Busq_Vuelos">Busqueda Vuelos </router-link>
        <router-link to="/Busq_Reservas">Busqueda Reservas </router-link>
    </div>
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
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
