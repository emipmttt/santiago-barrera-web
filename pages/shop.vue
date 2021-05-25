<template>
  <div>
    <div  class="navigateBar__title Hatton">
      <p>Shop</p>
    </div>

    <div class="shop__body">
      <p class="shop-title NueMontreal">
        BEST<br/>SELLER
      </p>
      <div class="bestSeller">
        <div class="bestSeller--item" v-for="product in products" :key="product.id">
          <item-best-seller-shop :product="product"/>
        </div>
      </div>

      <p class="shop-title NueMontreal">
        ALL<br/>PRODUCTS
      </p>

      <div class="allProducts">
        <div v-for="product in products" :key="product.id">
          <item-shop :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemShop from "../components/shopPage/itemShop";
import ItemBestSellerShop from "../components/shopPage/itemBestSellerShop";
export default {
  name: "shop",
  components: {ItemBestSellerShop, ItemShop},
  data(){
    return{
      products: {
        0:{
          id: '1',
          image: 'mdi-death-star-variant',
          title: 'Death Star Variant',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '400',
          oldPrice: '500',
          stock: '40',
          size: 'S - XL',
          publication: '01-01-2000',
        },
        1:{
          id: '2',
          image: 'mdi-death-star',
          title: 'Death Star',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '400',
          oldPrice: '500',
          stock: '400',
          size: 'S - XL',
          publication: '02-02-2002',
        },
      },
    }
  },
}
</script>

<style scoped>

.navigateBar__title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.shop__body{
  margin: 0 7%;
  width: 93%;
}

.shop-title{
  letter-spacing: 1rem;
  color: #ef712f;
  font-size: 1.2rem;
}

.bestSeller{
  margin: 0 10rem;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
}

.allProducts{
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  margin-right: 5%;
}

</style>
