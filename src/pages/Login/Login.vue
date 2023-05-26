<template>
  <div id="Login">
    <Header></Header>
    账号：<input type="text" v-model="username">
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";

export default {
  name: "Login",
  data(){
    return {
      username:"a120"
    }
  },
  components:{
    Header
  }
}
</script>

<style scoped>
body{
  background-color: aquamarine;
}
</style>
