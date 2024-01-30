<template>
  <div class="about">
    <Banner :src="'/assets/images/cambodia3.jpeg'"></Banner>
    <h3 class="my-5 headline text-center text-decoration-underline text--darken-2 grey--text">About Us</h3>
    <p class="headline text-center">Welcome to <span class="green--text">Asiavista Expeditions</span>, your gateway to the
      heart of Southeast Asia!
    </p>
    <p class="subtitle-1 text-center font-italic">Our mission is to curate authentic and unforgettable journeys for
      discerning explorers.</p>

    <!-- Our Vision -->
    <v-row class="mt-10 indigo lighten-4">
      <v-col class="col-sm-12 col-md-5">
        <v-img class="rounded-lg rounded-tl-5" src="assets/images/about1.jpeg"></v-img>
      </v-col>
      <v-col class="col-sm-12 col-md-7 d-flex flex-column" align-self="center">
        <h3 class="my-5 headline text-center text--darken-2 grey--text">Our Vision</h3>
        <v-card-text class="text--primary text-center">

          <div>We take pride in our ability to connect you with the authentic essence of Southeast Asia. Whether it's
            savoring local delicacies, participating in traditional ceremonies, or meeting local artisans, every
            moment is an opportunity for genuine cultural exchange.
          </div>
        </v-card-text>
      </v-col>
    </v-row>
    <!-- Our Vision -->

    <!-- Why Choose Us section -->
    <h4 class="my-10 headline text-center text-decoration-underline text--darken-2 grey--text">Why Choose Us</h4>
    <v-row>
      <v-col class="col-md-4 col-sm-12">
        <v-card class="mx-auto" max-width="400" flat>
          <v-icon x-large color="green darken-2" class="d-flex flex-column mt-5" align-center>
            mdi-account-group-outline
          </v-icon>
          <v-card-title class="d-flex flex-column" align-center>Expertise</v-card-title>

          <v-card-text class="text--primary text-center">

            <div>With a wealth of knowledge accumulated over more than a decade, our founders bring a deep
              understanding of Southeast Asia's diverse landscapes, cultures, and hidden gems</div>
          </v-card-text>


        </v-card>
      </v-col>
      <v-col class="col-md-4 col-sm-12">
        <v-card class="mx-auto" max-width="400" flat>
          <v-icon x-large color="green darken-2" class="d-flex flex-column mt-5" align-center>
            mdi-cog-outline
          </v-icon>
          <v-card-title class="d-flex flex-column" align-center>Customization</v-card-title>

          <v-card-text class="text--primary text-center">

            <div>We understand that every traveler is unique. That's why we specialize in tailoring experiences to suit
              your individual preferences. From the bustling streets of Bangkok to the serene landscapes of Southeast
              Asia, our custom itineraries are designed to reflect your travel dreams.
            </div>
          </v-card-text>

        </v-card>
      </v-col>
      <v-col class="col-md-4 col-sm-12">
        <v-card class="mx-auto" max-width="400" flat>
          <v-icon x-large color="green darken-2" class="d-flex flex-column mt-5" align-center>
            mdi-account-multiple
          </v-icon>
          <v-card-title class="d-flex flex-column" align-center>Small Group Focus</v-card-title>

          <v-card-text class="text--primary text-center">

            <div>We believe in the power of intimate travel. Our small group sizes ensure personalized attention,
              fostering a sense of community among like-minded travelers</div>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-md-4 offset-md-4 col-sm-12">
        <v-card class="mx-auto" max-width="400" flat>
          <v-icon x-large color="green darken-2" class="d-flex flex-column mt-5" align-center>
            mdi-check-circle-outline
          </v-icon>
          <v-card-title class="d-flex flex-column" align-center>Authentic Connections</v-card-title>

          <v-card-text class="text--primary text-center">

            <div>We take pride in our ability to connect you with the authentic essence of Southeast Asia. Whether it's
              savoring local delicacies, participating in traditional ceremonies, or meeting local artisans, every
              moment is an opportunity for genuine cultural exchange.
            </div>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

    <!-- Why Choose Us section -->
    <!-- Last section -->
    <v-carousel cycle :show-arrows="false" hide-delimiter-background>
      <v-carousel-item v-for="slide in slides" :key="slide.color">
        <v-sheet :color="slide.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div v-if="slide.id === 1" class="text-h2">
              {{ slide.text }}
            </div>
            <div v-if="slide.color !== 'primary' && slide.emphaisis === false" class="headline pa-5 text-center">
              {{ slide.text }}
            </div>
            <div v-if="slide.id == 2" class="headline pa-5 text-center">
              {{ slide.text }} <span class="text-h4 green--text accent-3 font-weight-bold"> Asiavista Expeditions </span>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
 <!-- Last section -->
    </div>
</template>
<script>
import Banner from '../components/Banner.vue';
import Home from './Home.vue';
export default {
  components: {
    Banner
  },
  data() {
    return {

      slides: [
        {id:1, color: 'primary', text: 'Your Journey Begins Here', emphaisis: false},
        {id:2, color: 'blue lighten-2', text: 'Embark on a journey of discovery with', emphaisis: true},
        {id:3, color: 'yellow darken-2', text: 'Let us be your guide to the enchanting landscapes, warm hospitality, and vibrant cultures that define Southeast Asia.', emphaisis: false},
        {id:4, color: 'red', text: 'Whether you seek the thrill of adventure or the tranquility of hidden retreats, we invite you to join us in creating memories that last a lifetime', emphaisis: false},
        {id:5, color: 'orange', text: 'Come explore Southeast Asia with us – where authenticity meets adventure.', emphaisis: false}
    
      ],
    }
    }
  }

</script>
<style scoped>
.vision1 v-img {
  opacity: 0.5;
}

.line-height-large {
  line-height: 2;
}
</style>
