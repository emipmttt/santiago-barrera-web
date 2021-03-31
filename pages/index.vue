<template>
  <div id="index">
    <v-container>
      <v-row class="mt-8">
        <v-col class="col-md-12 img-bg py-6">
          <h1 class="Hatton-Light light">
            I’M SANTIAGO BARRERA, <br />
            A COLUMBIAN GRAPHIC <br />
            DESIGNER WITH A FOCUS <br />
            ON EDITORIAL DESIGN <br />
            & BRANDING.
          </h1>

          <h3 class="mt-4 NueMontreal subheader--font-weight">
            DESIGN & ART LOVER. I ALSO LOVE
            <span class="super-text NeueMontreal-Bold">
              {{ words[index] }}
            </span>
          </h3>
        </v-col>

        <v-col class="col-12 d-flex justify-end mt-4">
          <div>
            <p class="connect-item NeueMontreal-Bold super-text mb-4">
              CONNECT:
            </p>
            <p class="connect-item NueMontreal">
              BEHANCE
            </p>
            <p class="connect-item NueMontreal">
              INSTAGRAM
            </p>
            <p class="connect-item NueMontreal">
              LINKEDIN
            </p>
          </div>
        </v-col>

      </v-row>
    </v-container>

    <p class="Hatton title_careful subheader--font-weight">
      A CARFUL SELECTION OF MY WORK
    </p>

    <PortfolioItem />
    <br /><br />
    <v-divider class="divider" />
    <PortfolioItem />

    <p class="super-santiago-text Hatton-Light mt-10">
      SANTIAGO BARRERA
    </p>

    <v-container>
      <v-row justify="center">
        <v-col cols="8" style="position: relative; top: -180px">
          <img src="~assets/images/santiago.jpg" class="img--full-width" />
        </v-col>

        <v-col cols="8">
          <v-row>
            <v-col cols="4">
              <h4 class="NeueMontreal-Bold text--center">
                ABOUT ME
              </h4>
            </v-col>

            <v-col cols="8">
              <p class="NueMontreal">
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
            </v-col>
          </v-row>

          <v-col class="col-md-12 d-flex justify-center mt-10">
            <ButtonApp>
              Read more
            </ButtonApp>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Preloader from "../components/preloader";
import PortfolioItem from "../components/PortfolioItem";
import Footer from "../components/Footer";

export default {
  components: {
    PortfolioItem,
    Preloader,
    Footer
  },
  data: () => ({
    index: 0,
    words: ["CREATE", "CREATE", "AWESOME", "LOVE", "ROSE"],
    isVisible: true,
  }),

  async mounted() {
    // USANDO SERVER
    const request = await fetch("/api/magia", {
      method: "POST",
    });
    const response = await request.json();
    console.log(response);

    this.randomIndex();

    setTimeout(this.visible, 500000000);
  },

  methods: {
    randomIndex() {
      this.index = Math.floor(Math.random() * (this.words.length - 1 + 1) + 1);
      console.log(this.index);
    },
    visible() {
      this.isVisible = !this.isVisible;
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

.text--center {
  text-align: center;
}

.img--full-width {
  width: 100%;
}

.subheader--font-weight {
  font-weight: 100
}
</style>
