<template>
  <div>
    <h2>我是Home的内容</h2>
    <hr/>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 这个地方跳转的时候要使用完整的路径，也就是需要加上父路由的路劲信息 -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

