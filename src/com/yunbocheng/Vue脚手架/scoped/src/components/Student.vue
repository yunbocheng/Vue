<template>
  <div class="demo">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      studentName: 'TOM',
      age: 20,
    }
  },
}
</script>

<style scoped lang="css">
/*
  Vue中样式原理：在Vue中，所有组件的CSS样式最终都会存储到一个文件中。这样就会造成class属性冲突。
       造成class相同的模块存在多个样式。这样就会产生冲突。
       并且在 App中引入的组件：后引入的组件样式会覆盖先引入组件样式。
       这样就造成了样式冲突。

  scoped(范围)

  作用：
    被 scoped 属性声明的style样式只能用于修饰当前的组件的 template 板块中DOM元素。
    不可以用于其他的组件。
    这样就避免了多个 template 中CSS样式的冲突。即使好多个组件中的 template 声明相同的class名字。
    也不会产生样式的冲突。

  lang(语言)

  作用：
    lang属性用来声明这个style样式块中使用什么语言书写。
    可以使用CSS、less等...
    当不写这个lang属性的时候，默认使用的CSS语言编写样式。

  增加scoped后Vue做的事情：
      在编译CSS元素的时候，会在元素的前面加上一个 标识编号 。这个编号是随机生成的。
      我们给div设置的 class属性，那么这个div中所包含的所有元素都会加上这个标识编号。
      <div data-v-22321ebb class="demo">
        <h2 data-v-22321ebb>学生姓名：TOM</h2>
        <h2 data-v-22321ebb>学生年龄：20</h2>
      </div>

      <div data-v-3375b0b8 class="demo">
        <h2 data-v-3375b0b8>学校姓名：清华大学</h2>
        <h2 data-v-3375b0b8>学校地址：北京海淀区</h2>
      <div>
*/
  .demo{
    background-color: yellow;
  }
</style>

