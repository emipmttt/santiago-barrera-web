<template>
  <v-navigation-drawer
    app
    dark
    permanent
    color="#FF8D3B"
    class="NeueMontreal-Bold"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="bar__title">
          <img :src="require('~/assets/images/SantiagoBarreraLogoWhite.svg')" />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon> mdi-store </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon> mdi-exit-to-app </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigation_drawer",
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.bar__title {
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
