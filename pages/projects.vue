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


    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";

export default {
  name: "projects",

  data: () => ({
    projects: []
  }),

  async mounted() {
    await this.getAllProjects();
  },

  components: {
    PortfolioItem
  },

  methods: {
    async getAllProjects() {
      const response = await fetch('/api/projects');
      const data = await response.json();
      console.log(data);

    }
  }
}
</script>

<style scoped>

</style>
