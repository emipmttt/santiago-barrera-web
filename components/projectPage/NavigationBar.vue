<template>
  <div class="navigateBar">
    <v-btn text class="navigateBar__Back" @click="$router.push('/')">
      <img src="~assets/images/BACK.svg" class="navigateBar__Back--img"/>
      <p class="navigateBar__Back--txt NueMontreal">BACK</p>
    </v-btn>

    <div  class="navigateBar__title Hatton-Light">
      <div class="navigateBar__title--index">{{ index }}/</div>
      <p>{{ title }}</p>
    </div>

    <div class="navigateBar__name Hatton">
      Santiago<br/>Barrera
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props:{
    title: String,
    index: Number
  }
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
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  max-width: 30%;
}

.navigateBar__title--index{
  font-size: .6rem;
  margin-right: 1rem;
}

</style>
