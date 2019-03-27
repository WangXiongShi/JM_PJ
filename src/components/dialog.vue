<template>
    <div>
        dialog:
        <div v-show="isShow">000000000000</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    created(){
        this.$root.$on('change',(val,val2) => {
            this.isShow = val;
            console.log(val+'==================='+val2);
        })
    },
    methods:{
        closeMyself(){
            this.isShow = false;
        }
    }
}
</script>