<template>
  <div>
    <h1>我是发送自定义事件的组件</h1>
    <button @click="toOther">跳到到通讯组件</button>
    <button @click="sendMsg">发送通讯</button>
  </div>
</template>

<script>
import {defineComponent ,ref} from "vue"
import { useRouter } from "vue-router";
import { Bus } from '@/utils/bus'
export default defineComponent({
  name:'Son',
  setup(){
    const router = useRouter();
    const msg = ref('son组件的通讯值')
    function toOther(){
      router.push('/event-contact')
    };
    function sendMsg(){
      Bus.emit('emit-event',msg.value)
    }
    return {
      msg,
      toOther,
      sendMsg
    }
  }
})
</script>

<style scoped>

</style>
