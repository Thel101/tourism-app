<template>
  <div class="about">
    <Banner :src="'/assets/images/cambodia3.jpeg'"></Banner>
    <h3 class="my-5 headline text-center text-decoration-underline text--darken-2 grey--text">About Us</h3>
    <p class="headline text-center">Welcome to <span class="green--text">Asiavista Expeditions</span>, your gateway to the
      heart of Southeast Asia!
    </p>
    <p class="subtitle-1 text-center font-italic">Our mission is to curate authentic and unforgettable journeys for
      discerning explorers.</p>
    <div v-for="item in items" :key="item.id" class="pa-3">
      <div v-if="item.align === 'left'">
        <v-row align="center" class="fill-height" style="min-height: 40%">
          <v-col class="col-md-4 col-sm-12">

            <v-img :src="section1.src" gradient="gradient" class="fill-height d-flex align-center text-center">
              <p class="headline pa-5 white--text">{{ item.title }} </p>
            </v-img>

          </v-col>
          <v-col class="col-md-8 black--text col-sm-12">
            <p class="line-height-large font-italic text-center" style="font-size:large;">{{ item.description }}
            </p>
          </v-col>
        </v-row>
      </div>
      <div v-if="item.align === 'right'" >
        <div class="indigo lighten-2" style="min-height: 40vh;">

          <p class="display-2 pa-5 white--text text-center">{{ item.title }} </p>
          <p class="line-height-large font-italic text-center pa-10" style="font-size:large;">{{ item.description }}
          </p>

        </div>


      </div>

    </div>

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
      items: {
        section1: {
          id: 1, title: 'Expertise', description: 'With a wealth of knowledge accumulated over more than a decade, our founders bring a deep understanding of Southeast Asia\'s diverse landscapes, cultures, and hidden gems', align: 'left', src: 'assets/images/about2.jpeg'
        },
        section2: {
          id: 2, title: 'Customization', description: 'We understand that every traveler is unique. That\'s why we specialize in tailoring experiences to suit your individual preferences. From the bustling streets of Bangkok to the serene landscapes of Southeast Asia, our custom itineraries are designed to reflect your travel dreams', align: 'right', src: 'assets/images/about2.jpeg'
        },
        section3: {
          id: 3, title: 'Small Group Focus', description: 'We believe in the power of intimate travel. Our small group sizes ensure personalized attention, fostering a sense of community among like-minded travelers', align: 'left', src: 'assets/images/about3.jpeg'
        },
        section4: {
          id: 4, title: 'Authentic Connections', description: 'We take pride in our ability to connect you with the authentic essence of Southeast Asia. Whether it\'s savoring local delicacies, participating in traditional ceremonies, or meeting local artisans, every moment is an opportunity for genuine cultural exchange', align: 'right', src: 'assets/images/about2.jpeg'
        }
      },
      gradient: 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',

    }
  },



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
