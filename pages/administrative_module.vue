<template>
  <div >
    <navigation_drawer/>

    <div class="adminModule NueMontreal">

      <div class="adminModule__top">
        <div class="adminModule__top--module">
          <p class="adminModule__top--title NeueMontreal-Bold">Users</p>
          <v-btn
            color="#FF8D3B"
            dark
            elevation="4"
          >
            <v-icon>mdi-plus</v-icon>
            Add User
          </v-btn>
        </div>

        <div class="adminTable">

          <v-simple-table class="top">
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">

                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Email
                </th>
                <th class="text-left">
                  Date of Birth
                </th>
                <th class="text-left">
                  Country
                </th>
                <th class="text-left">
                  Gender
                </th>
                <th class="text-left">
                  Permissions
                </th>
                <th class="text-left"></th>
              </tr>
              </thead>

              <tbody>
              <tr
                v-for="item in Users"
                :key="Users.Name"
              >
                <td>
                  <v-avatar
                    color="primary"
                    size="36"
                  ></v-avatar>
                </td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.dateBorn}}</td>
                <td>{{item.state}}</td>
                <td>{{item.gender}}</td>
                <td>{{item.permissions}}</td>
                <td>
                  <v-icon color="#FF8D3B">
                    mdi-pencil
                  </v-icon>
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>

        </div>
      </div>

      <div class="adminTable">
        <v-simple-table class="top">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">

              </th>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Email
              </th>
              <th class="text-left">
                Date of Birth
              </th>
              <th class="text-left">
                Country
              </th>
              <th class="text-left">
                Gender
              </th>
              <th class="text-left">
                Permissions
              </th>
              <th class="text-left"></th>
            </tr>
            </thead>

            <tbody>
            <tr
              v-for="item in Users"
              :key="Users.Name"
            >
              <td>
                <v-avatar
                  color="primary"
                  size="36"
                ></v-avatar>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.dateBorn}}</td>
              <td>{{item.state}}</td>
              <td>{{item.gender}}</td>
              <td>{{item.permissions}}</td>
              <td>
                <v-icon color="#FF8D3B">
                  mdi-pencil
                </v-icon>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>

      </div>
    </div>
  </div>
</template>

<script>
import Navigation_drawer from "../components/administrative_module/navigation_drawer";

export default {
  name: "administrative_module",
  components: {Navigation_drawer},
  data(){
    return {
      Users:[
        {
          name: 'Name User',
          email: 'User@gmail.com',
          dateBorn: '00/00/0000',
          state: "Germany",
          gender: "Male",
          permissions: "all"
        },
        {
          name: 'Name User',
          email: 'User@gmail.com',
          dateBorn: '00/00/0000',
          state: "Germany",
          gender: "Male",
          permissions: "all"
        },
        {
          name: 'Name User',
          email: 'User@gmail.com',
          dateBorn: '00/00/0000',
          state: "Germany",
          gender: "Male",
          permissions: "all"
        }
      ]
    }
  }
}
</script>

<style scoped>

.adminModule{
  display: flex;
  justify-content: space-between;
}

.adminModule__top{
  width: 80%;
  padding: 3%;
}

.adminModule__top--title{
  font-size: 1.5rem;
}

.adminModule__top--module{
  display: flex;
  justify-content: space-between;
}

.adminTable{
  width: 100%;
}

.top{
  background: #EDF2F4;
}

</style>
