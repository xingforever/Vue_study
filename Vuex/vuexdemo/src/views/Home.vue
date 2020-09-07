<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    <button @click="addition"> +</button>
    <button @click="subtraction"> -</button>
    <button @click="addcount(5)"> +5</button>
       <button @click="addcount(10)"> +10</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addcount(count){
          this.$store.commit('addcrement',count)
      }
    }
  }
</script>