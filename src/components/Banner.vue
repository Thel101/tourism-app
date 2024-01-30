<template>
    <v-img :src="src" max-height="300px" class="mt-5">
        <v-row align="end" class="fill-height">
            <v-col cols="12">
                <v-container class="text--center">
                    <div class="white--text headline">{{ text }}</div>
                </v-container>

            </v-col>
        </v-row>

    </v-img>
</template>

<script>
export default {
    props: ['src', 'text']
}
</script>

<style></style>