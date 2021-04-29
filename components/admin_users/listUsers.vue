<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Mail</th>
          <th class="text-left">Status</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <v-switch
              v-model="user.active"
              @change="activateAccount(user, $event)"
            ></v-switch>
          </td>
          <td>
            <v-btn @click="deleteUser(user._id)">
              <v-icon color="#FF8D3B">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";
import getUsers from "../../middleware/getUsers";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      const users = await getUsers();
      this.users = [];
      this.users = users;
      console.log(users);
    },

    async activateAccount(user, event) {
      user.active = event;

      await axios.put("/api/user/update/" + user._id, user);
    },

    async deleteUser(id) {
      await axios.delete("/api/user/delete/" + id);
      await this.getUsers();
    },
  },
  async mounted() {
    await this.getUsers();
  },
};
</script>

<style scoped>
</style>
