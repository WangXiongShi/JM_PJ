<template>
    <div>
        <div>{{msg}}</div>
        <ul v-if="dataHas">
            <li v-for="(item,index) in dataList" :key="index">{{item.name +'　'+ item.age}}</li>
        </ul>
        <input v-model="username" @change="setUser" type="text">
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataHas:true,
            username:''
        }
    },
    props:{
        dataList:Array,
        msg:String
    },
    methods: {
        setUser(){
            this.$emit('transferUser',this.username)
        }
    },
}
</script>
<style lang="">
    
</style>