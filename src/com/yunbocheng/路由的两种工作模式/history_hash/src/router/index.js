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
    // mode属性：存在history、hash两个属性值。用来改变该路由器的工作模式。默认是：hash模式
    mode:'history',
    routes:[
        {
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
                    path: 'news',
                    component : News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            props($route){
                                return {id2:$route.params.id,title2:$route.params.title}
                                /*return {id2:$route.query.id,title2:$route.query.title}*/
                            }

                        },
                    ]
                }
            ]
        },
    ]
})
