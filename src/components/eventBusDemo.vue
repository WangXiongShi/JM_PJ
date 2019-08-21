<template>
<div>
  <P>BUS</P>
    <v-email></v-email>
    <v-tel></v-tel>
</div>
</template>

<script>
import vEmail from './email'
import vTel from './tel'
export default {
    components:{
        vEmail,vTel
    }
}
</script>

<style>

</style>