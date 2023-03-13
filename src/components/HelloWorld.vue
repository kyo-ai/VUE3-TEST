<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure 
    </p>
    <h2>首页</h2><br>
    <button @click="toTestPage">跳转到测试页</button>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import { useRouter } from "vue-router";
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg:{
      type: String,
      default:'',
    }
  },
  setup(){
    const router = useRouter();
    function toTestPage(){
      router.push('/contact-test')
    }
    return {
      toTestPage
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
