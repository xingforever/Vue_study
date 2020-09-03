<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link to="/user" tag="button" active-class="active">用户</router-link>
    <!-- <button @click='homeClick'>首页</button>
     <button @click="aboutClick"> 关于</button> -->

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      homeClick() {
        this.$router.push('/home')
        console.log('homeClick');
      },
      aboutClick() {
        this.$router.push('/about')
        console.log('about');
      }
    }
  }
</script>

<style>
  .active {
    color: red;
  }
</style>