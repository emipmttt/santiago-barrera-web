<template>
  <div>
    Hola
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "_id",

  data(){
    return{
      product: {},
    }
  },

  async mounted() {
    let request = (
      await axios.get("/api/products/details/" + this.$route.params.id)
    ).data;
    this.product = request.data;

    console.log(this.product)
  }
}
</script>

<style scoped>

</style>
