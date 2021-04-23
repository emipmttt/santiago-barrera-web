<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-6">
        <h1 class="NeueMontreal-Bold title--size">
          Typography as art and chaos
        </h1>

        <p class="mt-8">
          Published on December, 2021
        </p>

        <p>
          Article written by
          <span class="text__primary">Santiago Barrera</span>
        </p>

        <p class="mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia
        </p>

        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
          by Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 translation by H. Rackham.
        </p>

        <h2 class="NeueMontreal-Bold title--size mt-10">
          The begging of everything
        </h2>

        <p class="mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia
        </p>

        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
          by Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 translation by H. Rackham.
        </p>

        <br>
        <br>

        <h3 class="mt-10 NeueMontreal-Bold">
          Share this article
        </h3>

        <div class="mt-4">
          <v-btn icon>
            <v-icon color="black">
              mdi-facebook
            </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="black">
              mdi-twitter
            </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="black">
              mdi-linkedin
            </v-icon>
          </v-btn>
        </div>


        <br>
        <br>
        <br>
        <br>

        <h3 class="mt-10 NeueMontreal-Bold">
          Thank you for reading
        </h3>

        <p class="mt-4">
          by <span class="text__primary">Santiago Barrera</span>
        </p>


        <v-btn plain :ripple="false" color="#ef712f">
          <v-icon left>mdi-arrow-left</v-icon>
          VIEW ALL ARTICLES
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "_id"
}
</script>

<style scoped>

.title--size {
  font-size: 64px;
}

.text__primary {
  color: #ef712f;
}

</style>
