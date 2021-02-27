import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');