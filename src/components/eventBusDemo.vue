<template>
<div class="main">
  <P>BUS</P>
    <v-email @mounted="doSomething"></v-email>
    <v-tel></v-tel>
    <p>Class 可以通过对象语法和数组语法进行动态绑定：</p>
    <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
        class对象绑定语法
    </div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">
        class数组绑定语法
    </div>
    <p>Style 也可以通过对象语法和数组语法进行动态绑定：</p>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
        style对象绑定语法
    </div>
    <div v-bind:style="[styleColor, styleSize]">
        style数组绑定语法
    </div>
</div>
</template>

<script>
import vEmail from './email'
import vTel from './tel'
export default {
    data(){
        return{
            // class对象绑定语法
            isActive: true,
            hasError: false,
            // class数组绑定语法
            activeClass: 'active',
            errorClass: 'text-danger',
            // style对象绑定语法
            activeColor: 'red',
            fontSize: 30,
            // style数组绑定语法
            styleColor: {
                color: 'pink'
            },
            styleSize:{
                fontSize:'23px'
            }
        }
    },
    methods:{
        doSomething(val){
            console.log(val);
        }
    },
    components:{
        vEmail,vTel
    }
}
</script>

<style scope>
.main{
    color: black;
}
    .active{
        width: 100%;
        height: 30px;
        background: red;
    }
    .text-danger{
        width: 100%;
        height: 30px;
        background: #ccc;
    }
</style>
