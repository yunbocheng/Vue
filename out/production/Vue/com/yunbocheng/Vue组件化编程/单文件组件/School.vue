<template>
  <!-- 组件的结构-->
  <!-- template标签在编译的时候会消失 -->
  <!-- template标签中只能存在一个根标签  -->
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  // 组件交互相关的代码(数据、方法等等)
  // 这里我们需要使用暴露的语法来暴露出其他人可以使用的内容。
  // 暴露的方式有三种：默认暴露、统一暴露、逐个暴露。
  /*
    我们一般使用默认默认暴露的方式：
      原型：export default school。直接使用匿名组件的方式暴露。

      原型：
      const school = Vue.extend({配置对象});
      export default school;

      简化：
      export default {配置对象}
  */
  export default {
    // 这个name值最好和Vue文件名保持一致。
    name:'School',
    data(){
      return {
        schoolName:'清华大学',
        address:'北京海淀区',
      }
    },

    methods:{
      showName(){
        alert(this.schoolName);
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

