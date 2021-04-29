<template>
  <div class="body--background-primary">
    <v-container>
      <v-row class="flex-column-reverse flex-md-row">
        <v-col class="col-md-4 col__image_background">
          <p class="Hatton-Light text--vertical">
            SANTIAGO <br />
            BARRERA
          </p>
        </v-col>

        <v-col class="col-md-8 px-6">
          <v-container>
            <v-row>
              <v-col class="d-flex justify-space-between align-center">
                <h3 class="Hatton-Light title__font">ABOUT ME</h3>
              </v-col>
            </v-row>

            <v-row justify="center" class="mt-10">
              <v-col class="col-md-8">
                <h2 class="white--text text__title">
                  Graphic <br />
                  Designer
                </h2>

                <h2 class="white--text mt-4">(2018 - present)</h2>

                <h2 class="white--text mt-10">Profile</h2>

                <p class="white--text NueMontreal mt-4">
                  Santiago is a student passionate about design and art.
                  Currently in his third year of Graphic Design at George Brown
                  College. In his opinion, the most exciting and essential part
                  is always to learn new skills that can be meticulously
                  executed in designs. The use of colour and contrast are his
                  favourite subjects. Santiago is originally from Colombia and
                  speaks three languages, Spanish, Portuguese and English and in
                  the process of learning French! I lived in more than four
                  countries (Colombia, Ecuador, Brazil and Canada), a culture,
                  design&art and knowledge lover.
                </p>

                <h2 class="white--text mt-10 mb-4">Contact</h2>

                <a
                  class="white--text NueMontreal ma-0"
                  href="https://www.linkedin.com/in/santiago-barrera-design/"
                  >Linkedin</a
                ><br />
                <a
                  class="white--text NueMontreal ma-0"
                  href="https://www.behance.net/santiagobarrera"
                  >Behance</a
                ><br />
                <a
                  class="white--text NueMontreal ma-0"
                  href="https://www.instagram.com/santiagobarrera.design/"
                  >Instagram</a
                ><br />
                <a
                  class="white--text NueMontreal ma-0"
                  href="mailto:santiagobarrera.design@gmail.com"
                  >Email</a
                >

                <h2 class="white--text mt-10">Job Experience</h2>

                <p class="white--text NueMontreal mt-4">
                  2019 Present / Graphic Designer Freelance +15 Project
                </p>

                <p class="white--text NueMontreal mt-4">
                  2020 - Present / Designer at Mentores Digital
                </p>

                <h2 class="white--text mt-10">Resume</h2>

                <a
                  target="_blank"
                  class="white--text NueMontreal mt-4 text-decoration-none"
                  href="/pdf/santiago_barrera_resume.pdf"
                  download
                >
                  Download it
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>


<style scoped>
.body--background-primary {
  background-color: #ff6700;
}

.text--vertical {
  font-size: 180px;
  font-weight: 100;
  writing-mode: vertical-rl;
  letter-spacing: 20px;
  line-height: 150px;
  color: white;
  text-align: center;
}

.col__image_background {
  background: url("~assets/images/SantiagoBarrera.png") no-repeat;
  background-size: 100%;
}

.title__font {
  color: white;
  font-weight: normal;
}

.text__title {
  font-size: 64px;
}

.text__style {
  font-size: 12px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .text--vertical {
    font-size: 140px;
    margin: 0;
  }
}
</style>
