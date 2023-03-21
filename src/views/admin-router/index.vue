<template>
  <div>
    <h2>我是添加动态路由测试首页</h2><br>
    <div><button @click="addSuperAdminRouter">点击添加超级管理员路由</button></div><br>
    <div><button @click="toSuperAdmin">点击跳转至超级管理员页面</button></div>
  </div>
</template>

<script> 
import { defineComponent, onMounted} from "vue"
import { useRouter } from "vue-router";
import { superAdminRoute } from '@/router'
export default defineComponent({
  setup(){
    const router = useRouter();
    onMounted(()=>{
      console.log(router,...superAdminRoute)
    });
    function addSuperAdminRouter(){
      router.addRoute(...superAdminRoute);
      console.log(router.options.routes)
    };
    function toSuperAdmin(){
      router.push('/super-admin')
    }
    return {
      router,
      addSuperAdminRouter,
      toSuperAdmin
    }
  }
})
</script>

<style scoped>

</style>
