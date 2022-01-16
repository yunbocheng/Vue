<template>
  <div class="hello">
    <button>我是一个HTML中的普通按钮</button>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" >主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
      <el-button type="primary" icon="el-icon-s-tools" round></el-button>

      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">dsadasd</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">dasdsad</div></el-col>
      </el-row>

      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
      </el-row>
    </el-row>

    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A" border></el-checkbox>
      <el-checkbox label="复选框 B" checked></el-checkbox>
      <el-checkbox label="复选框 C" checked></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用"  ></el-checkbox>
    </el-checkbox-group>

    <el-input v-model="input" placeholder="请输入内容" label="姓名" disabled></el-input>

    <el-select v-model="value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>


    <el-row>
      <el-button icon="el-icon-delete-solid" circle></el-button>
    </el-row>

    <div class="block">
      <el-slider
          v-model="value2"
          show-input>
      </el-slider>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      checkList: [],
      input:'',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value:'',
      value2: 0
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
