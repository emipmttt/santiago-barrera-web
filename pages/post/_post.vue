<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-6">
        <h1 class="NeueMontreal-Bold title--size">
          {{ completeArticle.title }}
        </h1>

        <p class="mt-8">
          Published on {{ completeArticle.createDate }}
        </p>

        <p>
          Article written by
          <span class="text__primary">Santiago Barrera</span>
        </p>

        <div id="content"></div>

        <h3 class="mt-10 NeueMontreal-Bold">
          Share this article
        </h3>

        <div class="mt-4">
          <v-btn icon>
            <v-icon color="black">
              mdi-facebook
            </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="black">
              mdi-twitter
            </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="black">
              mdi-linkedin
            </v-icon>
          </v-btn>
        </div>


        <br/>
        <br/>
        <br/>

        <h3 class="mt-10 NeueMontreal-Bold">
          Thank you for reading
        </h3>

        <p class="mt-4">
          by <span class="text__primary">Santiago Barrera</span>
        </p>


        <v-btn to="/journal" plain :ripple="false" color="#ef712f">
          <v-icon left>mdi-arrow-left</v-icon>
          VIEW ALL ARTICLES
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from "axios";

export default {
  name: "_id",
  data(){
    return{
      completeArticle: {},
    }
  },
  methods:{
    async getArticle() {
      let art = (
        await axios.get("/api/article/details/" + this.$route.params.post)
      ).data;

      this.completeArticle = art.data;
      let d = new Date(this.completeArticle.createdAt);
      let options = { month: "long", year: "numeric"};

      this.completeArticle.createDate = d.toLocaleString ( "en-En" ,options);

      const txt = document.getElementById('content');
      txt.innerHTML = this.completeArticle.body;
    },
  },
  mounted() {
    this.getArticle();
  },
}
</script>

<style scoped>

.title--size {
  font-size: 64px;
}

.text__primary {
  color: #ef712f;
}

</style>
