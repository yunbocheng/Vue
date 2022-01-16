<template>
  <div >
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 这里不使用路由的path属性来定位具体的路由。使用路由的name属性来定义具体的路由
               注意：
                  使用路由的name属性时：
                    1. to属性必须动态绑定。即：":to"
                    2. to必须使用对象形式。而不能使用模板字符串的方式
           -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定路由组件呈现的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 引入Banner组件
import Banner from "@/components/Banner";
export default {
  name: 'App',
  components: {
    Banner,
  }
}
</script>
