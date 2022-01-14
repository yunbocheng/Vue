<template>
  <div id="demo">
    <div id="demo2">
      <div id="demo1">
        <h3>{{title}}</h3>
      </div>
      <!-- 这里使用的是 v-bind:game"games" 使用的是数据的单项绑定
           v-bind:game="games" 数据单向绑定，只能从data流向页面 简写： :game="games"
           v-model:value="games" 注意：v-model只能绑定value属性。简写：v-model="games"
      -->
      <!-- 这里我们将 games 中的这些数据绑定到这个插槽中， -->
      <slot :games="games" :msg="msg">我是一些默认的内容</slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "Category",
  // 接受父组件传过来的数据
  props:['title'],
  data(){
    return {
      games:['游泳','滑雪','睡觉'],
      msg:'请求成功！'
    }
  }
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