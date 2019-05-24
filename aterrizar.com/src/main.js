import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  data:{
  },
  router,
  methods:{
    add(){
      this.id = this.id++
    }   
  }
}).$mount('#app')
