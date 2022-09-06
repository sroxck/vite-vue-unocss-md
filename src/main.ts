import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter ,createWebHashHistory } from "vue-router";
import routes from '~pages'
import 'uno.css'
const router = createRouter({
  history:createWebHashHistory(),
  routes:routes

})
console.log(routes)
const app = createApp(App)
app.use(router)
app.mount('#app')
