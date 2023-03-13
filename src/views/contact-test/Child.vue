<template>
  <div>
    <div class="child">
      <div>我是儿子组件</div>
      <div>爷爷组件传给我的值：{{ msg }}</div>
      <div>儿子组件的通信值： {{ sonMsg }}</div>
      <div>儿子组件的通信值2： {{ sonMsg2 }}</div>
      <div><button @click="changeMsg">更改爷爷组件的msg值</button></div>
      
    </div>
    <grand-son v-model:modelValue="sonMsg" v-model:sonMsg2="sonMsg2"></grand-son>
  </div>
  
</template>

<script>
import {defineComponent, ref, inject} from "vue"
import GrandSon from './GrandSon.vue'
export default defineComponent({
  name:'child',
  components:{
    GrandSon
  },
  props:{
    msg:{
      type: Number,
      default:1,
    }
  },
  setup(props,context){
    const sonMsg = ref("传给孙子的信息1");
    const sonMsg2 = ref("传给孙子的信息2");
    function changeMsg(){
      console.log(context, "PPPPPPPPP",props.msg)
      //context.emit('childHandle', 999)
      context.emit('update:msg', 777)
    }
    return {
      sonMsg,
      sonMsg2,
      changeMsg
    }
  }
})
</script>

<style scoped>
  .child{
    border: 2px solid #999;
    margin: 10px 0;
    padding: 10px 0;
  }
</style>
