<template>
  <div id="app">
    <h2 v-text="msg"></h2>
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-html="msg2" @click="show"></button>

    <!--
      age="20" 这样传递的话，age就是一个字符串20，不论中间写什么都会当作字符串。
      age="20+1" // 输出结果是：20+1。是一个字符串。

      :age="20" 这样写的话，发生了一个数据的动态绑定，此时获取到的就是20.
      :age="20+1" // 输出结果是：21。

      当使用动态数据绑定的时候，会把双引号中的内容当作是一个表达式处理，
      并且表达式的值就是这个age的值，不会把他当作一个字符串处理。

      注意：只有涉及Number类型的数据的时候，才会存在动态数据绑定的问题。
           如果传递的本身就是一个字符串，那就没有必要的在进行动态数据绑定。

      使用这个 props 可以完成父子组件之间数据的传递。
      可以把父类组件写的数据传递到子类。子类可以获取父类给定的数据然后进行处理、展示操作。

       父类使用 :name :age 动态数据绑定的方式传递。
       子类使用 props["name","age"] 进行接收。
    -->
    <!-- 学生1 -->
    <Student name="李四" :age="20"/>

    <!-- 学生2 -->
    <Student name="张三" :age="22"/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    Student,
  },
  data(){
    return {
      msg:"欢迎学习Vue",
      msg2:"<span style='color: red;font-size: 20px'>点我提示信息</span>",
      name:"李四",
      age:22,
    }
  },
  methods:{
    show(){
      alert(this.msg)
    }
  },
}
</script>

<style>

</style>
