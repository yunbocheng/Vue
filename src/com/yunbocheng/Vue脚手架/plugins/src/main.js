import Vue from 'vue'
import App from './App.vue'
/*
* 插件：
*   功能：用于增强Vue
*   本质：包含install方法的一个对象，install的第一个参数是Vue，
*        第二个参数以及以后的参数是插件使用者传递的数据。
*   定义插件：
*     对象.install = function(Vue,options){
*         // 1. 添加全局过滤器
*         Vue.filter(....)
*         // 2. 配置全局指令
*         Vue.directive(...)
*         // 3. 配置全局混入(合)
*         Vue.mixin(...)
*         // 4. 添加实例方法
*         Vue.prototype.$myMethod = function(){...}
*         Vue.prototype.$myProperty = xxxx
*     }
*
*     使用插件：Vue.use()
*
*
* */
// 引入插件（我们可以引入多个插件并且使用多个插件）
import plugins from "./plugins";
Vue.config.productionTip = false

// 引用（使用）插件。使用插件的时候可以向插件文件中传递数据。
Vue.use(plugins,1,2,3);

new Vue({
  render: h => h(App),
}).$mount('#app')
