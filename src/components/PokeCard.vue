<script setup>

    defineProps({
        name: String,
        image: String,
        weight: Number,
        types: Array,
    })

</script>

<template>

    <div class="container">
        <h2>{{ name.toUpperCase() }}</h2>
        <img v-if="image" :src="image" :alt="name + ' image'" width="250" height="250">
        <p v-if="image"> weigth: {{ weight }}</p>
        <div v-if="image" class="types">
            <span>Type: </span>
            <span v-for="type of types">
                - {{type.type.name}}
            </span>
        </div>
    </div>

</template>

<style>

.container{
    width: 90%;
    max-width: 1200px;
    min-width: 300px;
    padding: 2rem;
    border: solid 3px;
    border-color: rgb(146, 146, 146);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

}


</style>