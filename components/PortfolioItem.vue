<template>
  <div class="mt-15 PortfolioItem">
    <div class="PortfolioItem__container">
      <div class="PortfolioItem__container--data">
        <p class="NueMontreal PortfolioItem__container--data--num">01</p>
        <div>
          <p class="Hatton PortfolioItem__container--data--title">MILTON GLASER <br />COLOR ICON</p>

          <p class="NueMontreal PortfolioItem__container--data--subTitle">
            A MAJOR RETROSPECTIVE EXHIBITION
          </p>

          <p>
            <v-icon
              @click=""
            > mdi-plus-circle-outline </v-icon>
          </p>

        </div>
      </div>

      <div class="PortfolioItem__container--data--about">
        <p class="NeueMontreal-Bold PortfolioItem__container--data--about--title">ROLE</p>
        <p class="NueMontreal PortfolioItem__container--data--about--text">
          CREATIVE DIRECTOR &<br />PROJECT LEADER
        </p>

        <p class="NeueMontreal-Bold PortfolioItem__container--data--about--title">DATE</p>
        <p class="NueMontreal PortfolioItem__container--data--about--text">JAN, 2020</p>
      </div>
    </div>

    <img src="~assets/images/MiltonGlaserColourIcon.png" class="PortfolioItem__container--img" />
  </div>
</template>

<script>

export default {
  name: "PortfolioItem",
};
</script>

<style scoped>

.PortfolioItem {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
}

.PortfolioItem__container {
  width: 60%;
  max-height: 10rem;
  display: flex;
  justify-content: center;
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
  width: 50%;
  text-align: center;
}

.PortfolioItem__container--data--about {
  width: 20%;
}

.PortfolioItem__container--img {
  width: 40%;
  filter: grayscale(100%);
  transition: 0.5s;
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
</style>
