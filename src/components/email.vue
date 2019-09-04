<template>
  <button @click="handleClick">按我</button>
</template>

<script>
export default {
    mounted(){
        console.log(this.$bus);
        this.$on('dang_qian',param=>{
            console.log(param);
        })
        this.$emit("mounted",'我是子组件的mounted事件');
    },
    methods:{
        handleClick(){
            this.$bus.$emit('on-click','你好') //加$bus是挂载在bus上绑定的事件触发
            this.$emit('dang_qian','当前组件') //不加$bus是在当前组卷绑定的事件触发
            // this.$router.push({path:'tel'})
        }
    }
}
</script>

<style>

</style>