<template>
    <div>
        input:
        <input type="text" v-model="tips" @change="onInput()">
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:true,
            tips:'请输入值'
        }
    },
    methods:{
        onInput(){
            console.log(this.tips.trim()); //trim()前后去空格
            if(this.tips.trim()){
                console.log(this.$root.$emit('change',this.flag,this.tips));
            }
        }
    }
}
</script>