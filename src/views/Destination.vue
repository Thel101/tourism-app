<template>
  <div class="destination">
    <Hero></Hero>
    <h3 class="my-5 headline text-center text-decoration-underline text--darken-2 grey--text">Destination List</h3>
    <v-row>
      <v-col class="col-sm-6 col-md-4" v-for="place in places" :key="place.id">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="place.image">
            <v-card-title>{{ place.title }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>{{ place.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>

            <v-btn color="orange" text>
              Explore
            </v-btn>
          </v-card-actions>
          
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
import Hero from '../components/Hero.vue';
export default {
  components: {
    Hero
  },
  data: () => ({
   places :[
    { id: 1, title : 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/cambodia1.jpeg'},
    { id: 2, title : 'Laos', description: 'Serenity Unveiled', image: '/assets/images/cambodia1.jpeg'},
    { id: 3, title : 'Cambodia', description: 'Temples and Traditions', image: '/assets/images/cambodia1.jpeg'},
    { id: 4, title : 'Myanmar', description: 'Timeless Beauty Beckons', image: '/assets/images/cambodia1.jpeg'},
    { id: 5, title : 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/cambodia1.jpeg'},
    { id: 6, title : 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/cambodia1.jpeg'}
   ]
  }),
}
</script>
  
<style></style>