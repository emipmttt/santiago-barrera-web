<template>
  <div class="preloader" id="preloader_backgroundAnimation">
    <div class="preloader__container">
      <img
        :src="require('~/assets/images/SantiagoBarreraLogo.svg')"
        id="preloader__container--animatedText"
      />
    </div>
    <div id="preloader__animatedCircle" />
  </div>
</template>

<script>
export default {
  name: "preloader",
};
</script>

<style scoped>
.preloader {
  z-index: 100;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #edf2f4;
}

#preloader_backgroundAnimation {
  animation-name: backgroundAnimation;
  animation-duration: 9s;
}

@keyframes backgroundAnimation {
  90% {
    background-color: #edf2f4;
  }
  100% {
    background-color: rgba(237, 242, 244, 0);
  }
}

#preloader__container--animatedText {
  position: relative;
  display: flex;
  animation-name: animatedTex;
  animation-duration: 9s;
  width: 30%;
}

@keyframes animatedTex {
  0% {
    opacity: 0;
  }
  27% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.preloader__container {
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
}

#preloader__animatedCircle {
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
  0% {
    color: #edf2f4;
    transform: scale(1);
    right: -100px;
    top: 0px;
  }
  33% {
    transform: scale(1);
    right: -100px;
    top: 0px;
  }
  35% {
    transform: scale(2);
    right: 100px;
    top: 0px;
  }
  60% {
    transform: scale(2);
    right: 120%;
    top: 0px;
  }
  100% {
    color: #edf2f4;
    transform: scale(2);
    right: 120%;
    top: 0px;
  }
}

@media screen and (max-width: 600px) {
  #preloader__animatedCircle {
    height: 75px;
    width: 75px;
  }
}
</style>
