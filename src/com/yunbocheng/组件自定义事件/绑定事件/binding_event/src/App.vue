<template>
  <div id="app">
      <h2 style="color: red">{{msg}}</h2>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"/>

      <!-- 给Student组件的实例对象vc绑定一个v-on事件
           demo是一个函数，只要涉及绑定事件都是调用的一个函数。
      -->
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种方式，使用@或v-on）-->
<!--      <Student v-on:atguigu="getStudentName"/>-->

      <!-- 通过子组件向父组件传递数据时（第二种方式，使用ref） -->
      <Student ref="student"/>
  </div>
</template>

<script>
import School from "@/components/School";
import Student from "@/components/Student";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data(){
    return {
      msg:"你好啊！"
    }
  },
  /*
  *  父组件定义一个函数，让子组件调用这个这个函数，然后将子类的数据传递给这个函数的参数。
  *  这样就改变了父组件的参数值，而这个值就是子组件要传递给父组件的值。
  *  这里使用的原始的传递方式。
  * */
  methods:{
    getSchoolName(name){
      console.log("App收到了学校名：" + name);
    },
    getStudentName(name){
      console.log("App收到了学生名：" + name);
    },
    /* 使用一个生命周期函数(挂载)来获取到对应的组件，然后给这个组实例对象绑定一个事件。*/
    mounted(){
      this.$refs.student.$on('atguigu',this.getStudentName);
    }
  }
}
</script>

<style>
  #app{
    background-color: black;
  }
</style>