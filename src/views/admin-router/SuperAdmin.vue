<template>
  <div>
    <h2>我是超级管理员页面</h2>
    <div><button @click="back">返回首页</button></div><br>
    <div><button @click="toChild">跳转到子路由</button></div>
    <router-view></router-view>
  </div>
</template>

<script > 
import {defineComponent} from "vue"
import { useRouter } from "vue-router";
export default defineComponent({
  setup(){
    const router = useRouter();
    function back(){
      console.log(router.options)
      router.push('/admin')
    };
    function toChild(){
      router.push('/super-admin-child')
    }
    return {
      back,
      toChild
    }
  }
})
</script>

<style scoped>

</style>
