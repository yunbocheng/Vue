// 该文件用于创建Vuex中最为核心的store

//引入Vuex插件
import Vuex from 'vuex'

// 引入Vue库。之所以要引入vue库，是因为要使用 Vue.use的这个方法。
import Vue from 'vue';

// 使用插件。在这里引入Vuex，是因为这里存在一个引入顺序的问题。
// vue会先全局扫描 import 的数据先进行引入。
Vue.use(Vuex);

// 准备actions——用于响应组件中的动作
const actions = {
/*    jia:function (){

    }*/
    // 使用对象中函数的简写方式
    jia(context,value){
        // context这个参数是上下文的意思，里面存储了 store 中的数据
        // 比如：commit等方法
        context.commit('JIA',value);
    },
    jian(context,value){
        context.commit('JIAN',value);
    }
}
// 准备mutations——用于操作数据(state)
const mutations = {
    // 这个定义为大写，是为了和 actions 中的jia对象的函数区分。
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    }
}
// 准备state——用于存储数据
const state = {
    sum:0  // 当前的和
}

//  创建并且暴露store
export default new Vuex.Store({
    // 这里使用对象的简写形式
    actions,
    mutations,
    state,
})
