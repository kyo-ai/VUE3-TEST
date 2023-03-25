import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
/* import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' */
const app = createApp(App)
app.use(store).use(router).use(ViewUIPlus).mount('#app')

//引入ElementPlus后，控制台会报错，且出现如下警告，vue内部错误
//Unhandled error during execution of scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core
