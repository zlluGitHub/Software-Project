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
// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import * as Quill from 'quill'  //引入编辑器
    
// //quill编辑器的字体
// let fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];  
// let Font = Quill.import('formats/font');  
// Font.whitelist = fonts; //将字体加入到白名单 
// Quill.register(Font, true);

Vue.use(VueQuillEditor, /* { default global options } */)

// 引入View UI 框架
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
