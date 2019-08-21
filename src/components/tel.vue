<template>
   <p>{{msg}}</p>
</template>

<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    mounted(){
        this.$bus.$on('on-click',param=>{
            console.log(param);
            this.msg = param;
        })
    }
}
</script>

<style>

</style>