<template>
  <v-row class="mt-8">
    <v-col class="col-md-12 img-bg py-6">
      <h1 class="Hatton-Light light">
        I’M SANTIAGO BARRERA, <br>
        A COLUMBIAN GRAPHIC <br>
        DESIGNER WITH A FOCUS <br>
        ON EDITORIAL DESIGN <br>
        & BRANDING.
      </h1>

      <h3 class="mt-4 NueMontreal" style="font-weight: 100">
        DESIGN & ART LOVER. I ALSO LOVE <span class="super-text NeueMontreal-Bold">{{ words[index] }}</span>
      </h3>
    </v-col>

    <v-col class="col-12 d-flex justify-end mt-4">
      <div>
        <p class="connect-item NeueMontreal-Bold super-text mb-4">CONNECT:</p>
        <p class="connect-item NueMontreal">BEHANCE</p>
        <p class="connect-item NueMontreal">INSTAGRAM</p>
        <p class="connect-item NueMontreal">LINKEDIN</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {

  data: () => ({
    index: 0,
    words: ["CREATE", "CREATE", "AWESOME", "LOVE", "ROSE"]
  }),

  async mounted() {
    // USANDO SERVER
    const request = await fetch('/api/magia', {
      method: 'POST'
    });
    const response = await request.json();
    console.log(response);

    this.randomIndex();
  },

  methods: {
    randomIndex() {
      this.index = Math.floor((Math.random() * (this.words.length - 1 + 1)) + 1);
      console.log(this.index)
    }
  }
}
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
</style>
