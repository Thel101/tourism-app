import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Destination from '../views/Destination.vue'
import DestinationDetail from '../views/DestinationDetail.vue'
import PlanTrips from '../views/PlanTrips.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destination
  },
  {
    path: '/destinations/details/:id',
    name: 'DestinationDetails',
    component: DestinationDetail,
    props : true
  }
  ,
  {
    path: '/plan-trips',
    name: 'PlanTrips',
    component: PlanTrips
  }
  ,
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/contact',
    name: 'ContactUs',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
