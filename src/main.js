// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import './mock'
import store from './store'


Vue.config.productionTip = false
Vue.component('FooterGuide',FooterGuide)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});
