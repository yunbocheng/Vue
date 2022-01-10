<template>
  <div id="demo">
    <div id="demo2">
      <div id="demo1">
        <h3>{{title}}</h3>
      </div>
      <slot name="center">我是一些默认值。当使用者没有传递具体结构时，我会出现1。</slot>
      <slot name="footer">我是一些默认值。当使用者没有传递具体结构时，我会出现2。</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  // 接受父组件传过来的数据
  props:['title']
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