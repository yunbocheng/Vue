<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>

    <!-- 测试插件中全局自定义指令，自动获取焦点-->
    <input type="text" v-fbind="name">
    <br/>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
export default {

  name: 'Student',
  data() {
    return {
      name: 'TOM',
      age: 20,
    }
  },
}
</script>

<style>
  .demo{
    background-color: red;
  }
</style>

