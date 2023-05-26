<template>
  <div id="page1">
    <h1>核算商品:
      <span v-text="shop.id"></span>
      <input type="text" v-model="shop.price">
      <input @click="toPage2" type="button" value="下一步">
    </h1>
  </div>
</template>

<script>
export default {
  name: "page1",
  data () {
    return {
      shop:{
        id: this.$route.params.id,
        price: 0
      }
    }
  },
  methods:{
    toPage2(){
      this.$router.push({ path: "/order/page2", query: {id:this.shop.id,price:this.shop.price} });
    }
  }
}
</script>

<style scoped>

</style>
