<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiters
    show-arrows-on-hover
  >
  <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 white--text">
            {{ item.title }}
          </div>
        </v-row>
   
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            title : 'Yangon, Myanmar'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title : 'Bangkok, Thailand'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title : 'Hanoi, Vietnam'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title : 'Vientiane, Laos'
          },
        ],
      }
    },
}
</script>

<style>

</style>