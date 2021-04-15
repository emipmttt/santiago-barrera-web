<template>
  <div>
    <v-container class="mt-8">
      <v-row>
        <v-col class="col-md-12">
          <h4 class="Hatton-Light text-center">
            A CARFUL SELECTION OF MY WORK.
          </h4>
        </v-col>
      </v-row>
    </v-container>

    <template v-if="projects.length > 0">
      <PortfolioItem
        v-for="(project, index) in projects"
        :key="index"
        :index="index"
        :project="project"
      />
    </template>

    <template v-else>
      <h1 class="text-center mt-10 Hatton-Light">No projects yet :(</h1>
    </template>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import getProjects from "~/middleware/getProjects";

export default {
  name: "projects",

  data: () => ({
    projects: [],
  }),

  async mounted() {
    const projects = await getProjects();
    this.projects = projects;
  },

  // async mounted() {
  //   // await this.getAllProjects();
  // },

  components: {
    PortfolioItem,
  },
};
</script>

<style scoped>
</style>
