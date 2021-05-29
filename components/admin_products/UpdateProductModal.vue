<template>
  <v-dialog v-model="active" max-width="800" persistent>
    <v-card>
      <v-card-title>
        Update Product
      </v-card-title>

      <v-card-text>
        <v-text-field
          label="Title"
          v-model="product.title"
        />

        <v-text-field
          label="Description"
          v-model="product.description"
        />

        <v-text-field
          label="Price"
          v-model="product.price"
        />

        <v-text-field
          label="Old Price"
          v-model="product.oldPrice"
        />

        <v-text-field
          label="Stock"
          v-model="product.stock"
        />

        <v-text-field
          label="Size"
          v-model="product.size"
        />
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="closeEditModal">
          Cancel
        </v-btn>

        <v-btn text color="#FF8D3B" @click="updateProduct">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProjectModal",
  props: ["active", "product"],

  methods: {
    closeEditModal() {
      this.$emit("closeModal");
    },

    async updateProduct() {
      this.loading = true;
      try {
        await axios.put("/api/products/" + this.product._id, {
          title: this.product.title,
          description: this.product.description,
          url: this.product.url,
          price: this.product.price,
          oldPrice: this.product.oldPrice,
          bestSeller: this.product.bestSeller,
          stock: this.product.stock,
          size: this.product.size,
          publication: this.product.publication,
          colours: this.product.colours,
        });

        this.closeEditModal()
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  }

}
</script>

<style scoped>

</style>
