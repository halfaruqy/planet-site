<template>
  <nav-bar @active-planet="receivePlanet" :active-planet-props="activePlanet"/>
  
  <div class="z-[-3] flex flex-col absolute top-20 w-full justify-center items-center text-white">
    
    <div class="container-content py-10 bg-transparent h-full lg:grid lg:grid-cols-2 lg:grid-rows-3">
      
      <div class="flex justify-center h-full scale-90 sm:scale-50 lg:grid lg:col-span-1 lg:row-span-2 lg:scale-[0.8]">
        <img class="relative object-contain lg:translate-y-20" :src="planetImage" alt="">
        <img class="absolute mt-48 h-36 lg:mt-72 lg:ml-[320px]" :src="planetSurface" alt="">
      </div>

      <div class="sm:grid sm:grid-cols-2 lg:grid lg:col-span-1 lg:row-span-1 lg:ml-24">
        <div class="sm:text-left sm:grid sm:grid-flow-row sm:items-start sm:mt-[-30px] sm:ml-4 ">
          <div class="flex justify-center lg:justify-end text-[40px] font-antonio uppercase font-bold pt-20 sm:place-self-start">
            <h1>{{ planet.name }}</h1>
          </div>
          <div class="flex justify-center text-[15px] font-spartan pt-8 mx-5 text-center sm:ml-0 sm:text-start">
            <p>{{ overviewContent }}</p>
          </div>
          <div class="flex justify-center text-[15px] font-spartan pt-8 mx-5 font-semibold text-center sm:ml-0 sm:place-self-start sm:text-start">
            <span class=" opacity-50 font-light mr-1">Source :</span> <a :href="overviewSource" class="underline opacity-75">Wikipedia<img class="inline ml-1 pb-[2px] no-underline" src="../assets/icon-source.svg" alt=""></a>
          </div>
        </div>

        <div class="shadow-box"></div>
      </div>

      <div class="lg:grid lg:col-span-1 lg:row-span-1">
        <sub-nav-planet @current-sub-nav="receiveEmit" :active-planet="activePlanet" />
      </div>
      
      <div class="flex justify-center uppercase pt-5 font-semibold sm:pt-8 lg:static lg:mt-[-350px] lg:self-center lg:grid lg:col-span-2 lg:row-span-1">
        <ul class="">
          <li 
            v-for="info in infoCategories" 
            :key="info"
            class="pb-2 sm:inline-block">
            <p class="grid grid-flow-col justify-items-stretch px-3 py-2 border-[1px] border-separate border-spacing-1 w-[328px] sm:cursor-default sm:hover:scale-110 sm:transition-transform sm:border-gray-500 sm:grid-flow-row sm:w-[164px] sm:py-4 sm:mr-3 lg:w-[200px] lg:mr-7">
              <span class="justify-self-start self-center font-spartan text-[10px] opacity-60">{{ info }}</span>
              <span 
                class=" justify-self-end sm:justify-self-start font-antonio text-[20px]"
                v-if="info === 'Rotation Time'"> {{ planet.rotation }}
              </span>
              <span 
                class=" justify-self-end sm:justify-self-start font-antonio text-[20px]"
                v-else-if="info === 'Revolution Time'"> {{ planet.revolution }}
              </span>
              <span 
                class=" justify-self-end sm:justify-self-start font-antonio text-[20px]"
                v-else-if="info === 'Radius'"> {{ planet.radius }}
              </span>
              <span 
                class=" justify-self-end sm:justify-self-start font-antonio text-[20px]"
                v-else-if="info === 'Average Temperature'"> {{ planet.temperature }}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import NavBar from '../components/NavBar.vue';
import SubNavPlanet from "../components/SubNavPlanet.vue"

import planets from "../data.json"

const transformedPlanets = planets.map(planet => {
    planet.overview = JSON.parse(JSON.stringify(planet.overview))
    planet.structure = JSON.parse(JSON.stringify(planet.structure))
    planet.geology = JSON.parse(JSON.stringify(planet.geology))

    return planet
})

export default {
  name: "PlanetInfo",
  components: { SubNavPlanet, NavBar },
  data() {
    return {
      infoCategories: ["Rotation Time", "Revolution Time", "Radius", "Average Temperature"],
      activePage: "overview",
      activePlanet: "",
      planet: {},
    }
  },
  mounted() {
    // Retrieve the selected planet information from the route
    this.activePlanet = this.$route.params.name.charAt(0).toUpperCase() + this.$route.params.name.slice(1)
    this.receivePlanet(this.activePlanet) //async operation
  },
  methods: {
    receiveEmit(e) {
      this.activePage = e
      // console.log(e)
    },
    receivePlanet(e) {
      this.planet = transformedPlanets.find(item => item.name === e)
      this.activePlanet = e
    }
  },
  computed: {
    planetImage(){
      if(this.activePage === "overview" || this.activePage === "surface") {
        return this.planet.image
      } else if (this.activePage === "structure") {
        return this.planet.imageInternal
      }
      return ''
    },
    planetSurface(){
      if(this.activePage === "surface") {
        return this.planet.imageGeo
      }
      return ''
    },
    overviewContent() {
      // Check if 'this.planet' and 'this.planet.overview' are defined before accessing 'content'
      if (this.planet && this.planet.overview && this.activePage === "overview") {
        return this.planet.overview.content;
      } else if (this.planet && this.planet.structure && this.activePage === "structure") {
        return this.planet.structure.content;
      } else if (this.planet && this.planet.geology && this.activePage === "surface") {
        return this.planet.geology.content;
      }
      return '' // Return a default value or handle the case where data is not yet available
    },
    overviewSource() {
      if (this.planet && this.planet.overview && this.activePage === "overview") {
        return this.planet.overview.source;
      } else if (this.planet && this.planet.structure && this.activePage === "structure") {
        return this.planet.structure.source;
      } else if (this.planet && this.planet.geology && this.activePage === "surface") {
        return this.planet.geology.source;
      }
      return ''
    },
  },
}
</script>
