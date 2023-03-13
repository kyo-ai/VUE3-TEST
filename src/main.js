import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
/* import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' */
createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')
