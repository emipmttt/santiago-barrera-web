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
            id="email"
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
            id="password"
          ></v-text-field>

          <v-btn
            class="form__btn--1"
            color="#FF8D3B"
            dark
            elevation="4"
            block
            @click="validateUser()"
          >Log In</v-btn>

          <v-btn
            color="#FF8D3B"
            dark
            text
            block
          >Recover <br/> Password</v-btn>

        </v-form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import { mapMutations } from 'vuex'


export default {
  name: "login",
  data () {
    return {
      show1: false,
      password: '',
    }
  },
  methods:{
    async validateUser() {
      const user = {
        username: document.getElementById("email").value,
        password: document.getElementById("password").value
      }

      if (!(await axios.post("/login", {user})) === false){
       // this.$router.push("/en/administrative_module");

        this.$store.commit( 'sessionActive' , user)

      }else{
        console.log("nope")
      }
    },
    ...mapMutations({
      sessionActive: 'sessionActive'
    })
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
  font-size: 300%;
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

@media screen and (max-width: 850px) {
  .login{
    width: 80%;
  }
}

@media screen and (max-width: 650px) {
  .login{
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);
    margin: 14.5vh auto auto;
    height: 70vh;
    border-radius: 5px;
  }

  .login__left{
    width: 100%;
    font-size: 150%;
    padding: 5%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .form{
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
  }

}

</style>
