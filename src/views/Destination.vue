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

            <router-link :to="{ name: 'DestinationDetails', params: { id: place.id, body: place.body, image: place.image, country: place.title , description: place.description } }">
              <v-btn color="orange" text>
                Explore
              </v-btn>
            </router-link>
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
    places: [
      { id: 1, title: 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/thailand1.jpeg', body: 'A captivating destination known for its vibrant culture, breathtaking landscapes, and warm hospitality. Explore the bustling streets of Bangkok, adorned with temples and street markets. Immerse yourself in the tranquility of pristine beaches and lush jungles. Indulge in the exquisite flavors of Thai cuisine and witness traditional ceremonies that reflect the country\'s rich heritage. At Asiavista Expeditions, we invite you to embark on a journey through Thailand\'s diverse tapestry, where every moment is an opportunity for discovery and delight. Your Thai adventure awaits' },
      { id: 2, title: 'Laos', description: 'Serenity Unveiled', image: '/assets/images/laos1.jpg', body:'A hidden gem nestled in the heart of Southeast Asia. Laos enchants with its serene landscapes, ancient temples, and a tranquil way of life. Immerse yourself in the spiritual ambiance of Luang Prabang\'s temples, cruise along the Mekong River, and explore the untouched beauty of its lush jungles. At Asiavista Expeditions, we invite you to experience Laos\'s untouched charm, where time seems to slow, and every moment becomes a journey into tranquility. Let Laos captivate your senses – contact us'},
      { id: 3, title: 'Cambodia', description: 'Temples and Traditions', image: '/assets/images/cambodia1.jpeg', body: 'Embark on a journey to Cambodia, where ancient wonders and vibrant culture converge. Marvel at the awe-inspiring Angkor Wat, a testament to the Khmer Empire\'s grandeur. Traverse the charming streets of Siem Reap, discovering the local markets and culinary delights. Cruise the mystical waters of Tonle Sap Lake and absorb the spiritual energy of Phnom Penh\'s historic sites. At Asiavista Expeditions, we invite you to unlock the secrets of Cambodia\'s rich tapestry, where every step reveals a story and every moment promises an unforgettable adventure. Your Cambodian odyssey begins here' },
      { id: 4, title: 'Myanmar', description: 'Timeless Beauty Beckons', image: '/assets/images/myanmar1.jpg', body: 'Unveil the mystique of Myanmar, where ancient traditions dance amidst breathtaking landscapes. Discover the awe-inspiring temples of Bagan, witness the golden glow of Shwedagon Pagoda, and cruise along the serene waters of Inle Lake. Myanmar, with its warm-hearted locals and diverse cultural heritage, invites you to wander through bustling markets, savor traditional flavors, and partake in vibrant festivals. At Asiavista Expeditions, we curate unforgettable journeys, ensuring responsible travel practices and a seamless blend of cultural immersion and natural wonders. Your adventure begins here, where Myanmar\'s timeless beauty awaits --- contact us '},
      { id: 5, title: 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/cambodia1.jpeg' , body: '' },
      { id: 6, title: 'Thailand', description: 'The Kingdom of smiles', image: '/assets/images/cambodia1.jpeg', body: '' }
    ]
  }),
}
</script>
  
<style></style>