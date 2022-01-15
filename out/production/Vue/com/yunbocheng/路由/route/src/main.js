import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter插件
import VueRouter from "vue-router";

// 引入路由器 (这里的index.js可以在路径中省略)
import router from './router/index'
// 关闭生产提示
Vue.config.productionTip = false

// 应用VueRouter插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // 这个 router 是vue-router插件中的对象，只有引入vue-router插件之后才会存在这个 router 对象。
  router:router,
}).$mount('#app')
