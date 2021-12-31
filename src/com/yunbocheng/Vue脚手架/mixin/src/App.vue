<template>
  <div>
    <!-- 引入全局配置的外部混合文件 -->
    <h2>App组件中使用全局配置的属性：w={{w}}</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School'
import Student from "./components/Student";

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>

</style>
