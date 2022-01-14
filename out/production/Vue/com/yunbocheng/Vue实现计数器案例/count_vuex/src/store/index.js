// 该文件用于创建Vuex中最为核心的store

//引入Vuex插件
import Vuex from 'vuex'

// 引入Vue库。之所以要引入vue库，是因为要使用 Vue.use的这个方法。
import Vue from 'vue';

// 使用插件。在这里引入Vuex，是因为这里存在一个引入顺序的问题。
// vue会先全局扫描 import 的数据先进行引入。
Vue.use(Vuex);

// 准备actions——用于响应组件中的动作
const actions = {}
// 准备mutations——用于操作数据(state)
const mutations = {}
// 准备state——用于存储数据
const state = {}

//  创建并且暴露store
export default new Vuex.Store({
    // 这里使用对象的简写形式
    actions,
    mutations,
    state,
})
