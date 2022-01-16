<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">研究一下VR中的额go()API</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      // back()这个API就相当于浏览器的后退历史记录操作
      // 此时的这个this代表的是这个组件的实例对象VC。在VC中存在路由的实例对象，VueRouter（VR）。
      this.$router.back();
    },
    forward(){
      // forward()API就相当于浏览器的前进历史记录操作
      this.$router.forward();
    },
    go(){
      // go(number)中的参数，如果是正数就代表向前几步。如果是负数，就代表回退几步。
      this.$router.go(2);
    }
  }
}
</script>

<style scoped>

</style>