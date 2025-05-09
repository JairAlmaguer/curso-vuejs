<script setup>
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import PokeCard from '../components/PokeCard.vue';
    import { useGetData } from '@/composables/getData'

    const { getData, data, loading } = useGetData();
    const route = useRoute();
    const router = useRouter();
        
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

    <div class="main">

        <PokeCard
        :name="data?.name ? data.name : loading ? 'Loading...' : 'Pokemon Does Not Exist'"
        :image="data?.sprites.front_default"
        :weight="data?.weight"
        :types="data?.types"
        />

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
        
    }

    h1{
        font-weight: 600;
    }

</style>