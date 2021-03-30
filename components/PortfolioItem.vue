<template>
  <div class="mt-15 CardProject">
    <div class="globalCard">
      <div class="DataCard">
        <p class="NueMontreal num">01</p>
        <div>
          <p class="Hatton titleCard">MILTON GLASER <br />COLOR ICON</p>

          <p class="NueMontreal subTitleCard">
            A MAJOR RETROSPECTIVE EXHIBITION
          </p>
        </div>
      </div>

      <div class="AboutCard">
        <p class="NeueMontreal-Bold aboutCardT">ROLE</p>
        <p class="NueMontreal aboutCardC">
          CREATIVE DIRECTOR &<br />PROJECT LEADER
        </p>

        <p class="NeueMontreal-Bold aboutCardT">DATE</p>
        <p class="NueMontreal aboutCardC">JAN, 2020</p>
      </div>
    </div>

    <img src="~assets/images/MiltonGlaserColourIcon.png" class="CardImage" />
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style scoped>
.globalCard {
  width: 60%;
  max-height: 10rem;
  display: flex;
  justify-content: center;
}

.num {
  font-size: 0.8rem;
  align-content: end;
  float: end;
}

.titleCard {
  margin-left: 0;
  font-size: 1.5rem;
  margin-bottom: 0;
}

.subTitleCard {
  font-size: 0.7rem;
  margin-top: 0;
}

.CardProject {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
}

.DataCard {
  display: flex;
  width: 50%;
  text-align: center;
}

.AboutCard {
  width: 20%;
}

.CardImage {
  width: 40%;
  filter: grayscale(100%);
  transition: 0.5s;
}

.CardImage:hover {
  filter: grayscale(0%);
  transition: 0.5s;
}

.aboutCardT {
  font-size: 0.8rem;
}

.aboutCardC {
  font-size: 0.8rem;
}
</style>
