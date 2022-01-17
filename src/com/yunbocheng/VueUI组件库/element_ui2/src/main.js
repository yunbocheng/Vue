import Vue from 'vue'
import App from './App.vue'

// 这个组件的标签是：el-button。声明的全局组件的名字是：Button，就是相当于标签去掉el之后，将button大写为Button
// 此时就是导入指定的三个EL组件：el-button、el-select、el-row
import { Button, Select,Row } from 'element-ui';
// 不需要引入样式，vue会自动帮我们引入这三个组件的样式。

Vue.config.productionTip = false

// 使用Button、Select、Row组件
// 这个 Button.name 是给这个组件起一个名字。
// Button.name的方式使用的就是 Element中给定的指定的标签名字。el-button
Vue.component(Button.name,Button);
Vue.component(Select.name,Select);
// 当然我们也可以使用自定义的标签的名字。此时使用这个组件的标签就是:<cyb></cyb>
Vue.component(cyb,Row);

/* 或写为  这样写都是使用的Element中给定的标签名
 * Vue.use(Button)
 * Vue.use(Select)
 * Vue.usr(Row)
 */

new Vue({
  render: h => h(App),
}).$mount('#app')
