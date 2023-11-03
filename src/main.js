import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faCircle, faAngleRight, faXmark)

import "./index.css"

const stylingForTailwind = "hover:text-[#DEF4FC] hover:text-[#F7CC7F] hover:text-[#545BFE] hover:text-[#FF6A45] hover:text-[#ECAD7A] hover:text-[#FCCB6B] hover:text-[#65F0D5] hover:text-[#497EFA] text-[#DEF4FC] text-[#F7CC7F] text-[#545BFE] text-[#FF6A45] text-[#ECAD7A] text-[#FCCB6B] text-[#65F0D5] text-[#497EFA]border-[#DEF4FC] border-[#F7CC7F] border-[#545BFE] border-[#FF6A45] border-[#ECAD7A] border-[#FCCB6B] border-[#65F0D5] border-[#497EFA]hover:border-[#DEF4FC] hover:border-[#F7CC7F] hover:border-[#545BFE] hover:border-[#FF6A45] hover:border-[#ECAD7A] hover:border-[#FCCB6B] hover:border-[#65F0D5] hover:border-[#497EFA]bg:border-[#DEF4FC] bg:border-[#F7CC7F] bg:border-[#545BFE] bg:border-[#FF6A45] bg:border-[#ECAD7A] bg:border-[#FCCB6B] bg:border-[#65F0D5] bg:border-[#497EFA] text-[#497EFA]"

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
