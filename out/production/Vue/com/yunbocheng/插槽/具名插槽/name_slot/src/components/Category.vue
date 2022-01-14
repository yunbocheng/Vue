<template>
  <div id="demo">
    <div id="demo2">
      <div id="demo1">
        <h3>{{title}}</h3>
      </div>

      <!-- name是slot中的一个固定属性，这个属性就是指定特定名字的插槽 -->
      <!-- 插槽的名字对应着调用这个插槽的组件所指定的名字 -->
      <!-- 他会把slot属性的属性值为center、footer的插件的HTML结构放到这个位置。-->
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