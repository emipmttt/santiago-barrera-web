<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Users</h1></div>
     
    </div>
    <list-users/>
  </div>
</template>

<script>
import Create from "~/components/admin_projects/Create.vue";
import axios from "axios";
import ListUsers from "../components/admin_users/listUsers";
export default {
  layout: "admin",
  name: "administrative_module",
  components: {ListUsers, Create },
  async mounted() {
    console.log()
  }
};
</script>
