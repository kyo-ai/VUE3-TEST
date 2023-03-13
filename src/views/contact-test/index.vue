<template>
  <div><button @click="changeName">改变名字</button> ： {{ person1.name }} -- {{ person1.hobby }}</div>

  <div><button @click="changeNumber">改变数字</button> ： {{ msg }}</div>

  <div><button @click="changeHobby">改变爱好</button> hobby: {{ hobby }}</div>
  
  <div><button @click="showObj">点击赋值</button>：{{ person2 || '空'}}</div>

  <div v-for="(item, index) in newArr" :key="index">
    <span>{{ item.name }}</span> : <span>{{ item.age }}</span>
  </div>

  <div ref="refTest"><button @click="getRef">获取ref实例</button> ref实例测试</div>

  <div>
    firstName:<input type="text" v-model="userName.firstName"><br>
    lastName:<input type="text" v-model="userName.lastName">
    <p>fullName:{{ fullName }}</p>
  </div>
  
  <div><Child v-model:msg="msg" @childHandle="childHandle" /></div>

  <div><button @click="getPromise">点击2s后返回一个Promise函数</button></div>
  
  <div><button @click="reload">刷新页面</button></div>
</template>

<script>
import { defineComponent, ref, toRef, toRefs, reactive, watch, watchEffect, computed, onBeforeMount, onMounted, nextTick, provide } from "vue"
import Child from './Child.vue'
import { promiseThen } from '@/api/promise-resolve'
export default defineComponent({
  components:{
    Child
  },
  setup() {
    console.log("setup")
    onBeforeMount(() => {
      console.log("mounted前")
    })
    onMounted(() => {
      console.log("mounted后")
    })
    nextTick(() => {
      console.log("nextTick函数");
      msg.value = 1000;
      newArr.value = [
        { age: 18, name: "麦克" },
        { age: 23, name: "约翰" },
        { age: 66, name: "玛丽" },
      ]
    })
    const refTest = ref(null)
    const obj = reactive({
      person1:{
        name: "小红",
        hobby: '升龙拳'
      },
      person2:{},
      userName:{
        firstName: "张三",
        lastName: "丰"
      }
    })
    const hobby = toRef(obj.person1,'hobby');
    const msg = ref(10);
    const newArr = ref([]);

    const fullName = computed(()=>{
      return obj.userName.firstName + ' * ' + obj.userName.lastName
    })

    provide('msg',msg)

    //监听reactive对象多个属性用数组，对象形式用()=>
    watch([()=>obj.userName.firstName,()=>obj.userName.lastName],(newValue,oldValue)=>{
       console.log(newValue,oldValue);
       //obj.person1.name = newValue[0] + "1";
    })
    //监听原始数据类型
    watch(msg,(newValue,oldValue)=>{
       console.log(newValue,oldValue);
    })

    watchEffect(()=>{
      console.log(obj.userName.firstName,obj.userName.lastName)
    })
    function changeNumber() {
      msg.value++
    }
    function changeName() {
      obj.person1.name = "丁丁";
    }
    function changeHobby(){
      hobby.value = '钢化斩'; 
    }
    function showObj(){
      obj.person2 = { like: "game", haier: 'red'};
    }
    function getRef(){
      console.log(refTest.value)
    }
    function reload(){
      window.location.reload();
    }
    function childHandle(value){
      msg.value = value
    }
    /* async function getPromise(){
      await promiseThen().then((res)=>{
        console.log(res,"MY WORLD")
      });
      console.log("ATATATAT")
    } */

    function getPromise(){
      promiseThen().then((res)=>{
        console.log(res,"MY WORLD")
      });
      console.log("ATATATAT")
    }


    /**
     * @param grandSonValue 孙子传的数据值
     **/
    //定义一个函数传给孙组件，辅助实现爷孙通信
    function sendMsgToGrandSon(grandSonValue){
      console.log(grandSonValue,"IIIIIIII");
      //数据处理，孙子组件传来之后，自动执行下方代码，从而修改爷爷组件的值
      msg.value = grandSonValue; 
    }
    provide("sendMsgToGrandSon",sendMsgToGrandSon)
    return {
      refTest,
      ...toRefs(obj),
      fullName,
      msg,
      newArr,
      hobby,
      changeName,
      changeNumber,
      changeHobby,
      showObj,
      getRef,
      childHandle,
      sendMsgToGrandSon,
      getPromise,
      reload,
    }
  },

})
</script>

<style scoped>
  div{
    margin: 16px 0;
  }
</style>
