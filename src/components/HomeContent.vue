<template>
    <nav-bar @active-planet="receivePlanet" @hover-planet="setActivePlanet" :hover-planet="activePlanet" :active-planet-props="activePlanet"/>

    <div class="bg-transparent py-12 px-4 sm:px-6 lg:px-8 font-spartan text-white">
      <div class="max-w-7xl mx-auto pt-24">
        <h1 class="text-[48px] leading-10 uppercase font-bold sm:text-5xl sm:leading-none md:text-6xl">
          Welcome to the Planets Site!
        </h1>
        <p class="mt-6 text-[28px] font-light text-gray-500 leading-6 w-11/12 sm:mt-4">
          Explore information about different planets in our solar system.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-2/3 mx-auto pt-1">
      <div
        v-for="planet in planets"
        :key="planet.name"
        class="bg-transparent shadow-md rounded-lg overflow-hidden self-center cursor-pointer"
        @mouseover="setActivePlanet(planet.name)"
        @mouseleave="receivePlanet('')"
      >
        <div class="p-3 px-5 flex flex-col justify-center" @click="setActivePlanet(planet.name)">
          <router-link 
            :to="planet.url" 
            class="text-center text-white py-2 rounded-md hover:scale-125 transition-transform duration-300 ease-in-out"
            :class="{ 'hovered-planet': planet.name === activePlanet }"
            >
            <img :src="planet.image" :alt="planet.name" class="w-full h-32 object-contain pb-5">
            <span class="py-2 uppercase">{{ planet.name }}</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

import planets from "../data.json"

  export default {
    name: "HomeContent",
    components: {NavBar},
    data() {
      return {
        planets,
        activePlanet: '',
      }
    },
    methods: {
      setActivePlanet(e) {
        this.activePlanet = e;
      },
      receivePlanet(e) {
          this.activePlanet = e
      },
      resetActivePlanet() {
        this.activePlanet = '';
      },
    }
  }
</script>

<style lang="css" scoped>
.hovered-planet {
  @apply scale-125 transition-transform duration-300 ease-in-out
}
</style>