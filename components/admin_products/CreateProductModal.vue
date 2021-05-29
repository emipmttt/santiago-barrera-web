<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" dark color="#FF8D3B">ADD PRODUCT</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> Register Product </v-card-title>

      <v-card-text>
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Title"
          v-model="title"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Description"
          v-model="description"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Image"
          v-model="url"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Price"
          v-model="price"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Old Price"
          v-model="oldPrice"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Stock"
          v-model="stock"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Size"
          v-model="size"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" text @click="dialog = false"> Cancel </v-btn>
        <v-btn :disabled="loading" text color="#FF8D3B" @click="createProduct()">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import axios from "axios";

export default {
  name: "CreateProductModal",

  data() {
    return {
      dialog: false,
      loading: false,

      title: "",
      description: "",
      url: "",
      price: "",
      oldPrice: "",
      stock: "",
      size: "",
    };
  },

  methods:{
    async createProduct() {
      this.loading = true;
      try {
        await axios.post("/api/products/create", {
          title: this.title,
          description: this.description,
          url: this.url,
          price: this.price,
          oldPrice: this.oldPrice,
          stock: this.stock,
          size: this.size,
          publication: Date.now(),
          bestSeller: false,
          colours: [],
        });

        location.reload();

      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }
  },
}
</script>

<style scoped>

</style>
