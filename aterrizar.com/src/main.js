import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

window.axios = require('axios');

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),

  data:{
  },
  router,
  methods:{
    
  }
  
}).$mount('#app')
