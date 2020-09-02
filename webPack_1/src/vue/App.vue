<template>
    <div class="title">
    <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: 'Hello Vue',
                name:'hlx'
            }
        }
    }
</script>

<style scoped lang="sass">
.title{
    color:yellow;
}
</style>