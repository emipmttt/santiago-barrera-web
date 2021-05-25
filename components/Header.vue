<template>
  <v-app-bar
    :dark="orangeHeader"
    :color="orangeHeader ? '#ff6700' : '#edf2f4'"
    app
    elevate-on-scroll
  >
    <!-- <v-app-bar-nav-icon class="d-xs-flex d-md-none" /> -->
    <template v-if="showAnimation">
      <preloader v-if="isVisible" />
    </template>

    <v-spacer class="d-none d-md-flex" />
    <v-toolbar-items class="d-none d-md-flex NueMontreal">
      <v-btn to="/projects" text plain :ripple="false"> WORK </v-btn>
      <v-btn to="/about" text plain :ripple="false"> ABOUT </v-btn>
      <v-btn to="/contact" text plain :ripple="false"> CONTACT </v-btn>

      <v-btn to="/journal" text plain :ripple="false"> JOURNAL </v-btn>

      <v-btn to="/shop" text plain :ripple="false"> SHOP </v-btn>
      <v-btn text plain :ripple="false" disabled> </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-btn text plain :ripple="false" class="NueMontreal">
      AVAILABLE TO WORK

      <img
        :src="require('@/assets/images/bg-orange.png')"
        :class="{ 'filter-wb': !settings.availableToWork }"
        class="available-to-work-circle"
      />
    </v-btn>

    <v-spacer class="d-none d-md-flex" />

    <v-btn to="/" text class="button_app_style" plain :ripple="false">
      <img
        :src="require('@/assets/images/SantiagoBarreraLogo.png')"
        width="100  "
      />
    </v-btn>
  </v-app-bar>
</template>

<script>
import getSettings from "../middleware/getSettings";
import Preloader from "./preloader";

export default {
  name: "Header",
  components: { Preloader },

  data: () => ({
    isVisible: true,
    showAnimation: process.env.SHOW_ANIMATION ? true : false,
    settings: {},
  }),

  computed: {
    orangeHeader() {
      return this.$route.path == "/about";
    },
  },

  methods: {
    async getAvailableToWorkData() {
      this.settings = (await getSettings())[0];
      console.log("this.settings", this.settings);
    },
  },

  mounted() {
    this.getAvailableToWorkData();
    setTimeout(() => {
      this.isVisible = false;
    }, 5500);
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

.filter-wb {
  filter: grayscale(1);
}

.available-to-work-circle {
  width: 40px;
}
</style>
