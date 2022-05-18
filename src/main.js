import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global css
import './global.css'

createApp(App).use(router).mount('#app')
