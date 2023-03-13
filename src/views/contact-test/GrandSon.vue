<template>
  <div class="grand-son">
    <div>
      我是孙子组件
    </div>
    <div>这是爷爷给我的值：{{ grandFatherMsg }}</div>
    <div><button @click="sendMsgToFather">传值给爸爸</button></div>
    <div><button @click="sendMsgToYeYe">传值给爷爷</button></div>
  </div>
  
</template>
<script>
import {defineComponent, inject} from "vue"
export default defineComponent({
  name:"grandSon",
  props:{
    modelValue:{
      type: String,
      default:""
    },
    sonMsg2:{
      type: String,
      default:""
    },
  },
  setup( props, context){
    const grandFatherMsg = inject('msg','默认值');

    

    //通过emit方式改变爸爸组件的值
    function sendMsgToFather(){
      context.emit('update:sonMsg2', '被孙子组件修改后的值2')
      context.emit('update:modelValue', '被孙子组件修改后的值1');
    };

    //接收爷爷组件提供的方法
    const sendMsgToGrandFather = inject('sendMsgToGrandSon');
    //通过一个点击事件向爷组件通信，传递数据
    function sendMsgToYeYe(){
      sendMsgToGrandFather(8888) //8888为要传的数据
    }
    return{
      grandFatherMsg,
      sendMsgToFather,
      sendMsgToGrandFather,
      sendMsgToYeYe
    }
  }
})
</script>

<style scoped>
  .grand-son{
    border: 2px solid #999;
    margin: 10px 0;
    padding: 10px 0;
  }
</style>
