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
          <a href="">BEHANCE</a>
          <br />
          <a href="">INSTAGRAM</a>
          <br />
          <a href="">LINKEDIN</a>
        </div>
        <div style="flex: 1">
          <h3>
            Santiago <br />
            Barrera
          </h3>
        </div>
      </div>
    </div>
    <div class="footer__row text-center">
      <a href="mailto:santiagobarrera.design@gmail.com">
        <b>SANTIAGOBARRERA.DESIGN@GMAIL.COM</b>
      </a>

      <nav class="nav mt-9">
        <a href="">WORK</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
        <a href="">JOURNAL</a>
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