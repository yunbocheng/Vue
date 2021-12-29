<template>
  <div>
    <!-- Vue中只能创建Vue组件vc，不能创建Vue实列对象vm-->
    <!-- 这个School以及这个Student都是 App组件中的子组件。可以访问到-->
    <!-- 这里也需要加上./ 否则也会导致信息加载失败。只要在前端中，在路径的前面都加上一个 ./-->
    <img src="./assets/logo.png" alt="图片加载失败！">
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
* 但是这个 ./ 必须存在，否则会报路径找不到的错误。
*
* */
import School from "./components/School";
import Student from "./components/Student";

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