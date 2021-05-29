<template>
  <div class="shop NueMontreal">

    <br/><br/>
    <p class="shop--route NueMontreal">
      <nuxt-link class="shop--routeLink" to="/"> HOME > </nuxt-link>
      <nuxt-link class="shop--routeLink" to="/shop"> SHOP > </nuxt-link>
       {{ product.title }}
    </p><br/>

    <div class="shop--items">
      <div class="shop__img">
        <img class="preview" :src="product.url" />
      </div>

      <div class="shop__details">

        <p class="shop__details--title NeueMontreal-Bold">{{ product.title }}</p>
        <p class="shop__details--price">{{ product.price }}$ CAD</p>
        <div>
          <div class="shop__details--colour">Colour</div>
          <v-select
            :items="product.colours"
            outlined
            label="Select"
          ></v-select>
        </div>

        <div class="counter">
          <v-icon class="counter__sign" @click="number--">mdi-minus</v-icon>
          <v-divider vertical/>
          <div class="counter__num">{{ number }}</div>
          <v-divider vertical/>
          <v-icon class="counter__sign" @click="number++">mdi-plus</v-icon>
        </div><br/>

        <div>
          <v-btn class="shop__details--btn" outlined>ADD TO CARD</v-btn>
          <v-btn class="shop__details--btn" dark color="#FF8D3B">PAY NOW</v-btn>
        </div><br/>

        <p>
          {{ product.description }}
        </p>

        <div>
          <div class="shop__details--txt NeueMontreal-Bold">Desing: </div><div class="shop__details--txt">&nbsp; Santiago Barrera</div><br/>
          <div class="shop__details--txt NeueMontreal-Bold">Size: </div><div class="shop__details--txt">&nbsp; {{ product.size }}</div><br/>
          <div class="shop__details--txt NeueMontreal-Bold">Publication: </div><div class="shop__details--txt">&nbsp; {{ publication }}</div><br/>
        </div>

      </div>
    </div>

    <br/><br/>
    <br/><br/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "_id",

  data(){
    return{
      product: {},
      number: 1,
      publication: null,
    }
  },

  async mounted() {
    let request = (
      await axios.get("/api/products/details/" + this.$route.params.id)
    ).data;
    this.product = request.data;

    this.publication = new Date( this.product.publication ).getFullYear();
  }
}
</script>

<style scoped>

.shop{
  width: 80%;
  margin-left: 10%;
}

.shop--items{
  display: flex;
  justify-content: space-between;
}

.shop__img{
  width: 45%;
  margin: 2.5%;
  height: 40rem;
  background-color: #000000;
}

.shop__details{
  width: 45%;
  margin: 2.5%;
}

.shop__details--title{
  font-size: 2.5rem;
}

.shop__details--price{
  color: #ef712f;
  font-size: 1.4rem;
}

.shop__details--colour{
  margin: 1rem 0;
  font-size: .9rem;
}

.shop__details--btn{
  width: 9rem;
  margin-right: 2rem;
}

.shop__details--txt{
  display: inline;
}

.preview{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.shop--route{
  color: #ef712f;
  letter-spacing: .5rem;
  font-size: .8rem;
}

.shop--routeLink{
  color: #000000;
}

.counter{
  width: 8rem;
  display: flex;
  justify-content: space-between;
  border: #1F2020 1px solid;
  border-radius: 50px;
}

.counter__num{
  margin: 0 2rem;
}

.counter__sign{
  width: 2rem;
}

</style>
