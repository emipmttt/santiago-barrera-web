<template>
  <div>
    <div class="d-flex justify-space-between align-center NueMontreal">
      <div><h1>Articles</h1></div>

      <div>
        <v-btn dark color="#FF8D3B" @click="createArticle">
          CREATE
        </v-btn>
      </div>
    </div>

    <v-simple-table class="mt-4">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Date</th>
            <th class="text-left"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="article in articles" :key="article._id">
            <td>
              {{ article.title }}
            </td>
            <td>
              {{ new Date(article.createdAt).toLocaleDateString() }}
            </td>
            <td>

              <v-btn @click="showArticle(article)">
                <v-icon color="#FF8D3B">
                  mdi-eye
                </v-icon>
              </v-btn>

              <v-btn @click="deleteArticle(article)">
                <v-icon color="#FF8D3B">
                  mdi-delete
                </v-icon>
              </v-btn>

              <v-btn @click="updateArticle(article)">
                <v-icon color="#FF8D3B">
                  mdi-pencil
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <ShowArticleModal
      :active="showActive"
      :article="articleSelected"
      @closeModal="closeModal"
    />

    <update-article-modal
      :active="updateActive"
      :article="articleSelected"
      @closeModal="closeModal"
    />

    <CreateArticleModal
      :active="createActive"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import ShowArticleModal from "../components/admin_articles/ShowArticleModal";
import CreateArticleModal from "../components/admin_articles/CreateArticleModal";
import UpdateArticleModal from "../components/admin_articles/updateArticleModal";

export default {
  components: {UpdateArticleModal, CreateArticleModal, ShowArticleModal},
  layout: "admin",
  name: "admin_articles",

  data: () => ({
    articles: [],
    showActive: false,
    updateActive: false,
    createActive: false,
    articleSelected: {},
  }),

  async mounted() {
    await this.getArticles();
  },

  methods: {
    async getArticles() {
      const request = await axios.get("/api/article");
      this.articles = request.data.data;
    },

    createArticle() {
      this.createActive = true;
    },

    showArticle(article) {
      this.showActive = true;
      this.articleSelected = article;
    },


    updateArticle(article) {
      this.updateActive = true;
      this.articleSelected = article;
    },

    async closeModal() {
      if (this.createActive) await this.getArticles();
      this.showActive = false;
      this.updateActive = false;
      this.createActive = false;
      this.articleSelected = {};
    },

    async deleteArticle(article) {
      await axios.delete(`/api/article/${article._id}`);
      await this.getArticles();
    }
  }
}
</script>

<style scoped>

</style>
