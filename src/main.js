import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'

const vuetify = createVuetify()
const store = createPinia()
const app = createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)

app.mount('#app')
