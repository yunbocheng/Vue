<template>
  <div id="app" >
    <!-- 从data中动态绑定数据，将数据传递给子类 -->
<!--    <Category :listData="foods" :title="food"/>
    <Category :listData="games" :title="game"/>
    <Category :listData="films" :title="film"/>-->

    <!-- 直接给定数据 -->
    <!-- 当只有后端接受到的只是一个简单的字符串数据的时候可以直接给定。
         因为子类会把父类传递过去的数据当作是一个字符串处理。
         那么即使父类过传递给子类是一个数组，子类也会当作是一个字符串。
         然后子组件会循环遍历的其实是这个字符串对应的字符数组。

         所以只有当组组件传递的是一个简单的字符串，并且子类接收到的也是一个简单的字符串时。
         可以使用这种直接传递数据的方式
     -->
<!--    <Category listData="['火锅','烧烤','王婆大虾']" title="美食分类"/>
    <Category listData="['游泳','滑雪','睡觉']" title="游戏分类"/>
    <Category listData="['《变形金刚》','《教父》','《钢铁侠》']" title="电影分类"/>-->

<!--    <Category :listData="foods" title="美食分类"/>
    <Category :listData="games" title="游戏分类"/>
    <Category :listData="films" title="电影分类"/>-->


    <!--
      注意：关于这个结构中的 Category 标签中 HTML节结构的style 样式。
           可以在APP这个组件中写，也可以在Category这个原组件中。

           需要配注意的是：此时这个HTML结构是在调用者(APP组件)中进行解析编译的。
                        不是在原组件中进行解析编译的(Category组件)

                        如果我们将 style 样式写在APP中，那么就是将带有style样式的HTML结构传递到Category组件
                        如果将 style 样式写在Category组件中，就是将单纯的没有style样式的HTML结构传递到Category组件中。
    -->
    <Category title="美食分类">
      <img src="./assets/saoqi.png" alt="图片加载失败"/>
    </Category>

    <Category :listData="games" title="游戏分类">
      <ul>
        <li v-for="(data,index) in games" :key="index">{{data}}</li>
      </ul>
    </Category>

    <Category title="电影分类">
      <img src="./assets/meinv.jpg" alt="图片加载失败"/>
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
</style>
