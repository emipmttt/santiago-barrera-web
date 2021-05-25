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
            <v-icon x-large>mdi-store</v-icon>
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
            <v-btn @click="">
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

    <ShowArticleModal
      :active="showActive"
      :article="articleSelected"
      @closeModal="closeModal"
    />

    <update-article-modal
      :active="updateActive"
      :article="articleSelected"
      @closeModal="closeModal"
    />

    <CreateArticleModal
      :active="createActive"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import CreateProductModal from "../components/admin_products/CreateProductModal";
export default {
  name: "admin_products",
  components: {CreateProductModal},
  layout: "admin",
  data(){
    return{
      products: {
        0:{
          id: '1',
          image: '',
          title: 'Generic Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '$400',
          oldPrice: '$500',
          stock: '40',
          size: 'S - XL',
          publication: '01-01-2000',
        },
        1:{
          id: '2',
          image: '',
          title: 'Generic Title 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur cumque deleniti doloremque fuga impedit iste itaque nesciunt pariatur perferendis, praesentium quasi qui quidem ratione, sapiente similique suscipit velit.',
          price: '$400',
          oldPrice: '$500',
          stock: '400',
          size: 'S - XL',
          publication: '02-02-2002',
        },
      },
    }
  }
}
</script>

<style scoped>

</style>
