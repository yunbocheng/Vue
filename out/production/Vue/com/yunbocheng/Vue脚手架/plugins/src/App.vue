<template>
  <div>
    <!-- 测试插件中全局混入-->
    <School/>
    <hr/>
    <Student/>
    <hr/>
    <button @click="hello">点我测试Vue原型的hello方法</button>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: 'App',
  components: {
    Student,
    School
  },
}
</script>

<style>

</style>
