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
        name: 'home',
        data() {
            return {
                path: '/home/news'
            }
        },
        created() {
            console.log('create')
            this.$router.push('/home/news')

        },
        activeted() {
            this.$router.push(this.path)
        },
        deactivated() {

        },
        destroy() {
            console.log('destroy')

        },
        mouted() {

        },
        update() {

        },
        beforeRouteLeave(to, from, next) {
            this.path = this.$route.path;
            next();
        },

    }
</script>

<style scoped lang="sass">

</style>