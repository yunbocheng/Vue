// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件 （一下两种引入方式都可以）
// @代表的src根路径。使用以下格式相当于使用的src的绝对路径
// @ <==> src
import Home from "@/pages/Home";
// 使用../的方式是相对路径。从当前index.js这个文件开始寻找应用的组件。
import About from "../pages/About";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

// 创建并且暴露一个路由器
export default  new VueRouter({
    routes:[
        // routes是一个数组，其中每一个路由都是一个对象。对象中存储的都是 key - value 的形式
        {
            // 这里相当于给这个组件起了一个名字，当我们要使用这个路由的时候，可以不用写path属性值。
            // 可以完全使用 name 代替。但是要注意的是：当使用name属性来获取这个路由的时候。
            // router-link标签的 to 属性必须动态绑定，即: ":to"的形式。
            // 并且此时的 :to 属性只能使用对象的形式。不可以使用模板字符串的方式。
            name:'guanyu',
            path: '/about',
            component: About
        },
        {
            name:'xiaoxi',
            path: '/home',
            component: Home,
            children:[
                {
                    // 注意：当这个路由是二级以及多级路由的时候，不需要再加 "/"。
                    // vue会自动帮我们加一个"/"。如果我们再加就会报错。
                    path: 'news',
                    component : News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            // 给定名字的路由叫做：命名路由。
                            /*
                            * 注意：
                            *   使用params属性传递参数时：
                            *       1. 如果使用模板字符串的方式来传递参数，不给定name属性也可以。
                            *       2. 如果使用对象的方式来传递参数，必须给定name属性。
                            *
                            *   使用query属性传递参数时：
                            *       name属性可以给定也可以不给定。
                            * */
                            name:'xiangqing',
                            // 此时使用的params参数，必须在这里使用这两个占位符来告诉这个路由
                            // detail后面的不是路径，而是两个参数。
                            path: 'detail/:id/:title',
                            component: Detail
                        },
                    ]
                }
            ]
        },
    ]
})
