<template>
  <div>
    <div class="navigateBar">
      <div class="navigateBar__Back">
        <img src="~assets/images/BACK.svg" class="navigateBar__Back--img"/>
        <p class="navigateBar__Back--txt NueMontreal">BACK</p>
      </div>

      <div  class="navigateBar__title Hatton-Light">
        <p>CONTACT ME</p>
      </div>

      <div class="navigateBar__name Hatton">
        Santiago<br/>Barrera
      </div>
    </div>

    <div class="contactTitle">
      <img src="~assets/images/bg-orange.png" class="contactTitle__img"/>
      <div class="contactTitle__txt Hatton">
        <p>Santiago<br/>Barrera</p>
      </div>
    </div>

    <div class="contactSubTitle NueMontreal">
      LET'S CREATE SOMETHING<br/>
      WITH VALUE TOGETHER AND <br/>
      HAVE A CUP OF COFFEE
    </div>

    <v-container class="ContactLinks NueMontreal">
      <v-row>
        <v-col>LINKEDIN</v-col>
        <v-col class="ContactLinks__Name">SANTIAGO-BARRERA-DESIGN</v-col>
      </v-row>
      <v-row>
        <v-col>BEHANCE</v-col>
        <v-col class="ContactLinks__Name">SANTIAGOBARRERA</v-col>
      </v-row>
      <v-row>
        <v-col>EMAIL</v-col>
        <v-col class="ContactLinks__Name ContactLinks__Name--mail">SANTIAGOBARRERA.DESIGN@GMAIL.COM</v-col>
      </v-row>
      <v-row>
        <v-col>INSTAGRAM</v-col>
        <v-col class="ContactLinks__Name">SANTIAGOBARRERA.DESIGN</v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

.navigateBar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 5%;
}

.navigateBar__Back:hover{
  cursor: pointer;
}

.navigateBar__Back{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigateBar__Back--img{
  width: 2rem;
}

.navigateBar__Back--txt{
  margin: auto auto auto 2rem;
}

.navigateBar__title{
  font-size: 2rem;
}

.contactTitle{
  display: flex;
  align-items: center;
  margin-left: 10%;
}

.contactTitle__img{
  width: 18rem;
}

.contactTitle__txt{
  font-size: 3rem;
  text-align: center;
}

.contactSubTitle{
  margin-left: 15%;
  font-size: 3.5rem;
  line-height: 3.8rem;
}

.ContactLinks{
  margin-left: 14%;
  font-size: 1.3rem;
  width: 80%;
  margin-top: 6rem;
  margin-bottom: 6rem;
}

@media screen and (max-width: 768px) {
  .contactTitle,{
    margin-left: 0;
  }

  .contactSubTitle{
    margin-left: 1rem;
  }

  .ContactLinks{
    margin-left: 0;
    font-size: 1rem;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {

  .navigateBar{
    width: 96%;
    margin-left: 2%;
  }

  .navigateBar__Back--img{
    width: 1.5rem;
  }

  .navigateBar__Back--txt{
    margin: auto auto auto .5rem;
  }

  .contactTitle{
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .navigateBar__title{
    font-size: 1.5rem;
  }

  .contactTitle__img{
    width: 7rem;
  }

  .contactTitle__txt{
    font-size: 3rem;
    text-align: center;
  }

  .contactSubTitle{
    margin-left: 5%;
    font-size: 2.5rem;
    line-height: 3.8rem;
  }

  .ContactLinks{
    font-size: .7rem;
    width: 80%;
    margin: 6rem 5%;
  }

  .ContactLinks__Name{
    max-width: 50%;
  }
}

@media screen and (max-width: 400px) {
  .contactTitle{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .contactTitle{
    margin-left: 2%;
  }

  .navigateBar__title{
    font-size: 1.4rem;
  }

  .contactTitle__img{
    width: 5rem;
  }

  .contactTitle__txt{
    font-size: 3rem;
    text-align: center;
  }

  .contactSubTitle{
    margin-left: 5%;
    font-size: 2.5rem;
    line-height: 3.8rem;
  }

  .ContactLinks{
    font-size: .7rem;
    width: 80%;
    margin: 6rem 2%;
  }

  .ContactLinks__Name{
    max-width: 50%;
  }

  .ContactLinks__Name--mail{
    font-size: .5rem;
  }

}

</style>
