<template>
  <div id="index" class="index">
    <v-container>
      <v-row class="mt-0 mt-md-8">
        <v-col class="col-md-12 img-bg py-6">
          <h1 class="Hatton-Light light">
            I’M SANTIAGO BARRERA, <br />
            A COLUMBIAN GRAPHIC <br />
            DESIGNER WITH A FOCUS <br />
            ON EDITORIAL DESIGN <br />
            & BRANDING.
          </h1>

          <h3 class="mt-4 NueMontreal" style="font-weight: 100">
            DESIGN & ART LOVER. I ALSO LOVE
            <span class="super-text NeueMontreal-Bold">{{ words[index] }}</span>
          </h3>
        </v-col>

        <v-col class="col-12 d-flex justify-md-end mt-4">
          <div>
            <p class="connect-item NeueMontreal-Bold super-text mb-4">
              CONNECT:
            </p>
            <a
              href="https://www.behance.net/santiagobarrera"
              target="_blank"
              class="connect-item NueMontreal"
              >BEHANCE</a
            >
            <a
              href="https://www.instagram.com/santiagobarrera.design/"
              target="_blank"
              class="connect-item NueMontreal"
              >INSTAGRAM</a
            >
            <a
              href="https://www.linkedin.com/in/santiago-barrera-design/"
              target="_blank"
              class="connect-item NueMontreal"
              >LINKEDIN</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <p class="Hatton title_careful" style="font-weight: 100">
      A CARFUL SELECTION OF MY WORK
    </p>

    <template v-if="projects.length > 0">
      <PortfolioItem
        v-for="(project, index) in projects"
        :key="index"
        :index="index"
        :project="project"
      />
    </template>
    <div class="text-center">
      <nuxt-link to="/projects">
        <ButtonApp style="display: inline-block">
          SEE MORE OF MY WORK
        </ButtonApp>
      </nuxt-link>
    </div>

    <!--

    <v-divider class="divider" />
    <PortfolioItem /> -->

    <img src="~assets/images/banner.png" style="width: 100%" class="my-10" />

    <v-container class="mb-15">
      <v-row justify="center">
        <v-col class="col-12 col-md-8">
          <v-row class="d-flex flex-column flex-md-row">
            <v-col class="col-12 col-md-4 text-md-center">
              <h4 class="NeueMontreal-Bold">ABOUT ME</h4>
            </v-col>

            <v-col class="col-12 col-md-8">
              <p class="NueMontreal mb-6">
                Santiago is a student passionate about design and art. Currently
                in his third year of Graphic Design at School of Design in
                George Brown College. According to him, the most exciting and
                important part is to always learn new skills that can be
                meticulously executed in designs, the use of colour and contrast
                are his favourite subjects. Santiago is originally from Colombia
                and speaks three languages, Spanish, Portuguese and English. He
                lived in more than four countries (Colombia, Ecuador, Brazil and
                Canada), a lover of culture, design&art and knowledge.
              </p>
              <nuxt-link to="/about">
                <ButtonApp> READ MORE </ButtonApp></nuxt-link
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import Preloader from "../components/preloader";
import getProjects from "~/middleware/getProjects";

export default {
  components: { Preloader, PortfolioItem },
  data: () => ({
    index: 0,
    words: [
      "I ALSO LOVE COFFEE",
      "CATS",
      "IMAGINE",
      "TYPOGRAPHY",
      "DRAW",
      "DREAM",
      "LEARN",
      "TEACH",
      "THINK",
      "MANGO",
      "DISCOVER",
      "DEVELOP",
      "PAINTING",
      "JOKES",
      "SUSHI",
      "CULTURE",
      "CAIPIRINHA",
      "BEER",
      "MUSEUMS",
      "TRAVEL",
      "PHOTOGRAPHY",
      "MEET PEOPLE",
      "STRAWBERRIES",
    ],
    projects: [],
  }),

  async mounted() {
    this.randomIndex();
    const projects = await getProjects(4);
    this.projects = projects;
  },

  methods: {
    randomIndex() {
      this.index = Math.floor(Math.random() * (this.words.length - 1 + 1) + 1);

      setTimeout(() => {
        this.randomIndex();
      }, 3000);
    },
  },
};
</script>

<style>
.light {
  font-size: 56px;
  font-weight: 100;
  letter-spacing: 5px;
  line-height: normal;
}

.super-text {
  color: #ef712f;
}

.super-santiago-text {
  font-size: 250px;
  text-align: center;
  line-height: 250px;
  letter-spacing: 10px;
}

.img-bg {
  background: url("~assets/images/bg-orange.png") no-repeat;
  background-size: 620px;
  background-origin: content-box;
  background-position-x: right;
  background-position-y: center;
}

.connect-item {
  font-size: 14px;
  margin: 4px !important;
  line-height: normal;
  display: block;
  color: #333 !important;
}

.title_careful {
  text-align: center;
  margin-top: 14vh;
}

.divider {
  width: 90%;
  display: flex;
  margin-left: 5%;
}

@media screen and (max-width: 600px) {
  .light {
    font-size: 2em;
  }

  .img-bg {
    background-size: 420px;
    background-position-x: initial;
  }
}
</style>
