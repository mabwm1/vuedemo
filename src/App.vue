<template>
  <div id="app">
    <Header v-if="!$route.meta.isHideHeader"></Header>
    <router-view/>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
  import Header from "./components/Header/Header.vue";
  import Footer from "./components/Footer/Footer.vue";
export default {
  name: 'App',
  components:{
    Header,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
