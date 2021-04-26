<template>
  <div class="article--container">
    <div class="article__title NeueMontreal-Bold">
      {{ article.title }}
    </div>
    <div class="article__content NueMontreal">
      {{article.content}}
    </div>
  </div>
</template>

<script>
export default {
  name: "itemArticle",
  props:{
    article:{}
  }
}
</script>

<style scoped>

.article--container{
  width: 30%;
  margin-left: 5%;
  margin-top: 3rem;
}

.article__title{
  font-size: 3.4rem;
  line-height: 3.6rem;
  margin-bottom: 1rem;
}

.article__content{
  line-height: 1.3rem;
}

</style>
