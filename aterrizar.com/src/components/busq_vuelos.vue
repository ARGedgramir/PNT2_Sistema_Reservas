<template>
  <div>
   <main class="page">
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Busqueda de Vuelos
          </h1>
          <form
            class="search-form field has-addons"
            onsubmit="return false;"
          >
            <div class="overlay"></div>
            <p class="control">
              <input class="input is-fullwidth" type="text" v-model="from" placeholder="Desde">
            </p>
            <p class="control">
              <input class="input is-fullwidth" type="text" v-model="to" placeholder="Hacia">
            </p>
            <p class="control">
              <input class="input is-fullwidth" type="filght-date" v-model="date" placeholder="FECHA (DD-MM-YYYY)">
            </p>
            <p class="control">
              <button id="button" @click="obtenervuelos()">Obtener Vuelo</button>
            </p>
          </form>
        </div>
        <div>
        <table class="table table-hover table-sm">
          <thead>
            <td v-for="vuelo in columns">{{column}}</td>
          </thead>
          <tbody>
            <tr v-for="vuelo in vuelos">
              <td>{{row.id_orig}}</td>
              <td>{{row.nombre_orig}}</td>
              <td>{{row.aeropuerto_orig}}</td>
              
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </section>

    <section id="search-results" class="container">
    </section>
    </main>
    </div>    
</template>

<script>
export default {
  data(){
      return{
      name: 'busq_vuelos',
      url:"http://127.0.0.1:8090/api/vuelos",
      from:"",
      to:"",
      date:""
      
      }
},
methods: {
  obtenervuelos(){
  axios
  
    .get (this.url+"/Orig/")
    .then(response =>vuelos = response.data)  
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
