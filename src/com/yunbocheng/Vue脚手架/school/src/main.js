/*
* 在Vue中，之后引入node_modules文件夹中的npm库的时候在前面不加 ./
* 注意：加上 ./ 会报错
* 其余不论是引入静态资源文件、Vue组件的时候，都在路径的前面加上 ./
* 注意：不加 ./ 会报错
*
* 注意：此时引入的这个 vue，不是 vue.js 文件。而是一个vue文件夹。
*       这个文件夹是 npm仓库中的 vue 仓库。
*
* 真正的 vue.js 文件在 ： vue/dist/vue.js
*
* vue是一个残缺的vue，其中没有模板解析器。
* 此时如果在 new Vue()中存在模板，也就是 template，那么此时会报错，不能解析出来。
* 此时需要原始的Vue.js文件(vue/dist/vue.js)来解析存在模板的Vue实例对象。
* 或者使用 render 函数。
*
* 在实际开发中使用的一般是残缺的Vue。所以此时就需要使用 render 函数。
*
* */

/*
*  关于不同版本的Vue：
*
*   1. vue.js与vue.runtime.xxx.js的区别：
*     (1). vue.js是完整版的Vue，包含：核心功能+模板解析器。
*     (2). vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器。
*
*   2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
*      render函数接收到的createElement函数去指定具体的内容。
*
* */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  /*
    render有渲染的意思：
  *  render的原型：
  *     render:function(createElement){
  *       return createElement('h1','你好啊')
  *     }
  *
  *  其中：createElement是一个函数。
  *
  *  这里我们使用箭头函数的形式：
     render:(createElement) => {
        return createElement(App)
     }

     箭头函数再次简写
     render:h => h(App),
     此时h就是 createElement
  * */
  render: h => h(App),
/*  template:`
    <App></App>
  `,
  components:{
    App,
  }*/
}).$mount('#app')

/*
* 总结：
*   我们之所以使用不完整的vue，然后使用render。是因为不完整vue中不存在模板解析器。
*   当我们写完代码的最后，都会被 webpack 打包为HTML、CSS、JS等浏览器可以识别的文件。
*   这个时候其实我们vue中的模板解析器就没有什么作用了，使用webpack就可以进行了转换。
*   这样的话如果使用完整的饿vue.js文件，就会把多余的模板解析器也会打包到最后的包中。
*   这就造成了资源的浪费。
*
*   其实就是：
*     开发的时候麻烦点，打包的时候节省一点内存。
* */