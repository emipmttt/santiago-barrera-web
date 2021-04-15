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

    <template>
      <h1 class="text-center mt-10 Hatton-Light">¡Hi! No projects :( yet</h1>
    </template>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";

export default {
  name: "projects",

  data: () => ({
    projects: [],
  }),

  // async mounted() {
  //   // await this.getAllProjects();
  // },

  components: {
    PortfolioItem,
  },

  methods: {
    async getAllProjects() {
      const response = await fetch("/api/projects");
      const result = await response.json();
      this.projects = result.data;
      console.log(this.projects);

      /*const response_create = await fetch('/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          title: "un titulo",
          description: "bonis :D",
          role: "uno roll amigo",
          date: Date.now(),
          url: "hhoeofe/",
          content: []
        })
      });

      const data_create = await response_create.json();

      console.log(data_create)*/
    },
  },
};
</script>

<style scoped>
</style>
