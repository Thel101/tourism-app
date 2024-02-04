<template>
    <nav>
        <v-app-bar dark class="white--text" app flat>

            <v-toolbar-title>Asiavista Expeditions</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-hover v-slot="{ hover }" open-delay="100" v-for="link in links" :key="link.text">
                <v-btn text :class="{ 'on-hover': hover }" rounded>
                    <router-link :to="link.route" class="white--text links">
                        {{ link.text }}
                    </router-link>
                </v-btn>
            </v-hover>

        </v-app-bar>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { text: 'Home', route: '/' },
                { text: 'Destinations', route: '/destinations' },
                { text: 'Plan your trips', route: '/plan-trips' },
                { text: 'About', route: '/about' },
                { text: 'Contact Us', route: '/contact' },
            ]
        }
    }
}
</script>
<style scoped>
.v-btn.on-hover {
    background: rgb(158, 183, 238);
}
.links{
    text-decoration: none;
}
</style>