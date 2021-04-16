<template>
  <div>

    <navigation-bar
      :title="project.title"
      :index="1"
    />

    <data-project
      :name-project="project.title"
      :role="project.role"
      :date="new Date(project.date).toLocaleDateString()"
    />

    <img
      v-if="project.content"
      :src="project.content[0].content"
      class="project__img"
    />

    <div class="project__txt NueMontreal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque mollitia nemo obcaecati optio quae quasi quibusdam quis tempora tempore? Accusamus architecto asperiores consectetur ex, incidunt officia pariatur saepe ullam.
    </div>

    <!-- <marquee-project :images="images" /> -->
  </div>
</template>

<script>
import NavigationBar from "../../components/projectPage/NavigationBar";
import DataProject from "../../components/projectPage/dataProject";
import MarqueeProject from "../../components/projectPage/marqueeProject";
import axios from "axios";

export default {
  name: "project",
  components: { MarqueeProject, DataProject: DataProject, NavigationBar },
  data() {
    return {
      project:{},
      nameP: ""
    }
  },
  async mounted() {
    var request = (await axios.get("/api/projects/details/" + this.$route.params.id)).data
    this.project = request.data

    console.log(this.project)
  }
};
</script>

<style scoped>
.project__img {
  width: 100%;
}

.project__txt {
  margin: 15% 20% 15%;
  font-size: 1.5rem;
  line-height: 2.5rem;
}

.project__img--body {
  width: 70%;
  margin: 0 15%;
}
</style>
