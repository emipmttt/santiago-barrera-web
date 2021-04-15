<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Proyectos</h1></div>
      <Create />
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
