<template>
  <v-footer dark padless class="mt-10 white--text pa-10" flat>
    <v-row justify="center" no-gutters>
      <v-col class="col-sm-12 col-md-4 transparent">
        <div v-for="link in links" :key="link" flat>
          <v-list-item><v-btn text rounded class="my-2">
              {{ link }}
            </v-btn></v-list-item>
        </div>

      </v-col>
      <v-col class="col-sm-12 col-md-4">
        <span class="d-flex headline ma-10">Reach Out To Us</span>
        <div class="ma-10">
        <v-icon class="white--text mr-5 display-2">mdi-facebook </v-icon>
        <v-icon class="white--text mr-5 display-2">mdi-instagram </v-icon>
        <v-icon class="white--text mr-5 display-2">mdi-whatsapp </v-icon>
        <v-icon class="white--text display-2">mdi-gmail </v-icon>
        </div>
        
      </v-col>
      <v-col class="col-sm-12 col-md-4">
        <p class="text-center headline">About Us</p>
        <span class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus voluptate a quidem maiores quisquam earum iusto nam et dolorum mollitia?</span>
        <v-list-item :style="{ cursor : isHovered ? 'pointer' : 'default'}" @mouseover="isHovered = true" @mouseout="isHovered = false" ><v-icon class="white--text mr-5" cursor="pointer">mdi-phone</v-icon> 09400626347</v-list-item>
        <v-list-item :style="{ cursor : isHovered ? 'pointer' : 'default'}" @mouseover="isHovered = true" @mouseout="isHovered = false"><v-icon class="white--text mr-5">mdi-gmail</v-icon> asiavist@gmail.com</v-list-item>
        <v-list-item :style="{ cursor : isHovered ? 'pointer' : 'default'}" @mouseover="isHovered = true" @mouseout="isHovered = false"><v-icon class="white--text mr-5">mdi-map-marker</v-icon> Yangon, Myanmar</v-list-item>
      </v-col>

      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>AsiaVista Expeditions</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    isHovered :false,
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),

}
</script>

<style></style>