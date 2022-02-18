import { createRouter, createWebHistory } from 'vue-router'
import partsore from './components/partsore.vue'
import insidesore from './components/insidesore.vue'

const routes = [
    { path: '/', component: partsore },
    { path: '/insidesore/:finalPage?', name: 'inside', component: insidesore },
   
  ]
  
  



const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router