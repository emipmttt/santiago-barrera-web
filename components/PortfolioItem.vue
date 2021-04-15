<template>
  <div class="mt-15 PortfolioItem">
    <div class="PortfolioItem__container--data">
      <p class="NueMontreal PortfolioItem__container--data--num">
        {{ index }}
      </p>

      <div>
        <p class="Hatton PortfolioItem__container--data--title">
          {{ project.title }}
        </p>

        <p class="NueMontreal PortfolioItem__container--data--subTitle">
          {{ project.description }}
        </p>

        <p>
          <v-icon @click="$router.push('/project')">
            mdi-plus-circle-outline
          </v-icon>
        </p>
      </div>
    </div>

    <div class="PortfolioItem__container">
      <div class="PortfolioItem__container--data--about">
        <div>
          <p
            class="NeueMontreal-Bold PortfolioItem__container--data--about--title"
          >
            ROLE
          </p>
          <p class="NueMontreal PortfolioItem__container--data--about--text">
            {{ project.role }}
          </p>
        </div>

        <div>
          <p
            class="NeueMontreal-Bold PortfolioItem__container--data--about--title"
          >
            DATE
          </p>
          <p class="NueMontreal PortfolioItem__container--data--about--text">
            {{ new Date(project.date).toLocaleDateString() }}
          </p>
        </div>
      </div>

      <div class="PortfolioItem__container--img--top">
        <img
          :src="findFirstImage(project.content)"
          class="PortfolioItem__container--img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: ["index", "project"],
  methods: {
    findFirstImage(content) {
      return content.find((element) => {
        return element.type == "IMAGE";
      }).content;
    },
  },
};
</script>

<style scoped>
.PortfolioItem {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: auto auto 4rem;
}

.PortfolioItem__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-flex-order: 2;
}

.PortfolioItem__container--img--top {
  -ms-flex-order: 1;
}

.PortfolioItem__container--data--num {
  font-size: 0.8rem;
  align-content: end;
  float: end;
}

.PortfolioItem__container--data--title {
  margin-left: 0;
  font-size: 1.5rem;
  margin-bottom: 0;
}

.PortfolioItem__container--data--subTitle {
  font-size: 0.7rem;
  margin-top: 0;
}

.PortfolioItem__container--data {
  display: flex;
  width: 40%;
  text-align: center;
}

.PortfolioItem__container--data--about {
  width: 20%;
}

.PortfolioItem__container--img {
  width: 80%;
  filter: grayscale(100%);
  transition: 0.5s;
  margin-left: 10%;
}

.PortfolioItem__container--img:hover {
  filter: grayscale(0%);
  transition: 0.5s;
}

.PortfolioItem__container--data--about--title {
  font-size: 0.8rem;
}

.PortfolioItem__container--data--about--text {
  font-size: 0.8rem;
}

@media screen and (max-width: 600px) {
  .PortfolioItem {
    width: 96%;
    margin: auto 2% 4rem;
  }

  .PortfolioItem__container--img--top {
    order: 1;
  }
  .PortfolioItem__container--data--about {
    order: 2;
  }

  .PortfolioItem__container {
    display: unset;
    align-items: center;
  }

  .PortfolioItem__container--data--num {
    font-size: 0.6rem;
  }

  .PortfolioItem__container--data--title {
    font-size: 1.3rem;
  }

  .PortfolioItem__container--data--subTitle {
    font-size: 0.7rem;
    margin-top: 0;
  }

  .PortfolioItem__container--data {
    display: flex;
    width: 50%;
    text-align: center;
  }

  .PortfolioItem__container--data--about {
    width: 50%;
    margin-left: 10%;
  }

  .PortfolioItem__container--img--top {
    display: flex;
  }

  .PortfolioItem__container--img {
    width: 80%;
    filter: grayscale(100%);
    transition: 0.5s;
  }

  .PortfolioItem__container--img:hover {
    filter: grayscale(0%);
    transition: 0.5s;
  }

  .PortfolioItem__container--data--about--title {
    font-size: 0.7rem;
  }

  .PortfolioItem__container--data--about--text {
    font-size: 0.7rem;
  }
}
</style>
