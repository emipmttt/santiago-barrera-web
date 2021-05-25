<template>
  <v-dialog v-model="active" persistent max-width="800" scrollable>
    <v-card>
      <v-card-title>
        {{ product.title }}
      </v-card-title>

      <v-card-text class="mt-8">

      </v-card-text>

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
