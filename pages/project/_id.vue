<template>
  <div>
    <navigation-bar :title="project.title" :index="1" />

    <data-project
      :name-project="project.title"
      :role="project.role"
      :date="new Date(project.date).toLocaleDateString()"
    />

    <v-container>
      <section
        v-if="project.content"
        style="display: flex; flex-direction: column"
      >
        <template v-for="item in project.content">
          <img
            :key="item._id"
            v-if="item.type == 'IMAGE'"
            :src="item.content"
            width="100%"
          />
          <p :key="item._id" v-else>
            {{ item.content }}
          </p>
        </template>
      </section>
    </v-container>

    <!--  <marquee-project :images="images" /> -->
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
      project: {},
      nameP: "",
    };
  },
  async mounted() {
    var request = (
      await axios.get("/api/projects/details/" + this.$route.params.id)
    ).data;
    this.project = request.data;

    console.log(this.project);
  },
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
