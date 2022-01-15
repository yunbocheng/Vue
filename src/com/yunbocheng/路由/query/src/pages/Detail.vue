<template>
  <ul>
    <!-- 在插值语法中直接获取 $route 不用写 this
         但是如果在这个组件的 <script>标签中要使用这个 $route，必须写成 this.$route 才能获取到这个属性。
    -->
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
}
</script>
