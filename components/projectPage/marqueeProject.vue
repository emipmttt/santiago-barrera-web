<template>
  <div class="marqueeProject">

    <div class="marqueeProject__firstModule">
      <img :src="images.seventhImage" class="marqueeProject__Module--img"/>
      <img :src="images.eighthImage" class="marqueeProject__Module--img"/>
      <img :src="images.ninethImage" class="marqueeProject__Module--img"/>
    </div>
    <div class="marqueeProject__secondModule">
      <img :src="images.tenthImage" class="marqueeProject__Module--img--large"/>
      <img :src="images.eleventhImage" class="marqueeProject__Module--img"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "marqueeProject",
  props:{
    images : Object
  }
}
</script>

<style scoped>

.marqueeProject{
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 15%;
  margin-right: 15%;
}

.marqueeProject__firstModule{
  width: 50%;
  margin-right: .8rem;
}

.marqueeProject__Module--img{
  width: 100%;
  margin-bottom: 1.2rem;
}

.marqueeProject__secondModule{
  width: 50%;
  margin-left: .8rem;
}

.marqueeProject__Module--img--large{
  width: 100%;
  margin-bottom: 1.2rem;
}

</style>
