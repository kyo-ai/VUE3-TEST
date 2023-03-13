<template>
  <div>
    <h1>我是接收params参数的Page1页面</h1>
    <h2>id :{{ id }}</h2>
    <h2>msg :{{ msg }}</h2>
    <button @click="toIndex">返回首页</button>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue"
import { useRouter } from "vue-router";
export default defineComponent({
  setup(){
    const router = useRouter();
    onMounted(()=>{
      console.log(router.currentRoute.value.params.id) //获取传递的参数
    });
    const id = ref(router.currentRoute.value.params.id);
    const msg = ref(router.currentRoute.value.params.msg);
    function toIndex(){
      router.push('/router-params-test')
    }
    return {
      msg,
      id,
      toIndex
    }
  }
})
</script>

<style scoped>

</style>
