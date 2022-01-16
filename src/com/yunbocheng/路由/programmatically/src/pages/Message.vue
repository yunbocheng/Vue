<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <router-link :to="{
        }">
          {{message.title}}
        </router-link>
        <!-- 因为在pushShow这个函数中需要使用到这个 message 参数，所以需要把这个参数传递给这个函数。 -->
        <button @click="pushShow(message,$event)">push查看</button>
        <button @click="replaceShow(message,$event)">replace查看</button>
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
  },
  methods:{
    pushShow(message){
      // this 代表的是这个组件的实例对象VC。VC实例对象汇中的 $router属性中存在push、replace属性来跳转页面。
      // push是存在跳转记录的。replace是不存在历史记录的。
      // push、replace都是一个函数，其中的参数是一个对象，这个对象中存储的便是：跳转的目标路由以及携带的参数。
      this.$router.push({
        // 使用 params 来传递参数的时候，必须使用name属性，不可以使用path属性。
        name:'xiangqing',
        // path:'/home/message/detail',
        params:{
          id:message.id,
          title:message.title
        }
      })
    },
    replaceShow(message){
      this.$router.replace({
        name:'xiangqing',
        params:{
          id:message.id,
          title:message.title
        }
      })
    }
  }
}
</script>

