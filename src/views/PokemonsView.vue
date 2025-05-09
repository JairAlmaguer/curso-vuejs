<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData'

    const { getData, data } = useGetData();

    getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <ul>
        <li v-if="data" v-for="poke in data.results">
            <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
    </ul>
</template>