<template>
  <v-app>
    <payment-header />

    <div class="backgroundPayment">
      <v-main>
        <nuxt />
      </v-main>
    </div>

    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header";
import PaymentHeader from "../components/paymentHeader";
export default {
  components: {PaymentHeader, Header },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,

      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.backgroundPayment{
  background-color: #E9E9E9;
}
</style>
