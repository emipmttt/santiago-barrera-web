<template>
  <div>
    <!-- <div class="navigateBar">
      <v-btn text class="navigateBar__Back">
        <img src="~assets/images/BACK.svg" class="navigateBar__Back--img" />
        <p class="navigateBar__Back--txt NueMontreal">BACK</p>
      </v-btn>

      <div class="navigateBar__title Hatton-Light">
        <p>CONTACT ME</p>
      </div>

      <div class="navigateBar__name Hatton">Santiago<br />Barrera</div>
    </div> -->

    <div class="contactTitle">
      <img src="~assets/images/bg-orange.png" class="contactTitle__img" />
      <div class="contactTitle__txt Hatton">
        <p>Santiago<br />Barrera</p>
      </div>
    </div>

    <div class="contactSubTitle NueMontreal">
      LET'S CREATE SOMETHING<br />
      WITH VALUE TOGETHER AND <br />
      HAVE A CUP OF COFFEE
    </div>

    <v-container class="ContactLinks NueMontreal">
      <a href="https://www.linkedin.com/in/santiago-barrera-design/">
        <v-row class="ContactLinks--container">
          <v-col>LINKEDIN</v-col>
          <v-col class="ContactLinks__Name">
            <b>SANTIAGO-BARRERA-DESIGN</b>
          </v-col>
        </v-row>
      </a>
      <a href="https://www.behance.net/santiagobarrera">
        <v-row class="ContactLinks--container">
          <v-col>BEHANCE</v-col>
          <v-col class="ContactLinks__Name"> <b>SANTIAGOBARRERA</b> </v-col>
        </v-row>
      </a>
      <a href="mailto:santiagobarrera.design@gmail.com">
        <v-row class="ContactLinks--container">
          <v-col>EMAIL</v-col>
          <v-col class="ContactLinks__Name ContactLinks__Name--mail">
            <b>SANTIAGOBARRERA.DESIGN@GMAIL.COM</b>
          </v-col>
        </v-row>
      </a>
      <a  href="https://www.instagram.com/santiagobarrera.design/">
        <v-row class="ContactLinks--container">
          <v-col>INSTAGRAM</v-col>
          <v-col class="ContactLinks__Name"><b>SANTIAGOBARRERA.DESIGN</b></v-col>
        </v-row>
      </a>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.navigateBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 5%;
}

.navigateBar__Back {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigateBar__Back--img {
  width: 2rem;
}

.navigateBar__Back--txt {
  margin: auto auto auto 2rem;
}

.navigateBar__title {
  font-size: 2rem;
}

.contactTitle {
  display: flex;
  align-items: center;
  margin-left: 10%;
}

.contactTitle__img {
  width: 18rem;
}

.contactTitle__txt {
  font-size: 3rem;
  text-align: center;
}

.contactSubTitle {
  margin-left: 15%;
  font-size: 3.5rem;
  line-height: 3.8rem;
}

.ContactLinks {
  margin-left: 14%;
  font-size: 1.3rem;
  width: 80%;
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.ContactLinks--container{
  color: #333333;
}

@media screen and (max-width: 768px) {
  .contactTitle {
    margin-left: 0;
  }

  .contactSubTitle {
    margin-left: 1rem;
  }

  .ContactLinks {
    margin-left: 0;
    font-size: 1rem;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .navigateBar {
    width: 96%;
    margin-left: 0;
  }

  .navigateBar__Back--img {
    width: 1.5rem;
  }

  .navigateBar__Back--txt {
    margin: auto auto auto 0.5rem;
  }

  .contactTitle {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .navigateBar__title {
    font-size: 1.5rem;
  }

  .contactTitle__img {
    width: 7rem;
  }

  .contactTitle__txt {
    font-size: 3rem;
    text-align: center;
  }

  .contactSubTitle {
    margin-left: 5%;
    font-size: 2.5rem;
    line-height: 3.8rem;
  }

  .ContactLinks {
    font-size: 0.7rem;
    width: 80%;
    margin: 6rem 5%;
  }

  .ContactLinks__Name {
    max-width: 50%;
  }
}

@media screen and (max-width: 400px) {
  .contactTitle {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .contactTitle {
    margin-left: 2%;
  }

  .navigateBar__title {
    font-size: 1.4rem;
  }

  .contactTitle__img {
    width: 5rem;
  }

  .contactTitle__txt {
    font-size: 3rem;
    text-align: center;
  }

  .contactSubTitle {
    margin-left: 5%;
    font-size: 2.5rem;
    line-height: 3.8rem;
  }

  .ContactLinks {
    font-size: 0.7rem;
    width: 80%;
    margin: 6rem 2%;
  }

  .ContactLinks__Name {
    max-width: 50%;
  }

  .ContactLinks__Name--mail {
    font-size: 0.5rem;
  }
}
</style>
