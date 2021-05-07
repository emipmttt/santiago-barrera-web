<template>
  <div>
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
            <v-btn :disabled="loading" @click="rebuildScraping(project._id)">
              <v-icon color="#FF8D3B">mdi-reload</v-icon>
            </v-btn>

            <v-btn :disabled="loading" @click="openEditModal(project)">
              <v-icon color="#FF8D3B">
                mdi-pencil
              </v-icon>
            </v-btn>

            <v-btn :disabled="loading" @click="deleteProject(project._id)">
              <v-icon color="#FF8D3B">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

    <EditProjectModal
      :active="active"
      :project="projectSelected"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import getProjects from "../../middleware/getProjects";
import EditProjectModal from "./EditProjectModal";
export default {
  components: {EditProjectModal},
  data() {
    return {
      projects: [],
      loading: false,
      active: false,
      projectSelected: {}
    };
  },
  methods: {
    async getProjects_() {
      const projects = await getProjects();
      this.projects = [];
      this.projects = projects;
    },

    openEditModal(project) {
      this.active = true;
      this.projectSelected = {...project};
    },

    closeModal() {
      this.active = false;
      this.getProjects_();
    },

    findFirstImage(content) {
      const element = content.find((element) => {
        return element.type == "IMAGE";
      });

      if (element) {
        return element.content;
      }
    },

    async deleteProject(id) {
      await axios.delete("/api/projects/" + id);
      await this.getProjects_();
    },

    async rebuildScraping(id) {
      this.loading = true;
      await axios.put("/api/projects/rebuild-scraping/" + id);
      await this.getProjects_();
      this.loading = false;
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
