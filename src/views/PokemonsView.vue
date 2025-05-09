<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData'

    const { getData, data, error } = useGetData();

    getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <p v-if="error">{{ error }}</p>
    <ul>
        <li v-if="data" v-for="poke in data.results">
            <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
    </ul>
</template>