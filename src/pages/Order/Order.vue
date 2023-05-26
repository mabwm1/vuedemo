<template>
  <div id="order">
    <h1>正在支付</h1>
    <p>商品id：<input type="text" v-model="id"></p>
    <div>
      <router-link to="/order/page1/2000">核算商品</router-link>
      <router-link to="/order/page2">收货信息</router-link>
    </div>
    <p>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
export default {
  name: "order",
  data(){
    return {
      id:1001
    }
  }
}
</script>

<style scoped>

</style>
