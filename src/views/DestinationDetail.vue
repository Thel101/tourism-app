<template>
    <div>
        <v-container>
            <v-img :src="image" max-height="auto"></v-img>
            <h3 class="text-center text-decoration-underline grey--text my-10">{{ country }}, {{ description }}</h3>
            <div class="text-center custom-line-height">
                {{ body }} <router-link :to="{ name : 'ContactUs'}" class="text-decoration-none contact"><span> Contact Us</span></router-link>
            </div>
        </v-container>
    </div>
</template>
<script>
export default{
    props : ['id', 'body', 'image', 'country', 'description'],
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.custom-line-height{
    line-height: 2;
}
.contact span:hover{
    border-radius: 2px;
    padding: 5px;
    background: rgb(164, 214, 234);
}
</style>