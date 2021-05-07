<template>
  <v-dialog v-model="active" max-width="800" persistent>
    <v-card>
      <v-card-title>
        Edit project
      </v-card-title>

      <v-card-text>
        <v-text-field
          label="Title"
          v-model="project.title"
        />

        <v-text-field
          label="Description"
          v-model="project.description"
        />

        <v-text-field
          label="Role"
          v-model="project.role"
        />

        <v-text-field
          label="Date"
          v-model="project.date"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn dark color="#FF8D3B" @click="saveProject">
          Save
        </v-btn>

        <v-btn color="#FF8D3B" outlined @click="closeEditModal">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProjectModal",
  props: ["active", "project"],

  methods: {
    closeEditModal() {
      this.$emit("closeModal");
    },

    async saveProject() {
      try {
        await axios.put(`/api/projects/${this.project._id}`, this.project);
      } catch (e) {
        console.log(e);
      } finally {
        this.closeEditModal();
      }
    }
  }

}
</script>

<style scoped>

</style>
