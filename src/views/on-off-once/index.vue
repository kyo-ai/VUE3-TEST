<template>
  <div>
    <h1>我是接收自定义事件的组件</h1>
    <p>{{ msg }}</p>
    <button @click="toOther">跳到到通讯组件</button>
    <Son></Son>
  </div>
</template>

<script>
import {defineComponent ,ref ,onMounted} from "vue"
import { useRouter } from "vue-router";
import { Bus } from '@/utils/bus'
import Son from './event-contact/Son.vue'
export default defineComponent({
  components:{
    Son
  },
  setup(){
    const router = useRouter();
    const msg = ref('原本的组件值');
    onMounted(()=>{
      Bus.on('emit-event',(val)=>{
        console.log(val)
        msg.value = val  //若不是在同一路由下，则此代码失效，原因是跳转到此路由下会重新加载msg的值为初始值
      })
      console.log(process.env.BASE_URL)
    })
    function toOther(){
      router.push('/event-contact-son')
    };
    return {
      msg,
      toOther
    }
  }
})
</script>

<style scoped>

</style>
