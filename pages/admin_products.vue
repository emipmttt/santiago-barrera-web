<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Products</h1></div>

      <div>
        <create-product-modal/>
      </div>
    </div>

    <v-simple-table class="mt-4">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">Title</th>
          <th class="text-left">Publication</th>
          <th class="text-left">Stock</th>
          <th class="text-left"></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <v-icon x-large>{{product.image}}</v-icon>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.publication }}
          </td>

          <td>
            {{ product.stock }}
          </td>

          <td>
            <v-btn @click="showProduct(product)">
              <v-icon color="#FF8D3B">
                mdi-eye
              </v-icon>
            </v-btn>

            <v-btn @click="">
              <v-icon color="#FF8D3B">
                mdi-delete
              </v-icon>
            </v-btn>

            <v-btn @click="">
              <v-icon color="#FF8D3B">
                mdi-pencil
              </v-icon>
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

    <ShowProductModal
      :active="showActive"
      :product="productSelected"
      @closeModal="closeModal"
    />

    <UpdateArticleModal
      :active="updateActive"
      :article="productSelected"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import CreateProductModal from "../components/admin_products/CreateProductModal";
import ShowProductModal from "../components/admin_products/ShowProductModal";
import axios from "axios";
import UpdateArticleModal from "../components/admin_products/UpdateArticleModal";
export default {
  name: "admin_products",
  components: {UpdateArticleModal, ShowProductModal, CreateProductModal},
  layout: "admin",
  data(){
    return{
      showActive: false,
      updateActive: false,
      productSelected: {},

      products: {
        0:{
          id: '1',
          image: 'mdi-death-star-variant',
          title: 'Death Star Variant',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '$400',
          oldPrice: '$500',
          stock: '40',
          size: 'S - XL',
          publication: '01-01-2000',
        },
        1:{
          id: '2',
          image: 'mdi-death-star',
          title: 'Death Star',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '$400',
          oldPrice: '$500',
          stock: '400',
          size: 'S - XL',
          publication: '02-02-2002',
        },
      },
    }
  },
  methods: {
    showProduct(product) {
      this.showActive = true;
      this.productSelected = product;
    },

    async closeModal() {
      this.showActive = false;
      this.updateActive = false;
      this.articleSelected = {};
    },
  },
}
</script>

<style scoped>

</style>
