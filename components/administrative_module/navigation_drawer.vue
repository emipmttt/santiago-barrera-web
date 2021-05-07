<template>
  <div>
    <v-app-bar-nav-icon @click="activeDrawer = !activeDrawer" />

    <v-navigation-drawer
      app
      dark
      color="#FF8D3B"
      class="NeueMontreal-Bold"
      v-model="activeDrawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="bar__title">
            <img
              :src="require('~/assets/images/SantiagoBarreraLogo.png')"
              width="200"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <nuxt-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon> mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/admin_users">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon> mdi-account-multiple </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/admin_projects">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon> mdi-store </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/settings">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon> mdi-cog </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/admin_articles">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon> mdi-note</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Articles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

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
  </div>
</template>

<script>
export default {
  name: "navigation_drawer",
  methods: {
    logout() {
      localStorage.removeItem("sb_u");
      this.$router.push("/");
    },
  },
  data() {
    return {
      activeDrawer: true,
    };
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
