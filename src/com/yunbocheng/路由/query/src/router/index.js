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
            path: '/about',
            component: About,
            // meta也是 $router(路由器) 中的一个配置属性，这个属性叫做元属性，
            // 这个属性中可以存储我们自己自定义的属性值以及对应的属性值。
            // 当我们获取的时候使用 this.meta.isAuth 或者 this.$router.meta.isAuth
            // 使用哪种方式获取需要看此时的this是什么，如果是$router直接获取即可。
            // 如果是VC或者VR就需要先获取其中的 $router 在获取其meta里面自定义的属性值。
            meta:{isAuth:true},
        },
        {
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
                          path: 'detail',
                          component: Detail
                        },
                    ]
                }
            ]
        },
    ]
})
