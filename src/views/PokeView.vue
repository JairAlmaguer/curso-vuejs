<script setup>
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import PokeCard from '../components/PokeCard.vue';

    const route = useRoute();
    const router = useRouter();
    const poke = ref();

    const back = () => {
        router.push('/pokemons')
    }
    
    const getData = async () => {
        try{
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
            console.log(data);
            poke.value = data;
        }catch(e){
            poke.name = "Pokemon doesn't exist"
            console.log('no existe')
            console.log(poke.name)
            console.log(e)
        }
    }

    getData()
</script>


<template>
    <div class="nav">
        <button @click="back">Back</button>
    </div>

    <div class="main">

        <PokeCard
        :name="poke?.name ? poke.name : 'Pokemon Does Not Exist'"
        :image="poke?.sprites.front_default"
        :weight="poke?.weight"
        :types="poke?.types"
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