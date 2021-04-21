<template>
  <footer class="footer">
    <div class="footer__row">
      <h1 class="Hatton-Light">
        LET'S CREATE SOMETHING <br />
        WITH VALUE TOGETHER
      </h1>
      <br />
      <div class="nav">
        <div style="flex: 1">
          <h3>CONNECT</h3>
          <a href="https://www.behance.net/santiagobarrera">BEHANCE</a>
          <br />
          <a href="https://www.instagram.com/santiagobarrera.design/"
            >INSTAGRAM</a
          >
          <br />
          <a href="https://www.linkedin.com/in/santiago-barrera-design/"
            >LINKEDIN</a
          >
        </div>
        <div style="flex: 1">
          <img
            :src="require('@/assets/images/SantiagoBarreraLogo.png')"
            width="200"
          />
        </div>
      </div>
    </div>
    <div class="footer__row text-center">
      <a href="mailto:santiagobarrera.design@gmail.com">
        <b>SANTIAGOBARRERA.DESIGN@GMAIL.COM</b>
      </a>

      <nav class="nav mt-9">
        <nuxt-link to="/projects">WORK</nuxt-link>
        <nuxt-link to="/about">ABOUT</nuxt-link>
        <nuxt-link to="/contact">CONTACT</nuxt-link>
        <nuxt-link to="" disabled>JOURNAL</nuxt-link>
        <nuxt-link to="" disabled>SHOP</nuxt-link>
      </nav>
      <!-- WORK ABOUT CONTACT JOURNAL -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  background: #dbdbdb;
  color: #000;
  display: flex;
  padding: 5% 10%;
  justify-content: center;
  align-items: center;

  &__row {
    flex: 1;
  }
}

@media screen and (max-width: 600px) {
  .footer {
    background: #dbdbdb;
    color: #000;
    display: block;
    padding: 5% 10%;
    justify-content: center;
    align-items: center;

    &__row {
      width: 100%;
      margin-bottom: 20%;
    }
  }
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
