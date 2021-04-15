<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">Title</th>
          <th class="text-left">Date</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project._id">
          <td>
            <img class="preview" :src="findFirstImage(project.content)" />
          </td>
          <td>{{ project.title }}</td>
          <td>{{ new Date(project.date).toLocaleDateString() }}</td>
          <td>
            <v-btn @click="deleteProject(project._id)">
              <v-icon color="#FF8D3B">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";
import getProjects from "../../middleware/getProjects";
export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async getProjects_() {
      const projects = await getProjects();
      this.projects = projects;
    },

    findFirstImage(content) {
      return content.find((element) => {
        return element.type == "IMAGE";
      }).content;
    },

    async deleteProject(id) {
      await axios.delete("/api/projects/" + id);
      await this.getProjects_();
    },
  },
  async mounted() {
    await this.getProjects_();
  },
};
</script>

<style>
.preview {
  width: 200px;
}
</style>