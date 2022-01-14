// 以下使用的是 es6 的导入语法。要是使用 es5 需要使用 <script src=""><script>来导入
// 这个引入的是 node_modules文件中(里面是npm库)中的一些仓库。
// 这些仓库的根目录就是 node_modules这个文件，vue就在这个根目录的下面，直接导入即可。
// 此时的vue并不是一个文件。而是一个vue文件中，这个文件夹就是npm中的一个仓库，里面存在很多的js文件。
import Vue from 'vue'

// 这是引入App组件，这个组件管理所有的组件。这个就要查看路径，这个路径是相对main.js而言的。
// 此时 main.js 和 App.vue 在同级目录下，所有直接使用 ./App.vue。不可以省略 ./ 否则会报路径错误。
// 并且 .vue 可以省略不写。./App.vue 和 ./App 都可以实现。
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实列对象 --- vm
new Vue({

  // 这个是将App组件放到容器中。
  render: h => h(App),
  // el:"#app",

  // 这里使用的绑定容器的第二种方式。也可以完全使用第一种形式。
  // el:'#root',
}).$mount('#app')
