<template>
  <v-dialog v-model="active" persistent max-width="800" scrollable>
    <v-card>
      <v-card-title>
        {{ product.title }}
      </v-card-title>

      <v-card-text class="mt-8">
        <h3>Description</h3>
        {{ product.description }}

        <br/><br/>
        <h3>Price</h3>
        {{ product.price }}

        <br/><br/>
        <h3>Old Price</h3>
        {{ product.oldPrice }}

        <br/><br/>
        <h3>Stock</h3>
        {{ product.stock }}

        <br/><br/>
        <h3>Size</h3>
        {{ product.size }}

        <br/><br/>
        <h3>Publication</h3>
        {{ product.publication }}

        <br/><br/>
        <h3>Image</h3>
        <v-icon x-large>
          {{ product.image }}
        </v-icon>

      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer />

        <v-btn text color="#FF8D3B" @click="closeModal">
          CLOSE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ShowProductModal",
  props: ["active", "product"],

  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
}
</script>

<style scoped>

</style>
