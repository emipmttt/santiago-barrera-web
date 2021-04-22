<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Users</h1></div>
      <div>
        <v-btn to="/" elevation="1">
          HOME
        </v-btn>
      </div>
    </div>
    <List />
  </div>
</template>

<script>
import Create from "~/components/admin_projects/Create.vue";
import List from "~/components/admin_projects/List.vue";
import axios from "axios";
export default {
  layout: "admin",
  name: "administrative_module",
  components: { Create, List },
  async mounted() {
    console.log(await axios.get('api/user/getAllUsers'))
  }
};
</script>
