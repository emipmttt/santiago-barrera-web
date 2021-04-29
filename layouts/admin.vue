<template>
  <v-app>
    <navigation_drawer />
    <v-main>
      <v-container v-if="loggedAndActive" fluid>
        <Nuxt></Nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import navigation_drawer from "../components/administrative_module/navigation_drawer";
export default {
  components: { navigation_drawer },
  data() {
    return {
      loggedAndActive: false,
    };
  },
  methods: {
    verifyUser() {
      try {
        let user = JSON.parse(localStorage.getItem("sb_u"));
        if (user.active) {
          this.loggedAndActive = true;
        } else {
          localStorage.removeItem("sb_u");
          this.$router.push("/login");
        }
      } catch (error) {
        localStorage.removeItem("sb_u");
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.verifyUser();
  },
};
</script>

<style>
</style>