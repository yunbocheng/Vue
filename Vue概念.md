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

