<template>
  <div class="container NueMontreal">
    <div class="login">
      <div class="login__left">
        <img :src="require('~/assets/images/SantiagoBarreraLogo.png')" />
      </div>

      <div class="form">
        <v-form class="fom--body">
          <p class="form__Title NeueMontreal-Bold">Register</p>
          <v-text-field
            :disabled="loading"
            color="#FF8D3B"
            label="Name"
            v-model="name"
          />
          <v-text-field
            :disabled="loading"
            color="#FF8D3B"
            label="Email"
            v-model="email"
          />
          <v-text-field
            :disabled="loading"
            class="form__field"
            color="#FF8D3B"
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-btn
            class="form__btn--1"
            color="#FF8D3B"
            dark
            elevation="4"
            block
            @click="createUser()"
            >Register
          </v-btn>

          <v-btn @click="$router.push('/login')" color="#FF8D3B" dark text block
            >Login
          </v-btn>
        </v-form>

        <v-dialog v-model="messageModal" width="500">
          <v-card>
            <v-card-title class="headline">
              {{ message }}
            </v-card-title>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="messageModal = false">
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="registerSuccess" max-width="600">
          <v-card>
            <v-card-title>
              Info
            </v-card-title>

            <v-card-text>
              Contacta con un administrador para activar tu cuenta
            </v-card-text>

            <v-card-actions>
              <v-spacer />

              <v-btn depressed color="primary" @click="registerEnd">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "register",
  data() {
    return {
      registerSuccess: false,
      showPassword: false,
      password: "",
      name: "",
      email: "",
      loading: false,

      message: "",
      messageModal: false,
    };
  },
  methods: {
    async createUser() {
      this.loading = true;
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      const createUserQuery = (await axios.post("/api/user/create", user)).data;

      if (!createUserQuery.ok) {
        this.loading = false;
        this.message = createUserQuery.error;
        this.messageModal = true;
        return;
      }

      this.registerSuccess = true;
    },

    registerEnd() {
      this.registerSuccess = false;
      this.$router.push("/login");
    },

    ...mapMutations({
      sessionActive: "sessionActive",
    }),
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: space-between;
  width: 60%;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);
  margin: auto;
  height: 70vh;
  border-radius: 5px;
}

.login__left {
  width: 50%;
  background: #ff8d3b;
  color: #fffefe;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 300%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.login__left img {
  width: 200px;
}

.fom--body {
  width: 100%;
}

.form {
  width: 50%;
  padding: 10%;
  display: flex;
  align-items: center;
}

.form__Title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.form__field {
  margin-bottom: 2rem;
}

.form__btn--1 {
  margin: 1rem 0;
}

@media screen and (max-width: 850px) {
  .login {
    width: 80%;
  }
}

@media screen and (max-width: 650px) {
  .login {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);
    margin: 14.5vh auto auto;
    height: 70vh;
    border-radius: 5px;
  }

  .login__left {
    width: 100%;
    font-size: 150%;
    padding: 5%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .form {
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
  }
}
</style>
