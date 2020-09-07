<template>
    <div class="">
        <h1>我是Profile</h1>
        <h1>{{$route.query.name}}</h1>
        <h2>{{$route.query.age}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Profile'    
        
    }
</script>

<style scoped lang="sass">

</style>