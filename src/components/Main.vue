<template>
    <div>{{canshu}}{{obj}}</div>
</template>
<script>
export default {
    data(){
        return{
            canshu:'1111111111'
        }
    },
    props:{
        obj:String
    }
}
</script>