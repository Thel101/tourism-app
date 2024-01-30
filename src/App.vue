<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    Header,
    Home,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
