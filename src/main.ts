import { createApp } from 'vue'
import App from './sandbox/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import lib from './index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

const app = createApp(App)
app.use(lib)
app.use(router)
app.mount('#app')
