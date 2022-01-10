<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showSchoolName">点我显示学校名称</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        schoolName:'北京大学',
        address:'北京海淀区',
      }
    },
    /* 接受父组件的函数，将子组件的数据传递给父组件 */
    props:["getSchoolName"],
    methods:{
      showSchoolName(){
        /* 此时this代表的是Vue的实例对象vm。props中的数据以及data中的数据都在vm上。
        * 直接使用 this 调用即可。
        * */
        this.getSchoolName(this.schoolName);
      }
    }
  }
</script>

<style scoped lang="css">
  .demo{
    background-color: red;
  }
</style>

