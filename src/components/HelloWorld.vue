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
  </div>
</template>

<script>
import MyComponent from "./MyComponent";
import Main from "./Main";
import thisInput from "./input";
import thisDialog from "./dialog";
// import Vue from "vue"
export default {
  name: "HelloWorld",
  data() {
    return {
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
