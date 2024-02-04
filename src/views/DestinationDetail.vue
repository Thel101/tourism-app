<template>
    <div>
        <v-container>
            <v-img :src="image" max-height="auto"></v-img>
            <v-row class="mt-5">
                <v-col v-for="n in 8" :key="n" class="d-flex child-flex" cols="3">
                    <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1"
                        class="grey lighten-2" rounded>
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <h3 class="text-center text-decoration-underline grey--text my-10">{{ country }}, {{ body }}</h3>
            <div class="text-center custom-line-height">
                {{ description }} <router-link :to="{ name: 'ContactUs' }" class="text-decoration-none contact"><span>
                        Contact Us</span></router-link>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    props: ['id', 'body', 'image', 'country', 'description'],
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.custom-line-height {
    line-height: 2;
}

.contact span:hover {
    border-radius: 2px;
    padding: 5px;
    background: rgb(164, 214, 234);
}
</style>