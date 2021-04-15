<template>
  <div>
    <navigation-bar :title="nameProject" :index="index" />

    <data-project :name-project="nameProject" :role="role" :date="date" />

    <img v-bind:src="images.firstImage" class="project__img" />

    <div class="project__txt NueMontreal">
      {{ textContent.firstText }}
    </div>

    <img v-bind:src="images.secondImage" class="project__img--body" />
    <img v-bind:src="images.thirdImage" class="project__img--body" />

    <div class="project__txt NueMontreal">
      {{ textContent.secondText }}
    </div>

    <img v-bind:src="images.quarterImage" class="project__img" />

    <div class="project__txt NueMontreal">
      <p>{{ textContent.thirdText }}</p>
      <br />
      <p>{{ textContent.quarterText }}</p>
    </div>

    <img v-bind:src="images.sixthImage" class="project__img--body" />

    <marquee-project :images="images" />
  </div>
</template>

<script>
import NavigationBar from "../../components/projectPage/NavigationBar";
import DataProject from "../../components/projectPage/dataProject";
import MarqueeProject from "../../components/projectPage/marqueeProject";
export default {
  name: "project",
  components: { MarqueeProject, DataProject: DataProject, NavigationBar },
  data() {
    return {
      nameProject: "MILTON GLASER / COLOUR ICON",
      index: "01",
      role: "CREATIVE DIRECTOR & PROJECT LEADER",
      date: "JAN, 2020",
      textContent: {
        firstText:
          "Milton Glaser was among the most celebrated graphic designers in the United States. He has had the distinction of one-man-shows at the Museum of Modern Art and the Georges Pompidou Center. He was selected for the lifetime achievement award of the Cooper Hewitt National Design Museum (2004) and the Fulbright Association (2011).",
        secondText:
          "This project had the objective of reproducing the designer’s style to create a visual identity for a retrospective exhibition using typographic techniques and generating promotional items for the visitors of the exhibition.",
        thirdText:
          "By identifying the style of Milton Glaser, the use of colour and illustration, this idea arose from the major retrospective exhibition, Colour Icon. My promotional idea was to use illustration patterns inside glasses representing how Milton Glaser saw the world and together with his inspirations for his designs.",
        quarterText:
          "The challenge here was to create various patterns and play together with typography, generating beautiful and memorable pieces of design. Also, we had to make promotional items for the visitors and advertising the gallery",
      },
      images: {
        firstImage: require("../../assets/images/Milton_Glaser/MiltonGlaserColourIcon2.png"),
        secondImage: require("../../assets/images/Milton_Glaser/3.png"),
        thirdImage: require("../../assets/images/Milton_Glaser/4.png"),
        quarterImage: require("../../assets/images/Milton_Glaser/Poster_one.png"),
        quintImage: require("../../assets/images/Milton_Glaser/Poster_one.png"),
        sixthImage: require("../../assets/images/Milton_Glaser/pin.png"),

        seventhImage: require("../../assets/images/Milton_Glaser/Totte2.png"),
        eighthImage: require("../../assets/images/Milton_Glaser/ID_CARD.png"),
        ninethImage: require("../../assets/images/Milton_Glaser/Ticketsss.png"),
        tenthImage: require("../../assets/images/Milton_Glaser/Totte_2.png"),
        eleventhImage: require("../../assets/images/Milton_Glaser/ID_CARD_222.png"),
      },
    };
  },
};
</script>

<style scoped>
.project__img {
  width: 100%;
}

.project__txt {
  margin: 15% 20% 15%;
  font-size: 1.5rem;
  line-height: 2.5rem;
}

.project__img--body {
  width: 70%;
  margin: 0 15%;
}
</style>
