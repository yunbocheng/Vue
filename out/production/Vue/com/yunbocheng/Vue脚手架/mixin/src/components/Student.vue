<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <h3>混合文件第一个暴露配置中给定的数据：x={{x}}</h3>
    <h3>混合文件第二个暴露配置中给定的数据：w={{w}}</h3>

    <!-- 这里面的 showName 函数是从外部的混合文件中导入的。
      如果不导入这个外部的混合文件，那么这个地方就会报错：函数找不到的错误。-->
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
/*
* mixin（混入）
*   功能：可以把多个组件共用的配置提取成一个混入对象。
* 使用方式：
* 第一步：定义混合
*   {
*     data(){....},
*     methods:{....}
*   }
* 第二步：使用混合
*   (1). 全局混入：Vue.mixin(xxx)
*   (2). 局部混入：mixins:['xxx']
* */

// 引入外部的混合文件，混合文件使用的逐一暴露的方式，这里就不能使用导入简写的方式。
// 只有默认暴露的方式才可以使用 导入简写的方式
import {hunhe,hunhe2} from "../mixin";

export default {

  name: 'Student',
  data() {
    return {
      name: 'TOM',
      age: 20,

      /* 当组件中存在和混合文件中一样的数据的话，以组件中的数据为准。替换掉混合文件中的数据。
      *  当组件中不存在混合文件中的数据的时候，那么就使用混合文件中国的数据。
      *
      *  但是要注意：如果是声明周期钩子，那么Vue都会执行这两个钩子，
      *            并且外部混合文件中的钩子先执行，组件中的钩子后面执行。
      * */
      x:666,
    }
  },

  // 这是一个页面挂载完毕之后执行的钩子。
  mounted() {
    console.log("组件中的生命周期钩子！！")
  },

  /* mixins这个配置是存储混合文件的。他是一个数组，不是一个对象。*/
  mixins:[hunhe,hunhe2],
}
</script>

<style>
  .demo{
    background-color: red;
  }
</style>

