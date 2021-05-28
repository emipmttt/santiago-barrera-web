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
        <tr v-for="product in products" :key="product._id">
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

            <v-btn @click="updateProduct(product)">
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

    <UpdateProductModal
      :active="updateActive"
      :product="productSelected"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import CreateProductModal from "../components/admin_products/CreateProductModal";
import ShowProductModal from "../components/admin_products/ShowProductModal";
import UpdateProductModal from "../components/admin_products/UpdateProductModal";
import getProducts from "../middleware/getProducts";
import axios from "axios";

export default {
  name: "admin_products",
  components: {UpdateProductModal, ShowProductModal, CreateProductModal},
  layout: "admin",

  data(){
    return{
      showActive: false,
      updateActive: false,
      productSelected: {},
      products: [],
    }
  },

  async mounted() {
    await this.getProducts();
  },

  methods: {
    async getProducts() {
      const request = await getProducts();
      console.log(request)
      this.products = request;
    },

    updateProduct(article) {
      this.updateActive = true;
      this.productSelected = article;
      console.log(article)
    },

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
