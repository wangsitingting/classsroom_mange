import Vue from 'vue'
import element from './element/index';
import 'element-ui/lib/theme-chalk/index.css'
import './main.scss'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
Vue.use(element)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')