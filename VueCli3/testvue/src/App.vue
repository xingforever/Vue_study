<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button" active-class="active">用户</router-link>
    <router-link :to="{ path:'/profile' ,query:{name:'hlx',age:18,height:172}}" tag="button" active-class="active">档案
    </router-link>
    <!-- <button @click='homeClick'>首页</button>
     <button @click="aboutClick"> 关于</button> -->
    <button @click="profileClick">档案</button>
   <keep-alive> 
      <router-view></router-view>
   </keep-alive>
  
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'hlx',
        imgurl: ''
      }
    },
    methods: {
      homeClick() {
        this.$router.push('/home')
        console.log('homeClick');
      },
      aboutClick() {
        this.$router.push('/about')
        console.log('about');
      },
       profileClick() {
        this.$router.push({
          path:'/profile',
          query:{
            name:'hlx',
            age:25,
            height:172

          }
        })
        console.log('profile');
      }
    }
  }
</script>

<style>
  .active {
    color: red;
  }
</style>