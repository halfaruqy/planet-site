<template>
    <header class="z-auto w-full font-antonio text-white">
        <div :class="bgColor" class="fixed left-0 top-0 h-[85px] w-full border-b-[1px] border-[#838391] sm:h-[114px] lg:h-[85px]">
            <div class="mx-auto grid grid-cols-2 justify-items-stretch mt-6 h-full sm:grid sm:grid-cols-1 sm:grid-flow-row lg:flex lg:justify-between lg:px-8">
                <router-link :to="{name: 'Home'}" class="h-full text-2xl text-start ml-8 font-normal sm:text-center lg:text-3xl ">
                    THE PLANETS
                </router-link>
                <font-awesome-icon 
                    icon="fa-solid fa-bars" 
                    size="xl" 
                    class="lg:hidden sm:hidden justify-self-end mr-7 mt-1 cursor-pointer hover:text-[#838391] ease-in-out duration-300" 
                    @click="clickMenu" 
                    v-if="!menuActive"/>
                <font-awesome-icon 
                    icon="fa-solid fa-xmark" 
                    size="xl" 
                    class="lg:hidden sm:hidden justify-self-end mr-7 mt-1 cursor-pointer hover:text-[#838391] ease-in-out duration-300"
                    @click="clickMenu" 
                    v-if="menuActive"/>
                <nav :class="[toggleMenu, 'mt-[6px]', 'lg:static', 'lg:block', 'lg:mt-[6px]', 'sm:static', 'sm:block', 'sm:mt-5']">
                    <ul 
                        class="list-none z-[-1] transition-all duration-500 absolute w-full bg-[#070724] sm:bg-transparent text-gray-500 sm:h-full sm:flex sm:static sm:z-[-2] lg:h-full lg:bg-transparent lg:flex lg:z-auto lg:static">
                        <li
                        v-for="menuItem in menuItems"
                        :key="menuItem.name"
                        class="ml-10 mr-12 py-5 first:mt-3 last:mb-20 border-b-[1px] border-[#838391] sm:first:mt-0 sm:mx-auto sm:border-none sm:py-0 lg:first:mt-0 lg:py-0 lg:mx-5 lg:border-none"
                        >
                        <font-awesome-icon icon="fa-solid fa-circle" :class="[menuItem.textColor, 'pr-6', 'sm:hidden', 'lg:hidden']" />
                        <router-link
                            @click="clickPlanetMenu(menuItem.name)"
                            @mouseover="emitHoverEvent(menuItem.name)"
                            @mouseleave="resetActivePlanet('')"
                            :to="menuItem.url"
                            class="h-full hover:border-b-2 sm:hover:border-b-4 lg:hover:border-t-[4px] lg:hover:border-b-0 transition-all duration-75 items-center py-2.5 uppercase font-spartan text-lg font-medium tracking-widest sm:text-[14px] lg:pt-[33px] lg:tracking-normal lg:text-[18px] lg:font-light"
                            :class="[menuItem.borderColor, `hover:${menuItem.textColor}`, planetColor(menuItem.name, menuItem.textColor), activeMenuPlanet(menuItem.name)]"
                            >{{ menuItem.name }}</router-link
                        >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
const menu =[
  {
    name: "Mercury",
    url: "/mercury",
    color: "#DEF4FC",
    textColor: "text-[#DEF4FC]",
    borderColor: "border-[#DEF4FC]",
    hoverColor: "hover:border-[#DEF4FC]"
  },
  {
    name: "Venus",
    url: "/venus",
    color: "#F7CC7F",
    textColor: "text-[#F7CC7F]",
    borderColor: "border-[#F7CC7F]",
    hoverColor: "hover:border-[#F7CC7F]"
  },
  {
    name: "Earth",
    url: "/earth",
    color: "#545BFE",
    textColor: "text-[#545BFE]",
    borderColor: "border-[#545BFE]",
    hoverColor: "hover:border-[#545BFE]"
  },
  {
    name: "Mars",
    url: "/mars",
    color: "#FF6A45",
    textColor: "text-[#FF6A45]",
    borderColor: "border-[#FF6A45]",
    hoverColor: "hover:border-[#FF6A45]"
  },
  {
    name: "Jupiter",
    url: "/jupiter",
    color: "#ECAD7A",
    textColor: "text-[#ECAD7A]",
    borderColor: "border-[#ECAD7A]",
    hoverColor: "hover:border-[#ECAD7A]"
  },
  {
    name: "Saturn",
    url: "/saturn",
    color: "#FCCB6B",
    textColor: "text-[#FCCB6B]",
    borderColor: "border-[#FCCB6B]",
    hoverColor: "hover:border-[#FCCB6B]"
  },
  {
    name: "Uranus",
    url: "/uranus",
    color: "#65F0D5",
    textColor: "text-[#65F0D5]",
    borderColor: "border-[#65F0D5]",
    hoverColor: "hover:border-[#65F0D5]"
  },
  {
    name: "Neptune",
    url: "/neptune",
    color: "#497EFA",
    textColor: "text-[#497EFA]",
    borderColor: "border-[#497EFA]",
    hoverColor: "hover:border-[#497EFA]"
  }
]

export default {
    name: "NavBar",
    data() {
        return {
            menuItems: menu,
            menuActive: false,
            scrollPosition: 0,
            bgColor: "bg-transparent",
            activePlanet: "",
        }
    },
    props: {
        hoverPlanet: String,
        activePlanetProps: String,
    },
    computed: {
        toggleMenu() {
            return {
                "hidden": !this.menuActive,
                "block": this.menuActive,
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.activePlanet = this.$route.params.name
        // console.log(this.activePlanet)
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        clickMenu() {
        this.menuActive = !this.menuActive;
        },
        clickPlanetMenu(menu){
            this.menuActive = !this.menuActive;
            this.activePlanet = menu
            this.$emit('active-planet', this.activePlanet)
            // console.log(this.activePlanet)
        },
        handleScroll() {
            this.scrollPosition = window.scrollY;
            // Conditionally set the background color based on scroll position
            if (this.scrollPosition > 10) { // Change 100 to your desired scroll position
                this.bgColor = 'bg-dark-sky'; // Change to the Tailwind class for the desired background color
            } else {
                this.bgColor = 'bg-transparent'; // Reset to the default background color when scrolling up
            }
        },
        emitHoverEvent(planetName) {
            this.$emit('hover-planet', planetName);
        },
        resetActivePlanet(planetName) {
            this.$emit('hover-planet', planetName);
        },
        isHovered(menuItemName) {
            return this.hoverPlanet === menuItemName;
        },
        planetColor(planet, textColor) {
            if(this.hoverPlanet === planet) {
                return `${textColor} lg:border-t-4`
            }
            return ""
        },
        activeMenuPlanet(planet) {
            if(this.activePlanet === planet || this.activePlanet === planet.toLowerCase()) {
                return "text-white border-b-2 sm:border-b-4 lg:border-b-0 lg:border-t-4"
            }
            return ""
        }
  },
}
</script>
