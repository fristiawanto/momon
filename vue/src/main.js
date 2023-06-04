import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import Vue from 'vue';
//import axios from 'axios'

import colorLibrary from './colorLibrary.js'

//Vue.prototype.$http = axios

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
