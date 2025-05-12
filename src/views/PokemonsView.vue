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
    <div class="buttonsContainer">
        <button :disabled="!data?.previous" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data?.next" @click="getData(data.next)">Next</button>
    </div>
    <ul>
        <li v-if="data" v-for="poke in data.results">
            <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
    </ul>
</template>

<style>
    button{
        width: 80px;
        height: 30px;
        border-color: white;
        border-radius:4px;
        background-color: transparent;
        color: white;
        margin: 1rem;
    }

    .buttonsContainer {
        display: inline;
    }

</style>