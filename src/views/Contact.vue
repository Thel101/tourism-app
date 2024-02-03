<template>
  <div class="contact">
    <Banner :src="'/assets/images/contactUs.jpg'"></Banner>
    <h3 class="my-5 headline text-center text-decoration-underline text--darken-2 grey--text">Contact Us</h3>
    <v-container>
      <v-card class="pa-3">
        <v-form ref="form" lazy-validation>
          <v-card-title color="primary">Inquiry Form</v-card-title>
  
          <v-row>
            <v-col class="col-sm-12 col-md-6">
              <v-text-field label="Name" required></v-text-field>
  
              <v-text-field label="E-mail" required></v-text-field>
            </v-col>
            <v-col class="col-sm-12 col-md-6">
              <v-text-field label="Phone Number" required></v-text-field>
              <v-text-field label="Secondary Phone Number"></v-text-field>
            </v-col>
          </v-row>
          <v-textarea label="Inquiry Details" hint="Hint text"></v-textarea>
  
          <div class="text-center">
            <v-btn color="primary" class="ma-2 white--text">
              Submit Inquiry
              <v-icon right dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </div>
        </v-form>
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
export default {
  components: {
    Banner
  }
}
</script>

<style></style>