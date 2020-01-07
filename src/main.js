import MintUI from 'mint-ui'

import './lib/mui/css/mui.min.css'


import Vue from 'vue'
import 'mint-ui/lib/style.css'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter)


Vue.use(MintUI)


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})