<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!--
         这里使用 query 来传递参数。
         在 $route 中存在query这个属性，这个属性中存储的就是：给这个路由调用的路由中传递的数据。
         并且这些参数会存储到被调用路由的 $route的query属性中。
         被调用的路由就可以通过 $route.query.id 来获这里给定的id属性值。
        -->
        <!-- 第一种动态传递参数值的方式：使用模板字符串的方式
               动态的绑定to参数，并且使用模板字符串的方式来动态的获取data中的数据。
               记住：一定要把 to变为 :to。否则会把to后面的一堆东西当作是一个字符串处理。
         -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;-->

        <!-- 第二种动态传递参数值的方式：使用对象的方式-->
        <router-link :to="{
          // 这里存在两个配置参数，一个是路径信息，一个是传递的参数。
          path: '/home/message/detail',
          query:{
            id:message.id,
            title:message.title
          }
        }">
          {{message.title}}
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'},
      ]
    }
  }
}
</script>

