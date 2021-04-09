<template>
  <div>
    <div class="dataProject">
      <div class="dataProject--block">
        <div class="dataProject--title NeueMontreal-Bold">Name of Project</div>
        <div class="dataProject--txt NueMontreal">{{ nameProject }}</div>
      </div>
      <div class="dataProject--block">
        <div class="dataProject--title NeueMontreal-Bold">Role</div>
        <div class="dataProject--txt NueMontreal">{{ role }}</div>
      </div>
      <div class="dataProject--block">
        <div class="dataProject--title NeueMontreal-Bold">Date</div>
        <div class="dataProject--txt NueMontreal">{{ date }}</div>
      </div>
    </div>

    <div class="dataProject__globalName Hatton">
      {{ nameProject }}
    </div>
  </div>
</template>

<script>
export default {
  name: "dataProject",
  props:{
    nameProject: String,
    role: String,
    date: String
  }
}
</script>

<style scoped>

.dataProject{
  display: flex;
  justify-content: space-between;
  font-size: .7rem;
  margin: 32vh 35% 32vh 10%;
}

.dataProject--block{
  width: 20%;
}

.dataProject__globalName{
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  margin: .5rem 1px 1rem;
}

</style>
