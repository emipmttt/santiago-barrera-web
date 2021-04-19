<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" dark color="#FF8D3B">Create</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> Register Project </v-card-title>

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
          label="Role"
          v-model="role"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="Date"
          v-model="date"
          type="date"
        />
        <v-text-field
          autocomplete="off"
          :disabled="loading"
          color="#FF8D3B"
          label="URL"
          v-model="url"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" text @click="dialog = false"> Cancel </v-btn>
        <v-btn :disabled="loading" color="#FF8D3B" text @click="create">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      description: "",
      role: "",
      date: "",
      url: "",
      loading: false,
    };
  },
  methods: {
    async create() {
      this.loading = true;
      try {
        const project = {
          title: this.title,
          description: this.description,
          role: this.role,
          date: Number(new Date(this.date).valueOf()),
          url: this.url,
        };

        const createUserQuery = (
          await axios.post("/api/projects/create", project)
        ).data;
        if (!createUserQuery.ok) {
          this.loading = false;
          this.message = createUserQuery.error;
          this.messageModal = true;
          return;
        } else {
          this.loading = false;
          this.messageModal = false;
        }
      } catch (error) {
        this.loading = false;
        this.messageModal = false;
      }

      location.reload();
    },
  },
};
</script>

<style>
</style>