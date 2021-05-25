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
          v-model="image"
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
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Publication"
          v-model="publication"
          type="date"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" text @click="dialog = false"> Cancel </v-btn>
        <v-btn :disabled="loading" text color="#FF8D3B" @click="">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateProductModal",
  data() {
    return {
      dialog: false,
      title: "",
      description: "",
      image: "",
      price: "",
      oldPrice: "",
      stock: "",
      size: "",
      publication: "",
      loading: false,
    };
  },
}
</script>

<style scoped>

</style>
