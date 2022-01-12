<template>
  <div id="app" >
    <Category title="美食分类">
      <img slot="center" src="./assets/saoqi.png" alt="图片加载失败"/>
      <a slot="footer" href="#"  class="footer">点我查看美女</a>
    </Category>

    <Category :listData="games" title="游戏分类">
      <ul slot="center">
        <li v-for="(data,index) in games" :key="index">{{data}}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="#">开始游戏</a>
        <a href="#">结束游戏</a>
      </div>
    </Category>

    <!-- 当我们只给定名字为center的插槽的时候，而不给定 footer 插槽的时候，那么在Category组件中的 footer 插槽的位置
         就会使用footer插槽的这个默认值。因为footer插槽没有收到HTML结构。使用默认值。
    -->
    <Category title="电影分类">
      <template slot="footer">
      <img src="./assets/meinv.jpg" alt="图片加载失败" slot="center"/>
      <div class="footer">
        <a href="#">惊悚</a>
        <a href="#">热门</a>
        <a href="#">科幻</a>
      </div>
      <h4 class="footer">欢迎观看</h4>
      </template>
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
    color: red;
  }
  .footer{
    display: flex;;
    justify-content: space-around;
    color: red;
  }
</style>
