# Vue基础语法
**现在的Vue局面是Vue2.0到Vue3.0之间的过度时期。**

## 1. Vue概念

### 1.1 Vue是什么

- Vue是一套用于**构建用户界面**的**渐进式**的JavaScript框架。

![image-20211214102915475](https://gitee.com/YunboCheng/imageBad/raw/master/image/image-20211214102915475.png)

- 我们只需要将一些数据传递给前端，而不需要关注前端界面的构成。

**渐进式：**

- Vue可以自底向上逐层的应用
  - 简单应用：只需一个轻量小巧的核心库。
  - 复杂应用：可以引入各式各样的Vue插件。

### 1.2 Vue的开发者

- 尤雨溪（中国程序员）

**后起之秀，生态完整，已然成为国内前端工程师的必备技能。**

### 1.3 Vue的特点

1. 采用**组件化**模式，提高代码复用率、切让代码更好维护。

![image-20211214105650637](https://gitee.com/YunboCheng/imageBad/raw/master/image/image-20211214105650637.png)

- **一个Vue文件就是一个组件。在Vue文件中存储的就是HTML、CSS以及JS文件。**
- 我们将一个整体的网页分为多个Vue组件，这样修改一个Vue组件的时候不会影响另一个组件中的内容。这就提高了代码的维护性以及复用率。

2. **声明式**编码，让编码人员无需直接操作DOM，提高开发效率。

![image-20211214110529026](https://gitee.com/YunboCheng/imageBad/raw/master/image/image-20211214110529026.png)

![](https://gitee.com/YunboCheng/imageBad/raw/master/image/20211214110624.png)

- **使用Vue中的组件(v-for)来遍历这个数据并且写入到前端界面。**

3. 使用**虚拟DOM+优秀的Diff算法**，尽量复用DOM节点。

![image-20211214111032819](https://gitee.com/YunboCheng/imageBad/raw/master/image/image-20211214111032819.png)

- **当新增数据的时候，新的数据会覆盖以前的数据。这样写非常浪费时间。我们想做的只是添加以前没有的数据，而已经存在的数据就不去处理它。提高效率**

![image-20211214111521314](https://gitee.com/YunboCheng/imageBad/raw/master/image/image-20211214111521314.png)

- **使用Vue构建一个虚拟DOM，当新增数据的时候，新的虚拟DOM和以前的DOM进行比较，(这个比较使用的Diff算法)当第二次多添加数据的时候，只会将多的数据从虚拟DOM传递俄给真实的DOM。这样就不会造成大量的数据传递以及覆盖。**


### 1.4 HTML引入Vue

#### 1.4.1 初识Vue

- 想让Vue工作,就必须创建一个Vue实例,且要传入一个配置对象.
- root容器里面的代码仍然符合HTML规范,只不过混入了一些特殊的Vue语法.
- root容器里的代码被称为 [Vue模板].
- Vue实列和容器是一一对应的关系.
- 真实开发中只有一个Vue实例,并且会配合着组件一起使用.
- {{xxx}}}中的xxx要写js表达式,且xxx可以直接读取到data中的所有属性值.
- 一旦data中的数据发生变化,那么页面中用到该数据的地方会自动更新.

#### 1.4.2 区分JS表达式与JS代码(语句)

**表达式:一个表达式会产生一个值,可以放在任何一个需要值的地方:**

```javascript
(1) a
(2) a+b
(3) demo(1)
(4) x === y ? 'a' : 'b'
```

**js语句：就是简单的JS代码语句，不包含任何数据的计算**

```javascript
(1) if(){}
(2) for(){}
```

#### 1.4.3 第一个Vue实例以及其中的核心知识

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试第一个Vue程序</title>

    <!-- 引入Vue -->
    <script type="text/javascript" src="../../../../js/vue.js"></script>
</head>
<body>

    <!--
        初识Vue:
            1. 想让Vue工作,就必须创建一个Vue实例,且要传入一个配置对象.
            2. root容器里面的代码仍然符合HTML规范,只不过混入了一些特殊的Vue语法.
            3. root容器里的代码被称为 [Vue模板].
            4. Vue实列和容器是一一对应的关系.
            5. 真实开发中只有一个Vue实例,并且会配合着组件一起使用.
            6. {{xxx}}}中的xxx要写js表达式,且xxx可以直接读取到data中的所有属性值.
            7. 一旦data中的数据发生变化,那么页面中用到该数据的地方会自动更新.

            注意区分js表达式 与 js代码(语句)
                1. 表达式:一个表达式会产生一个值,可以放在任何一个需要值的地方:
                    (1) a
                    (2) a+b
                    (3) demo(1)
                    (4) x === y ? 'a' : 'b'

                2. js语句
                    (1) if(){}
                    (2) for(){}
    -->

    <!-- 准备好一个容器 -->
    <div id="root">
        <!-- Vue中提供了插值运算符 {{key}} 注意:这只是一个符号,与解构赋值和对象没有任何的关系-->
        <!-- 这里还可以进行相关方法的调用. 比如:字符串调用全部转化为大写的方法.-->
        <h1>Hello,{{name}},{{language.toUpperCase()}},{{Date.now()}}</h1>
    </div>

    <script type="text/javascript">
        Vue.config.productionTip = false;  // 阻止 Vue 在启动时生成生产提示。

        // 创建Vue实例。初始化Vue的时候，使用的是构造方法，里面传递了一个参数，并且这个参数是一个对象
        new Vue({
            /*这里的key值是固定的，value值要保持格式一致。*/
            /*
                el是:element的简称。使用el把Vue与dom对象进行绑定。
                可以使用id选择器、类选择器、标签选择器等方法。和CSS是一样的。
                就是告诉Vue，一会要将处理完的成果交过div这个盒子处理。在盒子上进行
                数据的显示。
                还可以使用带代码的方式手动获取：(不常使用)
                    document.getElementById("root")
            */
            el:'#root', // el用于指定当前Vue实列为哪个容器服务，值通常为css选择器字符串。
            /*
            * 实际开发中，我们需要处理的数据肯定有很多，所以此时就需要一种结构来存储这么多的数据
            * 并且还要保持数据的唯一性。
            *
            * 所以：我们的data数据对象的形式来存储数据(使用键值对的方式)，key是唯一的，保持了取出
            *      数据时不会重复。
            *
            * data中用于存储数据，数据供el所指定的容器使用。
            *
            * 这个存储数据的解构:我们暂时写成一个对象
            * 在以后的开发中,当我们使用组件的时候,会把存储数据的解构写成一个函数
            * */
            data:{
                name:'清华大学',
                language:'English'
            }
        })
    </script>
</body>
</html>
```

### 1.5 el与data的两种写法

#### 1.5.1 el的两种写法

**el：绑定展示该Vue组件的容器。**

```
(1) new Vue时候配置el属性。
(2) 先创建Vue实例，随后在通过vm.$mount('#root')指定el的值。
```

- el的第一种写法：创建Vue的时候配el属性

```javascript
const v = new Vue({
        // el:'#root', // 关联Vue与data数据的第一种形式
        data:{
            name:'清华大学',
            language:'English'
        }
    })
```

- el的第二种写法：使用Vue实例对象来指定el属性

```javascript
const v = new Vue({
        data:{
            name:'清华大学',
            language:'English'
        }
    })
    console.log(v);
    v.$mount("#root");
// 第二种绑定el的方式比较灵活。比如：可以给他设置打印这个数据的时间
setTimeout(function (){
        v.$mount("#root");
    },2000);
```

#### 1.5.2 data的两种写法

```markdown
(1) 对象式
(2) 函数式
```

- data的第一种写法：对象式

```javascript
data:{
  name:'清华大学',
  language:'English'
}
```

- data的第二种写法：函数式

```javascript
// 原始形式
data:function(){
	console.log(this);  // Vue对象。
	/*函数需要有返回值，并且返回值是一个对象*/
	return{
		name:'清华大学'
	}
}
// 使用 es6 中的语法。对象的简化写法 （去掉 :function）
data(){
  console.log(this);  // Vue对象。
  /*函数需要有返回值，并且返回值是一个对象*/
  return{
    name:'清华大学'
  }
}

/*
当我们学习到组件的时候，data只能使用函数式的形式
记住这里只能使用这种普通函数的方式，不能使用箭头函数
因为箭头函数的this指向的是 windows，我们需要让this指向当前元素
也就是让this指向Vue这个对象。
在对象中创建函数我们使用简化对象的写法。去掉 :function
*/
```

#### 1.5.3 一个重要的原则

**由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不在是Vue实例了。**
**就变成了windows**

### 1.6 MVVM模型

#### 1.6.1 分解结构

- M: 模型(Model)：data中的数据。
- V: 视图(View)：模板代码，就是盒子的结构。
- VM: 视图模型(ViewModel):Vue实例。

#### 1.6.2  两种重要的结论

1. data中所有的属性，最后都出现在了vn身上。
2. vm身上所有的属性及Vue原型上所有的属性，在Vue模板中都可以直接使用。

#### 1.6.3 MVVM模型的拆分

```html
div id="root">
    <h1>学校名称：{{name}}</h1>
    <h1>所学语言：{{language}}</h1>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false;  // 阻止 Vue 在启动时生成生产提示。

    // 这就是一个 viewModel(视图模型)，视图模型就是一个Vue对象
    const vn = new Vue({
        el:'#root', // el用于指定当前Vue实列为哪个容器服务，值通常为css选择器字符串。

        // 这个data代表的就是一个 Model(模型)
        data:{
            name:'清华大学',
            language:'English'
        }
    })
</script>
```

![](https://gitee.com/YunboCheng/imageBad/raw/master/image/20220119144552.png)

### 1.7 模板语法

#### 1.7.1 模板语法的分类

1. 插值写法:

    - 功能: 用于解析标签体内容.
    - 写法: {{xxx}}}. xxx是js表达式,且可以直接读取到data中的所有属性.可以直接获取到vm中的所有数据

2. 指令写法:

    - 功能: 用于解析标签(包括: 标签属性、标签体内容、绑定事件....)

     我们可以在标签体内容中也使用指令写法的形式，只是需要改变为别的命令。

    举例：v-bind:href="xxx" 或 简写成 :href="xxx" 。xxx同样是js表达式

    且可以直接获取到data中的数据。可以直接获取到vm中的所有数据

**备注：Vue中有很多的指令，且形式都是：v-???? , 此时我们只是拿 v-bind举个例子。**

-  **插值语法**

```html
<!-- 插值语法 -->
    <!--
        注意: 在插值语法中也要使用js表达式,此时看似是一个name值,
        其实是一个赋值表达式.而不是一个字符串。将Vue中的name值赋值给 {{xxx}}}中的xxx
        一定要保证这个 xxx值与Vue中的data中的变量名一致.
    -->
    <h1>你好,{{name}}</h1>
    <!--
        {{}}} : 中的内容是一个表达式，可以使用字符串的拼接
    -->
    <h1>{{'您好, ' + name}}</h1>
    <hr/>
```

- **指令语法**

```html
<!-- 指令语法 -->
    <!--
        v-bind代表的就是将该属性的属性值作为一个js表达式处理,而不是一个字符串.
        v-bind:href="url" : 代表的就是将Vue中变量名url所对用的value值赋值给href属性
                            指定的这个url便令. 这是一个赋值表达式.
                            此时就变成了: href="https://baidu.com"
        可以给任意的属性加入v-bind命令,将这个属性对应的属性值转化为一个赋值表达式进行重新的赋值.

        以下x对应的值并不是 hello,而是在Vue中变量名为 hello对应的值.

        以下y对应的值就是: world,因为没有加入v-bind命令,此时双引号中的不是一个js表达式
        只是一个单纯的字符串.

        这里也要保证属性对应的属性值要和Vue中的data中的变量名一致.

        当data中存在多层对象相互嵌套的时候，需要使用多级点的方式来获取到指定的属性值。

        默认是获取的data层下的数据，只有data层下的数据不用点。
    -->
    <a v-bind:href="school.url" v-bind:x="hello" y="world">点我跳转百度</a>

    <!-- v-bind命令的简化写法: v-bind:<===>: -->
    <a :href="school.url" :x="hello" y="world" :name="school.name">点击我跳转百度(简化)</a>
```

**多层级的data数据**

```javascript
data:{
	name:'jack',
	hello:"您好",
/*在实际开发中，我们一般采用层级嵌套的方式来给定data所有的值。
* 每一个层级也是使用 对象来进行封装嵌套。此时注意访问数据的时候
* 需要使用多个点的方式来获取数据值。
*
* 因为默认的情况下获取到的是 data这一层的数值。
*
* 如果想要获取到下一层的值，需要使用 school.name 这种形式。
* */
	school:{
		name:'清华大学!',
		url:"https://baidu.com",
	}
}
```

### 1.8 数据绑定

#### 1.8.1 数据绑定的种类

**Vue中存在两种数据绑定的方式：**

1. 单向绑定(v-bind) : 数据只能从data流向页面。
2. 双向绑定(v-model) ：数据不仅能从data流向页面，还可以从页面流向data。

**备注：**

1. 双向绑定一般应用在表单类元素上(如：input、select)
2. v-model:value 简写为 v-model，因为v-model默认收集的就是value值。

**单向数据绑定：**

- 使用v-bind完成的单向的数据绑定。当Vue中的数据发生变化的时候会影响页面中的数据发生变化。但是当页面中的数据发生变化的时候，不会影响Vue中的data数据发生变化。

**v-bind命令实现的的是：单项数据绑定**

Vue中的data值发生变化会影响页面中的数据发生变化，但是当页面中的数据发生变化的时候不会影响Vue中的data数据发生变化。

**双向数据绑定**

**v-model命令实现的是：双向数据绑定**

当页面中数据发生变化会影响Vue中的data数据发生变化。当Vue中Data数据发生变化会影响页面中数据发生变化。

**v-model : 在内部为不同的输入元素使用不同的属性并抛出不同的事件。**

    1. text和extarea元素使用value属性和input事件。
    2. checkbox和radio使用checked属性和change事件。
    3. select使用value属性和change事件。
#### 1.8.2 数据绑定实例

```html
<!--普通写法-->
单向数据绑定：<input type="text" v-bind:value="name" id="1"/><br/>
            <label for="1"></label>
<!--
    Vue实列是和容器一一对应的，div才是这个容器。
    而input只是这个容器中的一个标签，可以存在任意多个。
-->
双向数据绑定：<input type="text" v-model:value="name" id="2"/><br/>
            <label for="2"></label>
<!--简化写法-->
单向数据绑定：<input type="text" :value="name" id="3"/><br/>
            <label for="3"></label>
双向数据绑定：<input type="text" v-model="name" id="4"/><br/>
            <label for="4"></label>
<!--
    如下代码是错误的。因为v-model只能应用在表单类元素（输入元素）上
                   简单说就是必须存在 value值。

   然而h2不存在value值，在前端页面就没有数据的输入，所以根本就涉及不到
   Vue中data数据的替换。所以就没有涉及到双向的。

   除了表单元素的value值使用双向的 v-model 命令。
   其他的HTML元素使用v-model 命令会报错。
-->
<h2 v-model:value="name">你好啊</h2>

<input type="checkbox" id="check" name="singleChoice">
<label for="check">jack</label>
```

![](https://gitee.com/YunboCheng/imageBad/raw/master/image/20220119151856.png)

#### 1.8.3 数据绑定的修饰符

**v-model：存在三个修饰符**

    .prop - 作为一个 DOM property 绑定而不是作为 attribute 绑定。(差别在哪里？)
    .camel - (2.1.0+) 将 kebab-case attribute 名转换为 camelCase。(从 2.1.0 开始支持)
    .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。


**v-bind：存在三个修饰符**
    .lazy - 取代 input 监听 change 事件
    .number - 输入字符串转为有效的数字
    .trim - 输入首尾空格过滤