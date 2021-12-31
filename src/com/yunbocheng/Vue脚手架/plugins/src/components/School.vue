<template>
  <div class="demo">
    <!-- 测试插件中的全局过滤器(截取4为长度字符串)-->
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>

    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        name:'北京清华大学',
        address:'北京海淀区',
      }
    },
  }
</script>

<style>
  /* 组件的样式 */
  .demo{
    background-color: red;
  }
</style>

