import Vue from 'vue';
import {store} from './store';
import titleMixin  from './scripts/titleMixin';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
