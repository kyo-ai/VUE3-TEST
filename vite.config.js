import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":"/src"
    }
  },
  server: {
    host:'0.0.0.0',  // 增添 Network 本地域名启动地址
    // 服务配置
    port: 9090, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源跨域
    /* proxy: {  //代理
      '/dev-api': {
        target: 'http://8.135.1.141',  //目标路径
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, '') // 重写api为空，就是去掉它
      },
      '/prod-api': {
        target: 'http://8.135.1.141',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/prod-api/, '')
      }
    } */
  },
})
