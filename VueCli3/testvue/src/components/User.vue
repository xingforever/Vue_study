<template>
    <div class="">
        <h2>用户</h2>
        <h1>hlx</h1>
        <H3>{{$route.params.userId}}</H3>
    </div>
</template>

<script>
    export default {
        name: 'user',
        computed:{
        userId(){
            return this.$route.params.userId
        }
    
        }

    }
</script>

<style scoped lang="sass">

</style>