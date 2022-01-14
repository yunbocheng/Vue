// 引入npm仓库中的vue仓库
import Vue from 'vue'
// 引入项目的App组件
import App from './App.vue'

// 关闭Vue的生产展示
Vue.config.productionTip = false

// 引入外部插件
import vueResource from 'vue-resource';


// 引入store vue会自动识别文件中下的 index.js 文件。
// 这里就可以省略 index.js。   './store/index.js'
import store from './store'


// 使用插件
Vue.use(vueResource);


new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
