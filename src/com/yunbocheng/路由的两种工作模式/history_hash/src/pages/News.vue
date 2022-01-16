<template>
  <ul>
    <!-- 这里使用了 es6 中对象的简化写法。原型：:style="{opacity:opacity}" -->
    <!-- 这里给style样式属性进行了动态绑定，也就是style属性不会把后面的属性值当作是一个字符串处理。
         而是动态的从 data 来获取这个属性的属性值。
     -->
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001
      <input type="text" name="demo1"/>
    </li>
    <li>news002
      <input type="text" name="demo2"/>
    </li>
    <li>news003
      <input type="text" name="demo3"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity: 1,
    }
  },
  // 引入Vue路由中的两个声明周期钩子
  // 当路由被激活的时候调用
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    },16)
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  }
}
</script>
