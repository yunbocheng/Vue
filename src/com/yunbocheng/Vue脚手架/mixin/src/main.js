import Vue from 'vue'
import App from './App.vue'

// 在组件中写的 mixins 都是属于局部混合。只要在引入的组件中可以使用
// 以下写的是全局组件，在所有的组件中都可以使用。连App组件也可以使用外部混合文件中的数据
import {hunhe, hunhe2} from "./mixin";

Vue.config.productionTip = false
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
  render: h => h(App),
}).$mount('#app')
