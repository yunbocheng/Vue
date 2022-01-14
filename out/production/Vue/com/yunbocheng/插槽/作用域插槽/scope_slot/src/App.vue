<template>
  <div id="app" >
      <Category title="游戏大全">
        <!-- 这个 scope属性的属性名是自定义的，不一定要和 slot 插槽绑定的data数据的数据名一致
             在 slot 插槽的地方games保存的是data中的数据。
             而这里的 game 是存储data数据的一个对象。
             之所以封装为一个对象，是因为这个组件的 slot 插槽可能传递多个data中的数据。

             { "games": [ "游泳", "滑雪", "睡觉" ], "msg": "请求成功！" }

             games是Category组件中slot插槽的绑定data数据的名字。
             后面的就是slot绑定的Category组件中的data数据。
             Category组件中的data数据是数组这里就是一个数组，
             Category组件中的data数据是一个字符串这里就是一个字符串，
        -->
        <template scope="game">
          <!--
            {{game}}
            输出结果为：{ "games": [ "游泳", "滑雪", "睡觉" ], "msg": "请求成功！" }
          -->
           <ul>
          <!-- 因为此时的game是一个对象，使用game.games可以取出game这个对象中的数据 -->
             <li v-for="(game,index) in game.games" :key="index">{{game}}</li>
          </ul>
          <h4>{{game.msg}}</h4>
        </template>
      </Category>

    <!-- 这里可以使用 解构赋值的方式。
         解构赋值语法：let {a,b} = {a:'1',b:'2'}
     -->
    <Category title="游戏大全">
      <template scope="{games,msg}">
        <ul>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
        <h4>{{msg}}</h4>
     </template>
     </Category>

     <!--
        slot-scope="{games}" 新的语法
        scope="{games,msg}" 以前的语法
        实现的效果是一样的。
       -->
     <Category title="游戏大全">
       <template slot-scope="{games}">
         <ol>
           <li v-for="(game,index) in games" :key="index">{{ game }}</li>
         </ol>
       </template>
    </Category>


    <Category title="游戏大全">
      <template slot-scope="{games}">
        <h4 v-for="(game,index) in games" :key="index">{{ game }}</h4>
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
</style>
