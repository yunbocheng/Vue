<template>
  <!-- 注意：在编译代码阶段 template 标签会自动消失 -->
  <!-- 如果不写一个div标签包含一个 slot 标签，那么当在编译的时候，就变成了以 slot 作为根标签
       使用 slot 作为跟标签是不合法的。所以会报错，所以要记住，在这里一定要使用一个div标签进行包含。
       因为div才能作为根节点存在。
   -->
  <div id="app">
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="number">
      <!-- 加上:，进行了数据的动态绑定，此时就会将value中的数据作为表达式处理，就会当成数字1，2，3
           如果不加:，那么vue就会把value中的数据当作是一个字符串，"1","2","3"
           当触发加法运算的时候就会发生字符串的拼接，而不是数字的相加减。
           <option :value="1">1</option>

           这样写比较麻烦。我们给v-model添加一个number修饰符，强制将这个value值转换为一个数字。
           <select v-model.number="number">
      -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 逻辑比较简单的话，我们可以直接在事件的后面书写，不需要定义一个函数。
          <button @click="sum++">+</button>
     -->
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
        // 求和的数据
        sum:0,
        // 获取下拉菜单值的数据
        number:1,
      }
    },
    methods:{
      add(){
        this.sum += this.number;
      },
      sub(){
        this.sum -= this.number;
      },
      uneven(){
        if (this.sum % 2 !== 0){
          this.sum += this.number;
        }
      },
      wait(){
        /*
          * 如果这里使用普通函数的方式，this会指向windows，就不能使用 this.sum来获取vue中的sum值
          *
          * 这里只能使用箭头函数，让他指向 Vue实列对象。这样才可以取到vue中的sum值。
          *
          * */
        setTimeout( ()=>{
          this.sum += this.number;
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

