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

import imgMercury from "../assets/planet-mercury.svg"
import internalMercury from "../assets/planet-mercury-internal.svg"
import GeoMercury from "../assets/geology-mercury.png"

import imgVenus from "../assets/planet-venus.svg"
import internalVenus from "../assets/planet-venus-internal.svg"
import GeoVenus from "../assets/geology-venus.png"

import imgEarth from "../assets/planet-earth.svg"
import internalEarth from "../assets/planet-earth-internal.svg"
import GeoEarth from "../assets/geology-earth.png"

import imgMars from "../assets/planet-mars.svg"
import internalMars from "../assets/planet-mars-internal.svg"
import GeoMars from "../assets/geology-mars.png"

import imgJupiter from "../assets/planet-jupiter.svg"
import internalJupiter from "../assets/planet-jupiter-internal.svg"
import GeoJupiter from "../assets/geology-jupiter.png"

import imgSaturn from "../assets/planet-saturn.svg"
import internalSaturn from "../assets/planet-saturn-internal.svg"
import GeoSaturn from "../assets/geology-saturn.png"

import imgUranus from "../assets/planet-uranus.svg"
import internalUranus from "../assets/planet-uranus-internal.svg"
import GeoUranus from "../assets/geology-uranus.png"

import imgNeptune from "../assets/planet-neptune.svg"
import internalNeptune from "../assets/planet-neptune-internal.svg"
import GeoNeptune from "../assets/geology-neptune.png"

const planets = [
  {
    name: "Mercury",
    url: "/mercury",
    color: "#DEF4FC",
    image: imgMercury,
    imageInternal: internalMercury,
    imageGeo: GeoMercury,
    overview: {
      content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    structure: {
      content: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    geology: {
      content: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
    },
    rotation: "58.6 Days",
    revolution: "87.97 Days",
    radius: "2,439.7 KM",
    temperature: "430°c"
  },
  {
    name: "Venus",
    url: "/venus",
    color: "#F7CC7F",
    image: imgVenus,
    imageInternal: internalVenus,
    imageGeo: GeoVenus,
    overview: {
      content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      source: "https://en.wikipedia.org/wiki/Venus"
    },
    structure: {
      content: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      source: "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    geology: {
      content: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      source: "https://en.wikipedia.org/wiki/Venus#Surface_geology"
    },
    rotation: "243 Days",
    revolution: "224.7 Days",
    radius: "6,051.8 KM",
    temperature: "471°c"
  },
  {
    name: "Earth",
    url: "/earth",
    color: "#545BFE",
    image: imgEarth,
    imageInternal: internalEarth,
    imageGeo: GeoEarth,
    overview: {
      content: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      source: "https://en.wikipedia.org/wiki/Earth"
    },
    structure: {
      content: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      source: "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    geology: {
      content: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
      source: "https://en.wikipedia.org/wiki/Earth#Surface"
    },
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°c"
  },
  {
    name: "Mars",
    url: "/mars",
    color: "#FF6A45",
    image: imgMars,
    imageInternal: internalMars,
    imageGeo: GeoMars,
    overview: {
      content: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
      source: "https://en.wikipedia.org/wiki/Mars"
    },
    structure: {
      content: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    geology: {
      content: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      source: "https://en.wikipedia.org/wiki/Mars#Surface_geology"
    },
    rotation: "1.03 Days",
    revolution: "1.88 Years",
    radius: "3,389.5 KM",
    temperature: "-28°c"
  },
  {
    name: "Jupiter",
    url: "/jupiter",
    color: "#ECAD7A",
    image: imgJupiter,
    imageInternal: internalJupiter,
    imageGeo: GeoJupiter,
    overview: {
      content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      source: "https://en.wikipedia.org/wiki/Jupiter"
    },
    structure: {
      content: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    geology: {
      content: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
    },
    rotation: "9.93 Hours",
    revolution: "11.86 Years",
    radius: "69,911 KM",
    temperature: "-108°c"
  },
  {
    name: "Saturn",
    url: "/saturn",
    color: "#FCCB6B",
    image: imgSaturn,
    imageInternal: internalSaturn,
    imageGeo: GeoSaturn,
    overview: {
      content: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      source: "https://en.wikipedia.org/wiki/Saturn"
    },
    structure: {
      content: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    geology: {
      content: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
    },
    rotation: "10.8 Hours",
    revolution: "29.46 Years",
    radius: "58,232 KM",
    temperature: "-138°c"
  },
  {
    name: "Uranus",
    url: "/uranus",
    color: "#65F0D5",
    image: imgUranus,
    imageInternal: internalUranus,
    imageGeo: GeoUranus,
    overview: {
      content: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      source: "https://en.wikipedia.org/wiki/Uranus"
    },
    structure: {
      content: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    geology: {
      content: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      source: "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
    },
    rotation: "17.2 Hours",
    revolution: "84 Years",
    radius: "25,362 KM",
    temperature: "-195°c"
  },
  {
    name: "Neptune",
    url: "/neptune",
    color: "#497EFA",
    image: imgNeptune,
    imageInternal: internalNeptune,
    imageGeo: GeoNeptune,
    overview: {
      content: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      source: "https://en.wikipedia.org/wiki/Neptune"
    },
    structure: {
      content: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    geology: {
      content: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
    },
    rotation: "16.08 Hours",
    revolution: "164.79 Years",
    radius: "24,622 KM",
    temperature: "-201°c"
  }
]

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
