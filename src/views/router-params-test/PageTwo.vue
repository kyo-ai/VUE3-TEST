<template>
  <div>
    <h1>我是接收query参数的Page2页面</h1>
    <h2>query参数title: {{ title }}</h2>
    <h2>query参数context: {{ context }}</h2>
  </div>
</template>

<script> 
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { getUrlParams } from '@/api/params.js'
export default defineComponent({
  setup(){
    const router = useRouter();
    onMounted(()=>{
      console.log(router.currentRoute.value.query.title) //获取传递的参数
      console.log(getUrlParams('context'))
    });
    const title = ref(router.currentRoute.value.query.title);
    const context = ref(router.currentRoute.value.query.context);
    

    return {
      title,
      context,
    }
  }
})
</script>

<style scoped>

</style>
