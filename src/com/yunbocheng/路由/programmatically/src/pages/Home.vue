<template>
  <div>
    <h2>我是Home的内容</h2>
    <hr/>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 这个地方跳转的时候要使用完整的路径，也就是需要加上父路由的路劲信息 -->
          <!-- router-link默认是push模式，这里我们将他改变为replace模式。:replace="true" 可以简写为: replace  -->
          <router-link class="list-group-item" :replace="true" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" replace active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <hr/>
    <!-- keep-alive的意思是保持活跃。也就是包含在keep-alive标签中的元素要保持活跃。
         也就是当切换到别的路由组件的时候，这个组件还会保持原有的缓存，不会像以前一样被销毁掉。

         include属性：这个属性值是组件名字。而不是这个组件的路由的名字。指定哪个路由组件在跳转到其他路由组件的时候仍然保持活跃。
                     只有被include指定的路由组件才可以存储他的缓存。
         但是没有使用 include 属性的时候，只要是可以展示到 <router-view></router-view> 标签这个地方
         的路由组件都可以存在缓存。

     -->
    <!--  缓存路由组件：让不展示的路由组件保持挂载，不被销毁。  -->
    <!--  要找到是想让哪个路由组件被缓存，需要找到这个路由组件展示的位置，使用方法来处理这个 router-view 标签  -->
    <!--  当有多个组件需要缓存的时候，使用include的数组写法
            只有一个组件需要缓存的时候：include="News"
            多个组件需要缓存的时候：:include="['News','Message']"
    -->
    <keep-alive :include="['News','Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

