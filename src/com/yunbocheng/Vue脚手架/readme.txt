Vue脚手架

1. Vue脚手架是Vue官方提供的标准化开发工具(开发平台)
2. 最新版本是 4x

Vue脚手架 ---> Vue CLI (command line interface)，命令行接口工具。

Vue脚手架中的文件

test_vue的根目录下：
    (1) .gitignore 配置git忽略文件
    (2) babel.config.js es6语法转es5语法的配置文件
    (3) package-lock.json  包版本控制文件（这个问价用于指定某个包特殊的下载要求：比如版本、地址等）
    (4) package.json  包的全部信息(包名、包版本、描述等等)
    (5) README.md 针对这个项目的一些介绍

针对package.json文件中配置的解释：
    (1) name：模块的名字
                1. name不能包含大写字母
                2. name不能以"_"或"."开头
                3. name将作为URL的一部分，不能包含URL中的非法字符。
                4. 不要使用和node核心模块一样的名字。

    (2) version：模块的版本
                1. version必须可以被npm依赖的一个node-semver模块解析。
                2. 当改变模块中的内容的时候要对版本进行相应的升级。


    (3) private：如果这个属性被设置为true，npm将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。
                 如果你只想让模块被发布到一个特定的npm仓库，
                 如一个内部的仓库，可与在下面的publishConfig中配置仓库参数。

    (4) publishConfig：这个配置是会在模块发布时用到的一些值的集合。如果你不想模块被默认被标记为最新的，或者默认发布到公共仓库，
                       可以在这里配置tag或仓库地址。

    (5) scripts：scripts属性是一个对象，里边指定了项目的生命周期个各个环节需要执行的命令。
                 key是生命周期中的事件，value是要执行的命令。

                     serve ：启动Vue脚手架时使用的命令。
                     build ：打包时候使用的命令。会将Vue等文件转换为浏览器可以识别的HTML、CSS、JS等文件
                     lint ：Vue中语法检查的命令。这个一般在项目的最后检查一下，平时不用。

    (6) dependencies ：dependencies属性是一个对象，配置模块依赖的模块列表，key是模块名称，value是版本范围，
                       版本范围是一个字符，可以被一个或多个空格分割。

                       版本范围：
                       version 精确匹配版本
                       >version 必须大于某个版本
                       >=version 大于等于
                       <version 小于
                       <=version 小于等于
                       ~version "约等于"，具体规则详见semver文档
                       ^version "兼容版本"具体规则详见semver文档
                       1.2.x 仅一点二点几的版本
                       http://... 见下面url作为denpendencies的说明
                       "" 空字符，和*相同
                       version1 - version2 相当于 >=version1 <=version2.
                       range1 || range2 范围1和范围2满足任意一个都行
                       git... 见下面git url作为denpendencies的说明

    (7) devDependencies ：如果有人想要下载并使用你的模块，也许他们并不希望或需要下载一些你在开发过程中使用的额外的测试或者文档框架。
                          在这种情况下，最好的方法是把这些依赖添加到devDependencies属性的对象中。

    (8) eslintConfig ：eslint配置。eslint工具是为了保证代码的一致性和避免一些语法错误。

    (9) browserslist ：他是一个数组。在不同的前端工具之间共享目标浏览器的库，确定哪些支持哪些版本的浏览器。
                       "> 1%", // 全球超过百分之1人使用的浏览器
                       "last 2 versions", // 根据CanIUse.com追踪的最后两个版本的所有浏览器
                       "not dead" // 还没有死亡的浏览器，也就是现在仍然存在的浏览器。

   (10) description ：针对模块的描述。

   (11) author ：模块的作者。

   (12) engines ：配置值是一个对象。声明node以及npm的版本。

src文件夹下main.js 该文件是整个项目的入口文件，这个文件中定义了Vue实例对象并且绑定了容器。还引入了外部的vue.js文件以及涉及到的所有组件。

src文件夹下App.vue文件：是管理所有组件的父组件。

src/assets文件夹：里面存储的是静态资源文件(照片、视频、音频等资源)

src/components文件夹：存储的都是被App.vue所管理的组件。

node_modules：存储的是该项目使用到的npm库。

public文件夹：
    (1) favicon.ico 就是网页名字的logo。没有的话会在网页的控制台出现一个错误，但是并不会影响网页的运行。




