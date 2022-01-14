/* 暴露混入文档。这里使用逐个暴露的方式 */
/* 组件中的配置在这个混合文件中都可以写。*/
export const hunhe = {
    methods:{
        showName(){
            alert(this.name);
        }
    },
    data(){
        return {
            x:100,
            y:200
        }
    }
}
export const hunhe2 = {
    data(){
        return {
            w:30,
        }
    },
    mounted() {
        console.log("这是外部混合文件中的生命周期钩子！！");
    }
}