<script setup>
    import axios from 'axios';
    import { ref } from 'vue';

    const pokemons = ref([])

    const getData = async () => {
        try{
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
            console.log(data.results)
            pokemons.value = data.results;
        }catch(e){
            console.log(e)
        }
    }

    getData()

</script>

<template>
    <ul>
        <li v-for="poke in pokemons">
            {{ poke.name }}
        </li>
    </ul>
</template>