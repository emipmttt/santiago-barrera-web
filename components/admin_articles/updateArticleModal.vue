<template>
  <v-dialog v-model="active" persistent max-width="800" scrollable>
    <v-card>
      <v-card-title>
        Update Article
      </v-card-title>



      <v-card-actions>
        <v-spacer />

        <v-btn color="#FF8D3B" dark @click="closeModal">
          CLOSE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "updateArticleModal",
  props: ["active", "article"],

  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
}
</script>

<style scoped>

</style>
