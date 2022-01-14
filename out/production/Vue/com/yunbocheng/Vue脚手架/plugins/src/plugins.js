export default {

    // 这里面的参数不是vm，而是Vue构造vm的构造函数。
    install(Vue,x,y,z){
        console.log(x,y,z);
        // 全局过滤器 (value参数就是代表用户输入的数据)
        Vue.filter('mySlice',function (value){
            /* slice方式截取出下标从0开始，长度为4的字符串。*/
            return value.slice(0,4);
        })

        // 全局自定义指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时(一上来)
            bind(element,binding){
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value;
            }
        })

        // 定义全局混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                }
            },
            methods:{
                showName(){
                    alert(this.name);
                }
            }
        })

        // 给Vue原型上添加一个方法 （Vue原型上的属性和方法vn和vc都可以使用）
        // 在Vue原型上直接定义的方法其实是和在Vue实例对象中methods配置中的函数使用方式是一样的。
        // 直接在事件之后调用函数即可。比如单机事件之后直接调用这个 hello 函数。
        Vue.prototype.hello = () => {alert('你好啊！')}
    }
}