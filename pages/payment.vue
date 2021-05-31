<template>
  <div class="body--background-primary NueMontreal">
    <div  class="navigateBar__title Hatton">
      <p>YOUR CART</p><br/>
    </div>

    <div class="payment">
      <br/><br/>
      <p class="payment__title NeueMontreal-Bold">Contact</p>

      <div class="payment__contact">

        <div class="payment__contact--fields">
          <v-text-field
            class="payment__contact--fieldsUni"
            label="First Name"
            solo
            rounded
            dense
          ></v-text-field>

          <v-text-field
            class="payment__contact--fieldsUni"
            label="Last Name"
            solo
            rounded
            dense
          ></v-text-field>
        </div>

        <div class="payment__contact--fields">
          <v-text-field
            class="payment__contact--fieldsUni"
            label="Email"
            solo
            rounded
            dense
          ></v-text-field>

          <v-text-field
            class="payment__contact--fieldsUni"
            label="Phone"
            solo
            rounded
            dense
          ></v-text-field>
        </div>

        <v-checkbox
          v-model="subEmail"
          label="Subscribe to our email and get promotion!"
        ></v-checkbox>
      </div><br/>

      <v-divider/>

      <br/><br/><br/>
      <p class="payment__title NeueMontreal-Bold">Shipping</p>
      <div>

        <div class="payment__contact--fieldsShipping">
          <v-text-field
            class="payment__contact--fieldsUni"
            label="House number and street number"
            solo
            rounded
            dense
          ></v-text-field>

          <v-text-field
            class="payment__contact--fieldsUni"
            label="Apartment, suite, unit (optional)"
            solo
            rounded
            dense
          ></v-text-field>
        </div>

        <div class="payment__contact--fieldsShippingTown">
          <v-text-field
            class="payment__contact--fieldsUni"
            label="Town / City"
            solo
            rounded
            dense
          ></v-text-field>
        </div>

        <div class="payment__contact--fieldsShippingMini">
          <v-text-field
            class="payment__contact--fieldsUni"
            label="State"
            solo
            rounded
            dense
          ></v-text-field>
        </div>

        <div class="payment__contact--fieldsShippingEnd">
          <div class="payment__contact--fieldsShippingMiniTwo">
            <v-text-field
              class="payment__contact--fieldsUni"
              label="ZIP Code"
              solo
              rounded
              dense
            ></v-text-field>
          </div>

          <v-text-field
            class="payment__contact--fieldsUniTwo"
            label="Country / Region"
            solo
            rounded
            dense
          ></v-text-field>
        </div><br/>

        <v-divider/>

        <br/><br/><br/>
        <p class="payment__title NeueMontreal-Bold">Payment</p>
        <div>

          Express Checkout<br/>
          <a href="">
            <img src="../static/paypal.png" class="payment__payment--img"/>
          </a><br/><br/>

          or <br/><br/><br/>

          <div class="payment__payment">
            <div>
              <v-text-field
                class="payment__contact--fieldsUni"
                label="Card number"
                solo
                rounded
                dense
              ></v-text-field>
            </div>

            <div class="payment__payment--Mini">
              <v-text-field
                class="payment__contact--fieldsUni"
                label="Expiry Date"
                solo
                rounded
                dense
              ></v-text-field>

              <v-text-field
                class="payment__contact--fieldsUni"
                label="Card Code CVC"
                solo
                rounded
                dense
              ></v-text-field>
            </div>

            <v-checkbox
              v-model="termsConditions"
              label="I've read and accept the terms and conditions"
            ></v-checkbox>

            <v-btn rounded dark color="#FF8D3B">Place the order</v-btn>

            <br/><br/><br/><br/><br/>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  layout: 'payments',
  data(){
    return{
      subEmail: false,
      termsConditions: false,
    }
  },
}
</script>

<style scoped>

.body--background-primary{
  background-color: #E9E9E9;
}

.navigateBar__title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.payment__title{
  font-size: 1.5rem;
}

.payment{
  width: 80%;
  margin-left: 10%;
}

.payment__contact{
  width: 55%;
}

.payment__contact--fields{
  display: flex;
  justify-content: space-around;
}

.payment__contact--fieldsUni{
  margin-right: 1rem;
}

.payment__contact--fieldsShipping{
  width: 45%;
}

.payment__contact--fieldsShippingTown{
  width: 30%;
}

.payment__contact--fieldsShippingMini{
  width: 18%;
}

.payment__contact--fieldsShippingEnd{
  width: 45%;
  display: flex;
  justify-content: space-between;
}

.payment__contact--fieldsShippingMiniTwo{
  width: 40%;
}

.payment__contact--fieldsUniTwo{
  margin-right: 1rem;
  width: 2%;
}

.payment__payment--img{
  width: 4rem;
}

.payment__payment{
  width: 40%;
}

.payment__payment--Mini{
  display: flex;
  justify-content: space-between;
}

</style>
