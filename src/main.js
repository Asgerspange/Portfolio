import './scss/app.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import ToggleButton from 'primevue/togglebutton'

import 'primevue/resources/themes/aura-light-blue/theme.css'

const store = createPinia()
    .use(piniaPluginPersistedstate)

const app = createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .component('ToggleButton', ToggleButton)

app.mount('#app')
