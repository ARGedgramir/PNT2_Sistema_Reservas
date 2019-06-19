import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: 'home',
            component: () => import('./components/Home.vue')
        },
        {
            path:'/busq_reservas',
            name: 'busq_reservas',
            component: () => import('./components/busq_reservas.vue')
    },
    {
        path:'/busq_vuelos',
        name: 'busq_vuelos',
        component: () => import('./components/busq_vuelos.vue')
    },
    {
        path:'/List_Reservas',
        name: 'List_Reservas',
        component: () => import('./components/List_Reservas.vue')
    },
    ]
})