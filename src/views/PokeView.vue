<script setup>
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import PokeCard from '../components/PokeCard.vue';
    import { useGetData } from '@/composables/getData';
    import { useFavoritesStore } from '@/store/favorites';

    const route = useRoute();
    const router = useRouter();
    const useFavorites = useFavoritesStore();
    
    const { getData, data, loading, error } = useGetData();
    const { add, findPoke } = useFavorites;
    
    const back = () => {
        router.push('/pokemons')
    }
    
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    console.log(data)
</script>


<template>
    <div class="nav">
        <button @click="back">Back</button>
    </div>

    <p v-if="error">{{ error }}</p>

    <div class="main">

        <PokeCard
        :name="data?.name ? data.name : loading ? 'Loading...' : 'Pokemon Does Not Exist'"
        :image="data?.sprites.front_default"
        :weight="data?.weight"
        :types="data?.types"
        />

        <div style="width: 100%; justify-content: end; display: flex; padding: 1rem; ">
            <button :disabled="findPoke(data.name)" v-if="data" style="width: 150px; margin-right: 2rem;" @click="add(data)"> Add To Favorites </button>
        </div>

    </div>
</template>

<style>
    .nav {
        display: flex;
        justify-content: end;
        flex-direction: row;
        align-items: center;
        padding: 1rem 3rem;
    }

    button{
        width: 80px;
        height: 30px;
        border-color: white;
        border-radius:4px;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }

    button:disabled {
    background-color: gray;
    color: white;
    cursor: not-allowed;
    opacity: 0.6;
}

    h1{
        font-weight: 600;
    }

</style>