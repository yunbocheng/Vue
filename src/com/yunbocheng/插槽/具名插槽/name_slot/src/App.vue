<template>
  <div id="app" >
    <Category title="美食分类">
      <img slot="center" src="./assets/saoqi.png" alt="图片加载失败"/>
      <a slot="footer" href="#" >点我查看美女</a>
    </Category>

    <Category :listData="games" title="游戏分类">
      <ul slot="center">
        <li v-for="(data,index) in games" :key="index">{{data}}</li>
      </ul>
      <button slot="footer">开始游戏</button>
    </Category>

    <!-- 当我们只给定名字为center的插槽的时候，而不给定 footer 插槽的时候，那么在Category组件中的 footer 插槽的位置
         就会使用footer插槽的这个默认值。因为footer插槽没有收到HTML结构。使用默认值。
    -->
    <Category title="电影分类">
      <img src="./assets/meinv.jpg" alt="图片加载失败" slot="center"/>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: 'App',
  components: {
    Category,
  },
  data(){
    return {
      foods:['火锅','烧烤','王婆大虾'],
      games:['游泳','滑雪','睡觉'],
      films:['《变形金刚》','《教父》','《钢铁侠》']
    }
  }
}
</script>

<style lang="css">
  #app{
    display: flex;;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  a{
    color: black;
  }
</style>
