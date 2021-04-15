<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div><h1>Proyectos</h1></div>
      <Create />
    </div>
  </div>
</template>

<script>
import Create from "~/components/admin_projects/Create.vue";
export default {
  layout: "admin",
  name: "administrative_module",
  components: { Create },
  data() {
    return {
      Users: [
        {
          name: "Name User",
          email: "User@gmail.com",
          dateBorn: "00/00/0000",
          state: "Germany",
          gender: "Male",
          permissions: "all",
        },
        {
          name: "Name User",
          email: "User@gmail.com",
          dateBorn: "00/00/0000",
          state: "Germany",
          gender: "Male",
          permissions: "all",
        },
        {
          name: "Name User",
          email: "User@gmail.com",
          dateBorn: "00/00/0000",
          state: "Germany",
          gender: "Male",
          permissions: "all",
        },
      ],
    };
  },
};
</script>