# mixin

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

mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象。
    使用方式：
    第一步：定义混合
    {
        data(){....},
        methods:{....}
    }
    第二步：使用混合
    (1). 全局混入：Vue.mixin(xxx)
    (2). 局部混入：mixins:['xxx']
