import Vue from 'vue';
import App from './app.vue';
import router from './router';
import Toast from '../src/index';

Vue.use(Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
