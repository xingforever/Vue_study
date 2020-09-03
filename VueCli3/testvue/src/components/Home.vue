<template>
    <div class="">
        <h2>我是首页</h2>
        <h3>by hlx</h3>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
  
    <router-view></router-view>
        

    </div>
</template>

<script>
    export default {
        name: 'home'
        
    }
</script>

<style scoped lang="sass">

</style>