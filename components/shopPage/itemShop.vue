<template>
  <div>
    <div class="itemShop">
      <img :src="product.url" class="itemShop--img"/>
    </div>
    <div class="itemShop__details NueMontreal">
      <div>
        {{ product.title }}<br/>
        <div class="itemShop__details--orange">
          {{ product.price }}$CAD
        </div>
      </div>
      <div>
        {{ product.stock }} in Stock<br/>
        <div class="itemShop__details--orange">
          {{ product.size }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemShop",
  props:['product'],
}
</script>

<style scoped>

.itemShop{
  padding: 0;
  width: 100%;
  height: 25rem;
  background-color: #000000;
}

.itemShop--img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.itemShop__details{
  width: 97%;
  display: flex;
  line-height: 1.2rem;
  justify-content: space-between;
  font-size: .9rem;
  margin-top: 1rem;
}

.itemShop__details--orange{
  color: #ef712f;
}

</style>
