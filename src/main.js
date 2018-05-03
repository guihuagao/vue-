// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpconfig from './util/http.js'
import vuex from 'vuex'
Vue.use(vuex)
import store from './store/index.js'
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  httpconfig,
  store,
  components: { App },
  template: '<App/>'
})
