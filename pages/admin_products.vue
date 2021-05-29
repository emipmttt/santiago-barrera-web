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
          <th class="text-left">Stock</th>
          <th class="text-left">Best Seller</th>
          <th class="text-left">Colors</th>
          <th class="text-left"></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>
            <img class="preview" :src="product.url" />
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.stock }}
          </td>

          <td>
            <v-switch
              v-model="product.bestSeller"
              @change="activateBestSeller(product, $event)"
            />
          </td>

          <td>
            <v-btn @click="showColoursProduct(product)">
              <v-icon color="#FF8D3B">
                mdi-palette
              </v-icon>
            </v-btn>
          </td>

          <td>
            <v-btn @click="showProduct(product)">
              <v-icon color="#FF8D3B">
                mdi-eye
              </v-icon>
            </v-btn>

            <v-btn @click="deleteProduct(product)">
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

    <show-colours-product-modal
      :active="showColoursActive"
      :product="productSelected"
      @closeModal="closeModal"
    />

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
import ShowColoursProductModal from "../components/admin_products/showColoursProductModal";

export default {
  name: "admin_products",
  components: {ShowColoursProductModal, UpdateProductModal, ShowProductModal, CreateProductModal},
  layout: "admin",

  data(){
    return{
      showActive: false,
      showColoursActive: false,
      updateActive: false,
      productSelected: {},
      products: [],
    }
  },

  async mounted() {
    await this.getProducts();
  },

  methods: {
    async activateBestSeller(product, event) {
      product.bestSeller = event;

      await axios.put("/api/products/" + product._id, product);
    },

    async getProducts() {
      const request = await getProducts();
      console.log(request)
      this.products = request;
    },

    async deleteProduct(product) {
      await axios.delete(`/api/products/${product._id}`);
      await this.getProducts();
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

    showColoursProduct(product) {
      this.showColoursActive = true;
      this.productSelected = product;
    },

    async closeModal() {
      this.showActive = false;
      this.updateActive = false;
      this.articleSelected = {};
    },

    findFirstImage(content) {
      const element = content

      if (element) {
        return element.content;
      }
    },
  },
}
</script>

<style scoped>
.preview {
  width: 150px;
}
</style>
