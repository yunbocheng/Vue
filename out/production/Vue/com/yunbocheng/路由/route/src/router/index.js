// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件 （一下两种引入方式都可以）
// @代表的src根路径。使用以下格式相当于使用的src的绝对路径
// @ <==> src
import Home from "@/pages/Home";
// 使用../的方式是相对路径。从当前index.js这个文件开始寻找应用的组件。
import About from "../pages/About";

// 创建并且暴露一个路由器
export default  new VueRouter({
    routes:[
        // routes是一个数组，其中每一个路由都是一个对象。对象中存储的都是 key - value 的形式
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})
