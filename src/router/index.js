import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component:() => import('../views/PokemonsView.vue') 
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component:() => import('../views/PokeView.vue') 
    },
    {
      path: '/favorites',
      name: 'favorites',
      component:() => import('../views/FavoritesView.vue') 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:() => import('../views/NotFound.vue') 
    },
  ],
})

export default router
