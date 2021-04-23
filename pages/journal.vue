<template>
  <div>
    <div  class="navigateBar__title Hatton">
      <p>Journal</p>
    </div>
    <div class="article">
      <item-article :article="article"/>
      <item-article :article="article"/>
      <item-article :article="article"/>
    </div>
  </div>
</template>

<script>
import ItemArticle from "../components/articleJournal/itemArticle";
export default {
  name: "journal",
  components: {ItemArticle},
  data(){
    return{
      article: {
        title: 'Typography as art and chaos',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iste libero nulla! Culpa doloribus, eum incidunt laborum maxime totam vero. Aperiam, aut dolorum earum illum modi omnis possimus quia reprehenderit.'
      }
    }
  }
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
