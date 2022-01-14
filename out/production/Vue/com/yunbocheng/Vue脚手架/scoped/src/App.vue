<template>
  <div id="app">
    <Student/>
    <hr/>
    <School/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>


<style>
  /* 我们一般不在App中给定 scoped 属性*/
</style>
