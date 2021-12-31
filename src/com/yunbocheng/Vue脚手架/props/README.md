# props

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

配置项props：
    (1). 传递数据：Demo是一个自定义的组件。
        <Demo name="xxx"/>
    (2). 接收数据：
        第一种方式: (只接收)
            props:["name"]
        第二种方式：(限制类型)
            props:{
                name:String
            }
        第三种方式：(限制类型、限制必要性、指定默认值)
            props:{
                name:{
                type:String,  // 类型
                require:true, // 必要性
                default:'老王' // 默认值
                }
            }