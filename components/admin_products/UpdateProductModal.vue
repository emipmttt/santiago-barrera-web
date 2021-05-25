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

        <v-text-field
          label="Publication"
          v-model="product.publication"
          type="date"
        />
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="closeEditModal">
          Cancel
        </v-btn>

        <v-btn text color="#FF8D3B" @click="">
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

  }

}
</script>

<style scoped>

</style>
