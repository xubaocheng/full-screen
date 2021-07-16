import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.scss'
import * as echarts from 'echarts'


const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$echarts = echarts
 
app.mount("#app");