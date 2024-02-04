<template>
  <div class="home">
    <Hero></Hero>

    <transition name="head" appear>
      <div class="pa-10 teal lighten-5">
        <v-row class="fill-height text-center align-center" style="height: 30vh;">
        
          <v-col class="col-sm-12 col-md-12 text-md-center" >
            <span class="headline">We're With The Trip. Tour Will Make You Feel Better. I'd Sleep With Tour. Unthinkable Is What We Do</span>
          </v-col>
        </v-row>
    </div>
    </transition>
    <div>

      <v-card flat>
        <v-row class="fill-height align-center">
          <v-col class="col-sm-12 col-md-4" style="margin: 0; padding: 0;">
            <div class="blue lighten-2 elevation-10" style="height: 40vh;">
              <img src="/assets/images/about1.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </v-col>
          <v-col class="col-sm-12 col-md-6 text-md-center">
            <span class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti ducimus ad
              quis libero sapiente autem ullam aliquid debitis animi.</span>
          </v-col>
        </v-row>
      </v-card>


    </div>
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
    <div class="mt-10">

      <v-card flat>
        <v-row class="fill-height align-center">
          <v-col class="col-sm-12 col-md-6 text-md-center">
            <span class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti ducimus ad
              quis libero sapiente autem ullam aliquid debitis animi.</span>
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
export default {
  name: 'Home',
  components: {
    Hero
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
