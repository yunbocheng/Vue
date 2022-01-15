<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <router-link to="/home/message/detail">{{message.title}}</router-link>
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

