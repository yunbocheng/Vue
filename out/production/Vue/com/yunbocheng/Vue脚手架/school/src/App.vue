<template>
  <div>
    <h1 v-text="msg" ref="demo" id="demo"></h1>
    <button @click="show($event)" ref="btn">点我获取以上的DOM元素</button>
    <!-- Vue中只能创建Vue组件vc，不能创建Vue实列对象vm-->
    <!-- 这个School以及这个Student都是 App组件中的子组件。可以访问到-->
    <!-- 这里也需要加上./ 否则也会导致信息加载失败。只要在前端中，在路径的前面都加上一个 ./-->
    <img src="./assets/logo.png" alt="图片加载失败！">
    <!-- 只有在 components 中声明的才是最后组件的名字。我们只是一直使用的是对象的简写形式  -->
    <!-- 在脚手架中使用这种自闭和的方式不会影响下面组件的执行渲染。-->
    <school ref="sch" id="sch"/>
    <Student ref="stu"></Student>

    <!--
    ref属性：
      1. 被用来给元素或子组件注册引用信息(id的替代者)

      2. 应用在html标签上获取是真实的DOM元素，应用在组件标签上是组件实例对象(vc)

      3. 使用方式：
        打标识：
            (1).真实DOM元素：
              <h1 ref="xxx">.......</h1>
            (2) 自定义组件
              <School ref="xxx"></School>
        获取：
          this.$refs.xxx

        这个this是当前组件的vc，在vc中存在$refs属性，这个属性中存储的都是被ref标识的元素。

    ref与id的区别：
      1. 当作用在真实的DOM元素上的时候，获取的都是真实DOM，没有区别。
      2. 当作用在自定义组件的时候，ref获取到的是这个自定义组件的vc。
         而id获取到的是 School 组件的 template 中真实的DOM结构。
-->

  </div>
</template>

<script>

// 引入组件
/*
*  名字是自定义的。
*   路径信息是针对 App.vue 这个文件的相对路径。
*
* 注意：在脚手架中，这个 .vue可写可不写。一般不写。
*       import School from "./Count.vue";
*
* 但是这个 ./ 必须存在，否则会报路径找不到的错误。
*
* 这个 School 并不是最终这个组件的名字。最终的名字要在 components 中定义。
* 这里的名字只是过度一下，当然我们经常使用的是对象的简写形式，所以一般这里定义的名字就不会在修改了。
* 就会成为最后组件的名字。
* */
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  /* 在App组件中引入子组件。*/
  components:{
    school:School,
    Student
  },
  data(){
    return {
      msg:"欢迎学习Vue",
    }
  },
  methods:{
    show(){

      // 以前我们都使用原始获取DOM元素的方式
      console.log(document.getElementById('demo')); //真实的DOM元素 <h1>欢迎学习Vue</h1>

      /*
      * School组件中template中的真实的DOM结构，而不是School组件的vc。
            <div class="demo">
              <h2>学校名称：清华大学</h2>
              <h2>学校地址：北京海淀区</h2>
              <button @click="showName">点我提示学校名</button>
            </div>
      * */
      console.log(document.getElementById('sch'));

      // 以下的 this 指向的是当前组件(App)的组件实列对象(VueComponent)
      // 其中在vc中存在一个 $refs 属性，DOM元素中只要存在 ref 属性都会存储到这个vc的$refs中。
      // 当 ref 属性出现在真是DOM元素中时，存储的就是这个真实的DOM元素。
      // 当 ref 属性出现在自定义组件标签时，存储的就是这个自定义组件标签的组件实例对象(vc)。
      // 可想而知，在这个自定义的组件中又存在 $refs 属性，这就形成了套娃模式。

      console.log(this.$refs.demo);  // 真实的DOM元素 <h1>欢迎学习Vue</h1>
      console.log(this.$refs.btn);   // 真实的DOM元素 <button>点我获取以上的DOM元素</button>
      console.log(this.$refs.sch);   //  School组件的实列对象 vc
      console.log(this.$refs.stu);   //  Student组件的实例对象 vc
      console.log(this.$refs)  // 打印出来是一个数组，存储的上面的四个被 ref 属性声明的元素
    }
  }
}
</script>

<style>

</style>