<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" dark color="#FF8D3B">Add Word</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> Add Word </v-card-title>

      <v-card-text>
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Word"
          v-model="word"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" text @click="dialog = false"> Cancel </v-btn>
        <v-btn :disabled="loading" color="#FF8D3B" text @click="addNewWord()">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import getSettings from "../../middleware/getSettings";
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      word: '',
    };
  },
  props:{
    settings: {},
  },
  methods: {
    async addNewWord() {
      this.loading = true;
      this.settings.words.push(this.word)

      await axios.put('api/settings/0', this.settings);

      location.reload();
    },
  },
};
</script>

<style>
</style>
