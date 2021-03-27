<template>

  <div class="container" id="background">
    <div class="animated">
      <p class="text Hatton" id="animatedText">
        Satiago<br/>Barrera
      </p>
    </div>
    <div id="animatedCircle"/>
  </div>

</template>

<script>
export default {
  name: "preloader"
}
</script>

<style scoped>

.container{
  z-index: 100;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100vh;
  background: #EDF2F4;
}


#animatedText{
  position: relative;
  display: flex;
  animation-name: animatedTex;
  animation-duration: 9s;
}

@keyframes animatedTex {
  0%{color: #edf2f4}
  27%{color: #edf2f4}
  30%{color: #000}
  70%{color: #000}
  80%{color: #edf2f4}
  100%{color: rgba(237,242,244,0)}
}

.animated{
  margin: auto;
}

.text{
  left: 70%;
  font-size: 4rem;
}

#animatedCircle{
  height: 100px;
  width: 100px;
  margin: 40vh -100px 0 auto;
  border-radius: 100%;
  background-color: #ef712f;
  animation-name: animation;
  filter: blur(10px);
  animation-duration: 9s;
  animation-timing-function: linear;
  position: relative;
}

@keyframes animation {
  0%{color: #edf2f4; transform: scale(1); right: -100px; top: 0px;}
  33%{transform: scale(1); right: -100px; top: 0px;}
  35%{transform: scale(2); right: 100px; top: 0px;}
  60%{transform: scale(2); right: 120%; top: 0px;}
  100%{transform: scale(2); right: 120%; top: 0px;}
}

#background{
  animation-name: fund;
  animation-duration: 9s;
}

@keyframes fund {
  90%{background-color: #edf2f4}
  100%{background-color: rgba(237,242,244,0)}
}

</style>
