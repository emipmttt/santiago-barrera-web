<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" dark color="#FF8D3B">ADD COLOUR</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> Add Colour </v-card-title>

      <v-card-text>
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Colour"
          v-model="colour"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" text @click="dialog = false"> Cancel </v-btn>
        <v-btn :disabled="loading" text color="#FF8D3B" @click="addColour">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "addColourModal",
  props:['product'],
  data(){
    return{
      dialog: false,
      loading: false,

      colour:"",
    }
  },

  methods:{
    async addColour() {
      this.product.colours.push(this.colour)

      this.loading = true;
      try {
        await axios.put("/api/products/" + this.product._id, this.product);

        this.closeModal()
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    closeModal() {
      this.$emit("closeModal");
    },
  },
}
</script>

<style scoped>

</style>
