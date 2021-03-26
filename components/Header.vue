<template>
  <v-app-bar
    color="#edf2f4"
    elevation="0"
    app
  >
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
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
