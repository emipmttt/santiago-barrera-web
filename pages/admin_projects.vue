<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Projects</h1></div>
      <div>
        <v-btn to="/" elevation="1">
          HOME
        </v-btn>
        <Create />
      </div>
    </div>
    <List />
  </div>
</template>

<script>
import Create from "~/components/admin_projects/Create.vue";
import List from "~/components/admin_projects/List.vue";
export default {
  layout: "admin",
  name: "administrative_module",
  components: { Create, List },
};
</script>
