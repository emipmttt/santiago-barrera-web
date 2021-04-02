<template>
  <div>
    <v-btn
      depressed
      rounded
      block
      class="button__base"
    >
      <slot></slot>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: "ButtonApp"
}
</script>

<style scoped>

.button__base {
  border: 0.25px solid #707070;
  font-family: 'Hatton-Light', serif;
  line-height: normal;
  font-weight: bold;
}

</style>
