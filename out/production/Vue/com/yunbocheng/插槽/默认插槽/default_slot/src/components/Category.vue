<template>
  <div id="demo">
    <div id="demo2">
      <div id="demo1">
        <h3>{{title}}</h3>
      </div>
      <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充)-->
      <!-- 这里只要使用一个插槽就可以接收到使用这个插槽的全部结构
           将使用这个插槽的全部结构定义在这里。
      -->
      <slot>我是一些默认值。当使用者没有传递具体结构时，我会出现。</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  // 接受父组件传过来的数据
  props:['title',i]
}
</script>

<style scoped>

  #demo{
    padding-top: 20px;
    width: 200px;
    background-color: blue;
    height: 250px;
  }
  #demo1{
    background-color: orange;
    text-align: center;
  }
</style>