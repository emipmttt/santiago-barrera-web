<template>
  <v-card
    width="20%"
    height="100vh"
    elevation="0"
  >
    <v-navigation-drawer
      dark
      permanent
      color="#FF8D3B"
      class="NeueMontreal-Bold"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="bar__title">
            Santiago <br/>Barrera
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-account-multiple
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-store
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>
              mdi-bookmark
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tips</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "navigation_drawer"
}
</script>

<style scoped>

.bar__title{
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
}

</style>
