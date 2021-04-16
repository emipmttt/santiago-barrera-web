<template>
  <v-app-bar color="#edf2f4" app elevate-on-scroll>
    <v-app-bar-nav-icon class="d-xs-flex d-md-none" />

    <preloader v-if="isVisible" />

    <v-spacer class="d-none d-md-flex" />
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn @click="$router.push('/')" text plain :ripple="false">
        WORK
      </v-btn>

      <v-btn @click="$router.push('/about')" text plain :ripple="false">
        ABOUT
      </v-btn>

      <v-btn text plain :ripple="false"> CONTACT </v-btn>

      <v-btn text plain :ripple="false"> JOURNAL </v-btn>

      <v-btn text plain :ripple="false"> SHOP </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-btn text class="d-none d-md-flex"> AVAILABLE TO WORK </v-btn>

    <v-spacer class="d-none d-md-flex" />

    <v-btn text class="button_app_style Hatton-Light" plain :ripple="false">
      SANTIAGO <br />
      BARRERA
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
