<template>
  <div>
    <div  class="navigateBar__title Hatton">
      <p>Shop</p>
    </div>
    <div class="article">

      <div v-for="item in allArticles" :key="item.id">
        <item-article :article="item"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "shop"
}
</script>

<style scoped>

.navigateBar__title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.article{
  margin-bottom: 10rem;
}

</style>
