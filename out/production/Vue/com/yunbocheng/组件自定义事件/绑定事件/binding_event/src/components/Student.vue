<template>
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showStudentName">点击获取学生名称</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      studentName: 'TOM',
      age: 20,
    }
  },
  methods:{
    showStudentName(){
      /* 触发Student组件实例对身上的atguigu事件 */
      this.$emit('atguigu',this.studentName);
    }
  }
}
</script>

<style scoped lang="css">
  .demo{
    background-color: yellow;
  }
</style>

