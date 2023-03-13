<template>
  <div>
    <h1>初始组件</h1>
    <br>
    <button @click="toPage1"> 跳转至 Page1 </button><br><br>
    <button @click="toPage2"> 跳转至 Page2 </button>
  </div>
</template>

<script> 
import { defineComponent } from "vue"
import { useRouter } from "vue-router";
export default defineComponent({
  setup(){
    const router = useRouter();
    function toPage1(){
      router.push({
        name:'paramsPage1',
        params:{
          id:'23fs234jks',
          msg:'一段msg参数内容'
        }
      })
    };
    function toPage2(){
      router.push({
        name: 'paramsPage2',
        query: {
          title:"一段标题",
          context: "重大新闻"
        }
      })
    };
    return {
      //router,
      toPage1,
      toPage2,
    }
  }
})
</script>

<style scoped>

</style>
