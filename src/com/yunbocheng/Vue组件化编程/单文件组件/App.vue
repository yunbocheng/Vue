<template>
  <div>
    <!-- Vue中只能创建Vue组件vc，不能创建Vue实列对象vm-->
    <!-- 这个School以及这个Student都是 App组件中的子组件。可以访问到-->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>

// 引入组件
/*
*  名字是自定义的。
*   路径信息是针对 App.vue 这个文件的相对路径。
*
* 注意：在脚手架中，这个 .vue可写可不写。一般不写。
*       import School from "./School.vue";
*
*       引入同级文件的时候，./可写可不写。我们一般写上
*
* */
import School from "./School";
import Student from "./Student";
/*
      原型：
      const school = Vue.extend({配置对象});
      export default school;

      简化：
      export default {配置对象}
* */

export default {
  name: "App",
  /* 在App组件中引入子组件。*/
  components:{
    School,
    Student
  }
}
</script>

<style scoped>

</style>