<template>
  <div>
    <div  class="navigateBar__title Hatton">
      <p>Journal</p>
    </div>
    <div class="article">

      <div v-for="item in allArticles" :key="item.id">
        <item-article :article="item"/>
      </div>

    </div>
  </div>
</template>

<script>
import ItemArticle from "../components/articleJournal/itemArticle";
import getArticles from "../middleware/getArticles";
export default {
  name: "journal",
  components: {ItemArticle},
  data(){
    return{
      allArticles: {},
    }
  },
  methods:{
    async getAllArticles(){
      this.allArticles = await getArticles();
    }
  },
  mounted() {
    this.getAllArticles();
  },
}
</script>

<style scoped>

.navigateBar__title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.article{
  margin-bottom: 10rem;
}

</style>
