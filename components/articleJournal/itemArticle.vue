<template>
  <div class="article--container">
    <nuxt-link :to="`/post/${article._id}`" class="article--containerLink">
      <div class="article__title NeueMontreal-Bold">
        {{ article.title }}
      </div>
      <div
        v-html="article.body.substring(0, 100)"
        class="article__content NueMontreal"
      ></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "itemArticle",
  props: {
    article: {},
  },
};
</script>

<style scoped>
.article--containerLink {
  text-decoration-line: none;
  color: #1f2020;
}

.article--container {
  width: 30%;
  margin-left: 5%;
  margin-top: 3rem;
}

.article__title {
  font-size: 3.4rem;
  line-height: 3.6rem;
  margin-bottom: 1rem;
}

.article__content {
  line-height: 1.3rem;
}
</style>
