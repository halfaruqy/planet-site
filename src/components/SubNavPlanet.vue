<template>
<div
    :class="bgColor"
    class="z-10 fixed top-[85px] w-full border-b-[1px] border-[#838391] lg:static lg:mt-10 sm:absolute sm:top-[550px] sm:flex sm:justify-end sm:border-none sm:text-left">
    <ol class="flex justify-between items-center uppercase text-white text-[11px] tracking-[0.15rem] cursor-pointer lg:mr-[365px] sm:mr-4 sm:grid sm:grid-flow-row">
        <li 
            @click="currentSubNav(subNav)"
            class="px-12 py-4 sm:py-1 sm:h-[42px] sm:mb-4 sm:px-24 sm:border-[1px] sm:cursor-pointer lg:last:mb-36" 
            v-for="subNav, index in subNavs" 
            :key="index"
            :class="[currentClickNav(subNav)]"
                ><span 
                    class="pb-[14px] sm:pb-0 sm:my-2 sm:flex" 
                    >
                    <span class="hidden sm:flex sm:ml-[-60px] sm:pr-12">{{ `0${index+1}` }}</span> 
                    <span class="sm:flex">{{ subNav }}</span>
                </span>
        </li>
    </ol>
</div>
</template>

<script>
    export default {
    name: "SubNavPlanet",
    data () {
        return {
            subNavs: ["overview", "structure", "surface"],
            currentNav: "overview",
            scrollPosition: 0,
            bgColor: "bg-transparent",
        }
    },
    computed: {
        currentPlanet() {
            if (this.activePlanet === "mercury") {
                return  "border-b-4 opacity-100 border-red-300"
            } 
            return ""
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    props: {
        activePlanet: String
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        currentSubNav(menu) {
            if (menu === this.subNavs[0]) {
                this.currentNav = "overview"
            } else if (menu === this.subNavs[1]) {
                this.currentNav = "structure"
            } else {
                this.currentNav = "surface"
            }
            this.$emit('current-sub-nav', this.currentNav)
        },
        handleScroll() {
            this.scrollPosition = window.scrollY;
            // Conditionally set the background color based on scroll position
            if (this.scrollPosition > 10) { // Change 100 to your desired scroll position
                this.bgColor = 'bg-dark-sky sm:bg-transparent'; // Change to the Tailwind class for the desired background color
            } else {
                this.bgColor = 'bg-transparent'; // Reset to the default background color when scrolling up
            }
        },
        currentClickNav(nav) {
            if (this.activePlanet === "Mercury" && this.currentNav === nav) {
                    return 'border-b-4 opacity-100 border-[#DEF4FC] sm:bg-[#DEF4FC] sm:text-gray-600'
            } else if (this.activePlanet === "Venus" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#F7CC7F] sm:bg-[#F7CC7F] sm:text-gray-600'
            } else if (this.activePlanet === "Earth" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#545BFE] sm:bg-[#545BFE] sm:text-white'
            } else if (this.activePlanet === "Mars" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#FF6A45] sm:bg-[#FF6A45] sm:text-gray-600'
            } else if (this.activePlanet === "Jupiter" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#ECAD7A] sm:bg-[#ECAD7A] sm:text-gray-600'
            } else if (this.activePlanet === "Saturn" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#FCCB6B] sm:bg-[#FCCB6B] sm:text-gray-600'
            } else if (this.activePlanet === "Uranus" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#65F0D5] sm:bg-[#65F0D5] sm:text-gray-600'
            } else if (this.activePlanet === "Neptune" && this.currentNav === nav) {
                return 'border-b-4 opacity-100 border-[#497EFA] sm:bg-[#497EFA] sm:text-white'
            }
            return 'opacity-50 hover:opacity-100 transition-all hover:border-b-4 border-[#D8D8D8] sm:hover:border-none sm:hover:bg-gray-600'
        }
    },
    }
</script>
