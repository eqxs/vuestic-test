// @ts-nocheck
import 'vuestic-ui/dist/vuestic-ui.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VuesticPlugin } from 'vuestic-ui'

createApp(App).use(store).use(router).use(VuesticPlugin).mount('#app')
