<template>
  <div class="plan-trip">
    <Banner :src="'/assets/images/thailand1.jpeg'"></Banner>
    <h3 class="my-5 headline text-center text-decoration-underline text--darken-2 grey--text">Plan your dream trip with us
    </h3>
    <v-container>
      <v-form ref="form" lazy-validation>
        <h3>Personal Information</h3>

        <v-col class="col-sm-6 col-md-6 justify-content-around">
          <v-text-field label="Name" required></v-text-field>

          <v-text-field label="E-mail" required></v-text-field>

          <v-text-field label="Phone Number" required></v-text-field>
          <v-textarea label="Trip Details" hint="Hint text"></v-textarea>
        </v-col>
        <v-row>

          <v-col class="col-sm-12 col-md-6">
            <h3>Destination </h3>
            <v-text-field label="Destination" required></v-text-field>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field v-on="on" label="Preferred travel date"></v-text-field>
              </template>
              <v-date-picker class="col-md-4" v-model="picker"></v-date-picker>
            </v-menu>

            <v-text-field label="Number of Travellers" required></v-text-field>

            <v-select :items="accomodation" label="Accomodation Preferences"></v-select>
            <v-select :items="room" label="Room Configuration"></v-select>
            <v-combobox :items="activities" label="Interest and activities" multiple chips></v-combobox>

          </v-col>

          <v-col class="col-sm-12 col-md-6">
            <h3>Cultural Interests </h3>
            <v-combobox :items="interests" label="Cultural Interests" multiple chips></v-combobox>
            <v-select :items="adventure" label="Adventure Level"></v-select>
            <v-combobox :items="culinary" label="Culinary Preferences" multiple chips></v-combobox>
            <v-textarea label="Special Request"></v-textarea>
          </v-col>
        </v-row>
        <v-row>

          <v-col class="col-sm-12 col-md-6">
            <h3>Occasional Preferences </h3>
            <v-select :items="occasion" label="Occasional Preferences"></v-select>
            <v-combobox :items="additional" label="Additional Services" multiple chips></v-combobox>

          </v-col>

          <v-col class="col-sm-12 col-md-6">
            <h3>Budge Preferences</h3>
            <v-select :items="comfort" label="Comfort level"></v-select>
            <v-select :items="transportation" label="Preferred transportation"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12">
            <v-textarea label="Additional Comments"></v-textarea>
          </v-col>
        </v-row>

        <div class="text-center">
          <v-btn color="primary" class="ma-2 white--text">
            Upload Trip Plan
            <v-icon right dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
  
<script>
import Banner from '../components/Banner.vue';
export default {
  data() {
    return {
      picker: null,
      accomodation: ['Hotels', 'Boutique Stays'],
      room: ['Single', 'Double', 'Twins'],
      activities: [
        'Swimming',
        'Diving',
        'Trekking',
        'Vuetify',
      ],
      interests: [
        'historical sites',
        'locat markets',
        'festivals'
      ],
      adventure: [
        'mild',
        'moderate',
        'high'
      ],
      culinary: [
        'dietary restrictions',
        'local-dishes',
        'western cuisines'
      ],
      occasion: [
        'birthday',
        'anniversary'
      ],
      additional: [
        'photographers',
        'guides'
      ],
      comfort: [
        'luxury',
        'mid-range',
        'budget'
      ],
      transportation: [
        'public transportation',
        'fight',
        'private car'
      ]
    }

  },

  components: {
    Banner,
  }
}

</script>
  
<style></style>