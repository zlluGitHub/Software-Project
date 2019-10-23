import Vue from 'vue';
import App from './App.vue';

//挂载 api
import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = process.env.VUE_APP_URL;
Vue.prototype.$axios = axios;  
Vue.prototype.$qs = qs;  

//引入路由
import router from './router/index';
//引入 store
import store from './store/index';
  
Vue.config.productionTip = false;

// 引入View UI 框架
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
