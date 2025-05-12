<script setup>
    import { useFavoritesStore } from '@/store/favorites';
    import { storeToRefs } from 'pinia';
    import { RouterLink } from 'vue-router';
    const useFavorites = useFavoritesStore();
    const {favorites} = storeToRefs(useFavorites);
    const { remove } = useFavorites;
</script>

<template>

    <h1>FAVORITES</h1>

    <ul>
        <li v-for="poke of favorites" :key="poke.id" style="margin-top: 1rem;"> 
            <div style="display: flex; gap: 1rem;">
                <span>{{ poke.name }}</span>
                <button style="margin: 0;" @click="remove(poke.id)">Delete</button>
                <RouterLink style="margin: 0;" :to="`/pokemons/${poke.name}`" >More Info</RouterLink>
            </div>
        </li>
    </ul>


</template>