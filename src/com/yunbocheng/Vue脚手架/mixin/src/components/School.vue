<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <h3>混合文件第一个暴露配置中给定的数据：x={{x}}</h3>
    <h3>混合文件第二个暴露配置中给定的数据：w={{w}}</h3>

    <!-- 这里面的 showName 函数是从外部的混合文件中导入的。
  如果不导入这个外部的混合文件，那么这个地方就会报错：函数找不到的错误。-->

    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  // 引入外部的混合文件，混合文件使用的逐一暴露的方式，这里就不能使用导入简写的方式。
  // 只有默认暴露的方式才可以使用 导入简写的方式
  // 可以一次引入混合文件中的多个暴露配置
  import {hunhe,hunhe2} from "../mixin";

  export default {
    name:'School',
    data(){
      return {
        name:'清华大学',
        address:'北京海淀区',
      }
    },
    mounted() {
      console.log("组件中的生命周期钩子！！")
    },
    /* mixins这个配置是存储混合文件的。他是一个数组，不是一个对象。*/
    mixins:[hunhe,hunhe2],
  }
</script>

<style>
  /* 组件的样式 */
  .demo{
    background-color: red;
  }
</style>

