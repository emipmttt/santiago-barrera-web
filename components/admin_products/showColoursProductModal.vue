<template>
  <v-dialog v-model="active" persistent max-width="800" scrollable>
    <v-card>
      <div class="title">
        <v-card-title>
          {{ product.title }}
        </v-card-title>

        <div class="addColour">
          <add-colour-modal :product="product"/>
        </div>
      </div>

      <v-card-text class="mt-8">

        <v-simple-table class="mt-4">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Colour</th>
              <th class="text-left"></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="colour in product.colours">
              <td>
                {{ colour }}
              </td>

              <td>
                <v-btn @click="">
                  <v-icon color="#FF8D3B">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>

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

import AddColourModal from "./addColourModal";
export default {
  name: "showColoursProductModal",
  components: {AddColourModal},
  props: ["active", "product"],

  methods: {
    closeModal() {
      this.active = false;
      this.$emit("closeModal");
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
}

.addColour{
  padding: 1rem;
}
</style>
