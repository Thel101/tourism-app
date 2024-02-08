<template>
  <div class="home">
    <Hero></Hero>

    <!--- Content 1-->
    <div v-if="pageContent && pageContent[0]" class="pa-10 teal lighten-5" v-bind="pageContent[0]">
      <v-row class="fill-height text-center align-center" style="height: 30vh;">
        <v-col class="col-sm-12 col-md-12 text-md-center">
          <span class="headline">{{ pageContent[0].description }}</span>
        </v-col>
      </v-row>
    </div>

    <!--- Content 2-->
    <div>

      <v-card flat>
        <v-row class="fill-height align-center">
          <v-col class="col-sm-12 col-md-4" style="margin: 0; padding: 0;">
            <div class="blue lighten-2 elevation-10" style="height: 40vh;">
              <img src="/assets/images/about1.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </v-col>
          <v-col class="col-sm-12 col-md-6 text-md-center">
            <span class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad sunt excepturi? Iusto
              reprehenderit officia voluptate pariatur facere unde deserunt fugit debitis placeat molestias incidunt non
              dolores veniam quia quasi aperiam similique aut, in animi. Delectus ducimus enim nulla in?</span>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!--- Content 3-->
    <div class="mt-10">

      <v-card flat>
        <v-row class="fill-height align-center">
          <v-col class="col-sm-12 col-md-3" style="margin: 0; padding: 0;">
            <div class="blue lighten-2 elevation-10" style="height: 30vh;">
              <img src="/assets/images/home1.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </v-col>
          <v-col class="col-sm-12 col-md-6 text-md-center">
            <span class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti ducimus ad
              quis libero sapiente autem ullam aliquid debitis animi.</span>
          </v-col>
          <v-col class="col-sm-12 col-md-3" style="margin: 0; padding: 0;">
            <div class="blue lighten-2 elevation-10" style="height: 30vh;">

            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!--- Content 4-->
    <div class="mt-10">

      <v-card v-if="pageContent && pageContent[2]" flat>
        <v-row class="fill-height align-center">
          <v-col class="col-sm-12 col-md-6 text-md-center">
            <span class="headline">{{ pageContent[2].description }}</span>
          </v-col>
          <v-col class="col-sm-12 col-md-6" style="margin: 0; padding: 0;">
            <div class="blue lighten-2 elevation-10" style="height: 50vh;">
              <img src="/assets/images/about2.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </v-col>

        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '../components/Hero.vue';
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    Hero
  },
  data() {
    return {
      pageContent: []
    }
  },
  methods: {

  },

  mounted() {
    axios.get('http://tourism-app-backend.test/api/contents/Home', { params: { page: "Home" } })
      .then(response => {
        this.pageContent = response.data;
        console.log(this.pageContent)
      })
      .catch(error => console.log(error));

    axios.get()

  }

}
</script>
<style scoped>
/* we will explain what these classes do next! */
.head-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.25s;
}

.head-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.head-fade-enter-from,
.head-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
