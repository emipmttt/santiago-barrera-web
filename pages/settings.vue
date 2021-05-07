<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Settings</h1></div>
    </div>

    <div class="settingContainer">
      <div class="settingContainer--titles">
        <div>Available to work</div>
        <v-switch
          v-model="allSettings.availableToWork"
          @change="changeAvailableToWork($event)"
        />
      </div>
      <v-divider/>
      <br/>

      <div class="settingContainer--titles">
        <div>
          Words
        </div>
        <add-words :settings="allSettings"/>
      </div>

      <div>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
            <tr v-for="item in allSettings.words">
              <td>{{ item }}</td>

              <td>
                <v-btn @click="deleteWord(item)">
                  <v-icon color="#FF8D3B">mdi-delete</v-icon>
                </v-btn>
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
import getSettings from "../middleware/getSettings";
import addWords from "~/components/admin_settings/addWord";
import axios from "axios";

export default {
  layout: "admin",
  name: "settings",
  components: { addWords },
  data(){
    return{
      allSettings: {}
    }
  },
  methods:{
    async getSettings() {
      const conf = await getSettings();
      this.allSettings = conf[0];
    },
    async changeAvailableToWork(event) {
      this.allSettings.availableToWork = event

      await axios.put('api/settings/0', this.allSettings);
    },
    async deleteWord(item) {
      const index = this.allSettings.words.indexOf(item);

      this.allSettings.words.splice( index, 1)

      await axios.put('api/settings/0', this.allSettings);
    },
  },
  async mounted() {
    await this.getSettings()
  }
};
</script>

<style scoped>

.settingContainer{
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
}

.settingContainer--titles{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
