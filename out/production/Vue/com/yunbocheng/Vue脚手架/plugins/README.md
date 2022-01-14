# plugins

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

插件：
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue， 
         第二个参数以及以后的参数是插件使用者传递的数据。
    
    定义插件：
    对象.install = function(Vue,options){
    // 1. 添加全局过滤器
    Vue.filter(....)
    // 2. 配置全局指令
    Vue.directive(...)
    // 3. 配置全局混入(合)
    Vue.mixin(...)
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(){...}
    Vue.prototype.$myProperty = xxxx
    }

    使用插件：Vue.use()