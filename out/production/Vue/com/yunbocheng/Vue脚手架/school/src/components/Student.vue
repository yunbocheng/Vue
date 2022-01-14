<template>
  <!-- 组件的结构-->
  <!-- template标签在编译的时候会消失 -->
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等等)
export default {
  // 这个name值最好和Vue文件名保持一致。
  name: 'Student',
  data() {
    return {
      studentName: 'TOM',
      age: 20,
    }
  },
  methods: {
    showName() {
      alert(this.studentName);
    }
  },
}
</script>

<style>
  /* 组件的样式 */
  /* 注意：这个style标签不一定非要写，如果没有样式完全可以不写。*/
  .demo{
    background-color: red;
  }
</style>

