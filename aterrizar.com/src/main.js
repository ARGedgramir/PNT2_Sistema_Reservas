import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  data:{
    counter: 0

  },

  router,

  methods:{
    
  }
}).$mount('#app')
