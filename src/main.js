import Vue from 'vue'
import App from './App.vue'

import './variables.scss'

Vue.config.productionTip = false

// const bootstrap = require('bootstrap')
// Vue.use(bootstrap)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
