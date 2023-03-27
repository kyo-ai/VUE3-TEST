import { createApp } from 'vue'
import './style.css'
import router from './router/index'
import App from './App.vue'

//当前环境的5个数据
const env = import.meta.env
console.log(env.VITE_APP_TITLE)

const app = createApp(App)
app.use(router).mount('#app')
