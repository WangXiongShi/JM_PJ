<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <mycomponent :dataList="dataList" :msg="param" @transferUser="getUser" @transToParam="getChildData"></mycomponent>
    <p>用户名为:{{user}}</p>
    <p>子组件的数据为:{{dataChi}}</p>
    <m-ain :obj="datas"></m-ain>
    <this-input @message="receiveMsg"></this-input>
    <this-dialog></this-dialog>
    <div class="block">
  <span class="demonstration">默认显示所有Tag</span>
  <el-cascader
    :options="options"
    :props="props"
    clearable></el-cascader>
</div>
<div class="block">
  <span class="demonstration">折叠展示Tag</span>
  <el-cascader
    :options="options"
    :props="props"
    collapse-tags
    clearable></el-cascader>
</div>
  </div>
</template>

<script>
import MyComponent from "./MyComponent";
import Main from "./Main";
import thisInput from "./input";
import thisDialog from "./dialog";
import storage from '../utils/index'
console.log(storage);

// import Vue from "vue"
export default {
  name: "HelloWorld",
  data() {
    return { props: { multiple: true },
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海',
            children: [
              { value: 3, label: '普陀' },
              { value: 4, label: '黄埔' },
              { value: 5, label: '徐汇' }
            ]
          }, {
            value: 7,
            label: '江苏',
            children: [
              { value: 8, label: '南京' },
              { value: 9, label: '苏州' },
              { value: 10, label: '无锡' }
            ]
          }, {
            value: 12,
            label: '浙江',
            children: [
              { value: 13, label: '杭州' },
              { value: 14, label: '宁波' },
              { value: 15, label: '嘉兴' }
            ]
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
            children: [
              { value: 19, label: '西安' },
              { value: 20, label: '延安' }
            ]
          }, {
            value: 21,
            label: '新疆维吾尔族自治区',
            children: [
              { value: 22, label: '乌鲁木齐' },
              { value: 23, label: '克拉玛依' }
            ]
          }]
        }],
      // Bus:new Vue({}),
      dataChi:'',
      flag:false,
      datas:'我要向子组件传递数据',
      user:'',
      msg: "Welcome to Your Vue.js App",
      param:'父组件的参数',
      dataList: [
        {
          name: "1",
          age: 11
        },
        {
          name: "2",
          age: 12
        }
      ]
    };
  },
  methods:{
    getUser(msg){
      this.user = msg;
    },
    getChildData(data,username){
      this.dataChi = data
      console.log(data,username);
    },
    receiveMsg(val){
      this.flag = val;
    }
  },
  components: { Mycomponent: MyComponent,MAin:Main,thisInput:thisInput,thisDialog:thisDialog }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
