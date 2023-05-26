<template>
  <div id="page2">
    <h1>收货信息</h1>
    <div v-text="$route.query.id"></div>
    <div v-text="$route.query.price"></div>
  </div>
</template>

<script>
export default {
  name: "page",
  data(){
    return {

    }

  }
}
</script>

<style scoped>

</style>
