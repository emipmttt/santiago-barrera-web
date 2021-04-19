<template>
  <v-app-bar
    :dark="orangeHeader"
    :color="orangeHeader ? '#ff6700' : '#edf2f4'"
    app
    elevate-on-scroll
  >
    <!-- <v-app-bar-nav-icon class="d-xs-flex d-md-none" /> -->

    <preloader v-if="isVisible" />

    <v-spacer class="d-none d-md-flex" />
    <v-toolbar-items class="d-none d-md-flex NueMontreal">
      <v-btn to="/" text plain :ripple="false"> WORK </v-btn>
      <v-btn to="/about" text plain :ripple="false"> ABOUT </v-btn>
      <v-btn to="/contact" text plain :ripple="false"> CONTACT </v-btn>

      <v-btn text plain :ripple="false" disabled> JOURNAL </v-btn>

      <v-btn text plain :ripple="false" disabled> SHOP </v-btn>
      <v-btn text plain :ripple="false" disabled> </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-btn text plain :ripple="false" class="NueMontreal">
      AVAILABLE TO WORK
    </v-btn>

    <v-spacer class="d-none d-md-flex" />

    <v-btn text class="button_app_style" plain :ripple="false">
      <img
        :src="require('@/assets/images/SantiagoBarreraLogo.png')"
        width="100  "
      />
    </v-btn>
  </v-app-bar>
</template>

<script>
import Preloader from "./preloader";
export default {
  name: "Header",
  components: { Preloader },

  data: () => ({
    isVisible: true,
  }),

  computed: {
    orangeHeader() {
      return this.$route.path == "/about";
    },
  },

  async mounted() {
    setTimeout(this.visible, 7000);
  },

  methods: {
    visible() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.button_app_style {
  font-size: 12px;
  text-align: center;
  margin-right: 64px;
}

@media screen and (max-width: 600px) {
  .button_app_style {
    margin: 0;
  }
}
</style>
