<template>
  <div class="container NueMontreal">
    <div class="login">
      <div class="login__left NeueMontreal-Bold">
        <div>
          SANTIAGO
          <br/>
          BARRERA
        </div>
      </div>

      <div class="form">
        <v-form class="fom--body">
          <p class="form__Title NeueMontreal-Bold">Login</p>
          <v-text-field
            color="#FF8D3B"
            label="Email"
          />
          <v-text-field
            class="form__field"
            color="#FF8D3B"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn
            class="form__btn--1"
            color="#FF8D3B"
            dark
            elevation="4"
            block
          >Log In</v-btn>

          <v-btn
            color="#FF8D3B"
            dark
            text
            block
          >Recover Password</v-btn>

        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      show1: false,
      password: '',
    }
  }
}
</script>

<style scoped>

.login{
  display: flex;
  justify-content: space-between;
  width: 60%;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);
  margin: 14.5vh auto auto;
  height: 70vh;
  border-radius: 5px;
}

.login__left{
  width: 50%;
  background: #FF8D3B;
  color: #FFFEFE;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.fom--body{
  width: 100%;
}

.form{
  width: 50%;
  padding: 10%;
  display: flex;
  align-items: center;
}

.form__Title{
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.form__field{
  margin-bottom: 2rem;
}

.form__btn--1{
  margin: 1rem 0;
}

.form__btn--2{
  display: flex;
  justify-content: space-between;
}

</style>
