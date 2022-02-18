import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {textQuran} from './ayeha'
import {QuranData} from './quran-metadata'




const app= createApp(App);
app.use(router);
app.mount('#app');






