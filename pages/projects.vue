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

    fetch("/api/projects/details/6078a4d924c08760c0a316b4")
    .then(r => r.json())
    .then(console.log)

    /*const request = await  fetch('/api/projects/create', {
      method: 'POST',

      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        title: "UN PROYECTO BEHANDE",
        description: "IDK GUY I JUST WANT TO BE FREE",
        role: "DEVELOPER",
        date: 1200020,
        url: "https://www.behance.net/gallery/100458665/Milton-Glaser-Colour-Icon-MoMa-Exhibition",
      })
    });

    const response = await request.json();

    console.log(response);*/
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
