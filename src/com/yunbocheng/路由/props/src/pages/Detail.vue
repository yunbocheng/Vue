<template>
  <ul>
    <!-- 在插值语法中直接获取 $route 不用写 this
         但是如果在这个组件的 <script>标签中要使用这个 $route，必须写成 this.$route 才能获取到这个属性。
    -->
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
    <!--  props的第一种传递方式
      <li>a:{{a}}</li>
      <li>b:{{b}}</li>
    -->

    <!--  props的第二种传递方式
        <li>id:{{id}}</li>
        <li>title:{{title}}</li>
     -->
    <li>id:{{id2}}</li>
    <li>title:{{title2}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  /*props:['a','b']*/
  /*props:['id','title']*/
  props:['id2','title2']
}
</script>
