<template>
    <div>
        <div>{{msg}}</div>
        <ul v-if="dataHas">
            <li v-for="(item,index) in dataList" :key="index">{{item.name +'　'+ item.age}}</li>
        </ul>
        <input v-model="username" @change="setUser" type="text">
        {{childData}}
        <button @click="toParam">传递参数</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataHas:true,
            username:'',
            childData:'我是子组件中的参数'
        }
    },
    props:{
        dataList:Array,
        msg:String
    },
    methods: {
        setUser(){
            this.$emit('transferUser',this.username)
        },
        toParam(){
            this.$emit('transToParam',this.childData,this.username) //第一个参数为自定义的事件名, 第二个参数为要传递的参数
        }
    },
}
</script>
<style lang="">
    
</style>