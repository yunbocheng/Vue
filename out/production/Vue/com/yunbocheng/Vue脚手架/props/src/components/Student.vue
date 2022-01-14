<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName($event)">点击我获取学生姓名</button>

  </div>
</template>

<script>
/*
* 配置项props：
*   (1). 传递数据：Demo是一个自定义的组件。
*       <Demo name="xxx"/>
*
*   (2). 接收数据：
*        第一种方式: (只接收)
*           props:["name"]
*
*        第二种方式：(限制类型)
*           props:{
*             name:String
*           }
*
*        第三种方式：(限制类型、限制必要性、指定默认值)
*           props:{
*             name:{
*                 type:String,  // 类型
*                 require:true, // 必要性
*                 default:'老王' // 默认值
*             }
*           }
* */
export default{
  name: "Student",
  data(){
    return {
      msg:"我是一个学生",
    }
  },
  methods:{
    showName(){
      alert(this.name);
    }
  },
  /* 这里面的顺序可以是任意的。不必和调用这个组件赋值时的顺序一样。*/
  // 简单声明接收 (开发中常使用)
  // props:["name","age"]

  // 当我们这里声明的属性在调用的时候没有传递的时候，那么这个多余的属性就是默认值：undefined
  // props:["name","age","sex"]

  // 接收的同时对数据进行类型限制
/*  props:{
    name:String,
    age:Number,
  }*/

  // 接收的同时：对数据进行类型的限制+默认值限制+必要性限制
  props:{
    name:{
      type:String,  // name的类型是字符串
      require:true  // name是必要的
    },
    age:{
      type:Number,
      default:99  // 默认值是99，当用户不传递age的时候就是99
    }
  }
}
</script>

<style scoped>

</style>