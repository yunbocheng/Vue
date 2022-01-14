<template>
  <div id="app">
    <h2>当前求和为：????</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add($event)">+</button>
    <button @click="sub($event)">-</button>
    <button @click="uneven($event)">当前和为奇数再加</button>
    <button @click="wait($event)">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name:'Count',
    data(){
      return {
        // 获取下拉菜单值的数据
        number:1,
      }
    },
    methods:{
      add(){

      },
      sub(){

      },
      uneven(){
        if (this.sum % 2 !== 0){

        }
      },
      wait(){
        setTimeout( ()=>{

        },3000)
      }
    },
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>

