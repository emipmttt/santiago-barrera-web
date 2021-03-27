<template>
  <v-app-bar
    color="#edf2f4"
    elevate-on-scroll="2"
    app
  >

    <preloader v-bind="isVisible" v-if="false"/>

    <v-spacer />
    <v-toolbar-items>
      <v-btn text>
        WORK
      </v-btn>

      <v-btn text>
        ABOUT
      </v-btn>

      <v-btn text>
        CONTACT
      </v-btn>

      <v-btn text>
        JOURNAL
      </v-btn>

      <v-btn text>
        SHOP
      </v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-btn text>
      AVAILABLE WORK
    </v-btn>

    <v-spacer />

    <v-btn text style="font-size: 12px; text-align: center; margin-right: 64px">
      SANTIAGO <br>
      BARRERA
    </v-btn>
  </v-app-bar>
</template>

<script>
import Preloader from "./preloader";
export default {
  name: "Header",
  components: {Preloader},

  data: () => ({
    isVisible: true
  }),

  async mounted() {
    setTimeout(this.visible, 8000)
  },

  methods: {
    visible (){
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>

</style>
