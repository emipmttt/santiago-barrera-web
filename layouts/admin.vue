<template>
  <v-app>
    <navigation_drawer />
    <v-main>
      <v-container fluid>
        <Nuxt></Nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import navigation_drawer from "../components/administrative_module/navigation_drawer";
export default {
  components: { navigation_drawer },
};
</script>

<style>
</style>