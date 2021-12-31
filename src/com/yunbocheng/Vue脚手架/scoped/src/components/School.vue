<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        schoolName:'清华大学',
        address:'北京海淀区',
      }
    },
  }
</script>

<style scoped lang="css">
  .demo{
    background-color: red;
  }
</style>

