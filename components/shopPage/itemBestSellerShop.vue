<template>
  <div>
    <nuxt-link
      :to="`/product/${this.product._id}`"
      class="itemShop--link"
    >
      <div class="itemShop">
        <img :src="product.url" class="itemShop--img"/>
      </div>
      <div class="itemShop__details NueMontreal">
        <div>
          {{ product.title }}<br/>
          <div class="itemShop__details--orange">
            {{ product.price }}$ CAD
          </div>
        </div>
        <div>
          {{ product.stock }} in Stock<br/>
          <div class="itemShop__details--orange">
            {{ product.size }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "itemBestSellerShop",
  props:['product'],
}
</script>

<style scoped>

.itemShop--link{
  text-decoration-line: none;
  color: #333333;
}

.itemShop{
  padding: 0;
  width: 80%;
  height: 25rem;
  background-color: #000000;
}

.itemShop--img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.itemShop__details{
  line-height: .85rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: .7rem;
  margin-top: 1rem;
}

.itemShop__details--orange{
  color: #ef712f;
}

</style>

