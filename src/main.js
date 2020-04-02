// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from  "./axios/axios"
// import ViewUi from  "view-design"
// import 'view-design/dist/styles/iview.css';
// import hljs from "highlight.js"
import {Page , Button, BackTop } from "view-design"

Vue.component("Button",Button);
Vue.component("Page",Page);
Vue.component("BackTop",BackTop);

Vue.directive('highlight', (el) => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block,"black");

  });
});

Vue.config.productionTip = false;
Vue.prototype.$request = axios;
// Vue.use(ViewUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
