<template>
  <v-app>
    <Header />

    <v-main>
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header";
export default {
  components: { Header },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,

      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.v-application {
  background-color: #edf2f4 !important;
}
</style>
